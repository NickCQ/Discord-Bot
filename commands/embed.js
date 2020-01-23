const Discord = require('discord.js');
module.exports = {
    name:'embed',
    description:'información de un usuario',
    execute(message, args) {
		
		const profileembed = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle('INFORMACIÓN DEL USUARIO')
		.addField('Nombre de usuario: ', message.author.username)
		.addField('Servidor actual: ', message.guild.name)
		.setThumbnail(message.author.avatarURL)
		if(message.author.username === "Yoyomax") {
			profileembed.setFooter(`Sígueme en mi canal de Twitch: https://www.twitch.tv/yoyomax1/videos`)
		}
		;
        message.channel.send(profileembed);
    }
};