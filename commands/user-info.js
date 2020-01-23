module.exports = {
    name: 'user-info',
    description: 'Da información del usuario',
    execute (message, args) {
        message.channel.send(`Nombre de usuario: ${message.author.username}\n ID: ${message.author.id}`);
    },
};