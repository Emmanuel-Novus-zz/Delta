const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
         var error_permissions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("ADMINISTRATOR")) {
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ");
    if (!args[0]) {
        var error = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Merci d'entrer un message pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error)
    }else {
    var say = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(thingToEcho)
        .setColor("#282830")
    message.channel.send(say)
    message.delete();
}
}
}

module.exports.help = {
    name: "say"
}
