const Discord = require('discord.js');
module.exports = {
    name: 'poll',
    description: 'Hace una encuesta',
    execute(message, args) {
        if(!args) message.channel.send('Tienes que poner argumentos para tu encuesta.')
        
        const Embed = new Discord.RichEmbed()
        .setColor(0xFFC300)
        .setTitle(`Encuesta de ${message.author.username}`)
        .setDescription(args.join(' '))
        ;
        
        message.channel.send(Embed).then(async (Embed) => { await Embed.react('👍'); await Embed.react('👎')}).catch(()=> console.error('Emoji falló en reaccionar'));
        message.delete(1000);
    },
};