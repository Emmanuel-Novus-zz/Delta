const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let arg = message.content.split(" ").slice(1);
        let thingToEcho = arg.join(" ")
        if (!args[0]) return message.channel.send("<:false:551460099600678944> Votre syntaxe est incorrecte. \n```Syntaxe : d!trueorfalse <Message>```")
        var trueorfalse = new Discord.RichEmbed()
            .setTitle("❓ VRAI OU FAUX :")
            .addField(thingToEcho, "Répondez avec les réactions <:true:551460100347396107> ou <:false:551460099600678944>!")
            .setColor("#A31F33")
        message.channel.send(trueorfalse)
        .then(function (message){
            message.react("551460100347396107")
            message.react("551460099600678944")
        }).catch(function(){

        });
        message.delete()
    }
}

module.exports.help = {
    name: "trueorfalse"
}