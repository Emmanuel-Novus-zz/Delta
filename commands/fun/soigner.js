const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_nomentions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Merci de mentionner une personne pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(error_nomentions)
    }else {
        var soigner = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> viens de soigner <@" + member.user.id + "> !")
            .setColor("#34363C")
            .setImage("https://zupimages.net/up/19/10/y5ao.jpg")
        message.channel.send(soigner)
    }
}

module.exports.help = {
    name: "soigner"
}