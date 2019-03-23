const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour bannir un utilisateur.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("BAN_MEMBERS")) {
        const member = message.mentions.members.first();
        if (!member) return message.channel.send("<:false:551460099600678944> Merci de mentionner un utilisateur pour bannir.")
        member.ban().then(member => {
       message.channel.send(`<:true:551460100347396107> L'utilisateur **${member.user.tag}** est désormais banni du serveur.`).catch(console.error);
    })
    }
    message.delete();
}

module.exports.help = {
    name: "ban"
}