const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(error_mentions)
    }else {
        var frapper_embed = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> viens de frapper " + "<@" + member.user.id + "> !")
            .setColor("#34363C")
            .setImage("https://zupimages.net/up/19/10/45xi.jpg")
        message.channel.send(frapper_embed)
    }
}

module.exports.help = {
    name: "frapper"
}
