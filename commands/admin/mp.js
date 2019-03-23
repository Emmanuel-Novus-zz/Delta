const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
        const member = message.mentions.members.first();
        if(!member) return message.channel.send("<:false:551460099600678944> Merci de mentionner un utilisateur pour envoyer un message privé depuis le bot.")
        let arg = message.content.split(" ").slice(2);
        let content_msg = arg.join(" ");
        if(!args[0]) return message.channel.send("<:false:551460099600678944> Votre syntaxe est incorrecte. \n```Syntaxe : d!mp [Utilisateur] [Message]```");
        member.send(`:pushpin: | Vous avez reçu un message de **${message.author.tag}** depuis le serveur **${message.guild.name}** : **` + content_msg + `**`)
        message.channel.send(`<:true:551460100347396107> | Votre message privé a bien été envoyé à **${member.user.tag}** !`)
        message.delete();
    }
}

module.exports.help = {
    name: "mp"
}