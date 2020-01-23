const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot listo!');
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);

    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('No se puede ejecutar este comando aquí');
    }

    if (command.args && !args.length) {
        let reply = `Tienes que proveer argumentos para este comando, ${message.author}!`;

        if ( command.usage) {
            reply += `\n Uso apropiado: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    };

    try {
        command.execute(message, args||serverQueue);
    } catch (error) {
        console.error(error);
        message.reply('Hubo un error intentando ejecutar este comando.');
    };

});

client.login(token);