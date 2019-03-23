const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("❌ Vous ne disposez pas les permissions nécessaires pour faire un sondage.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
        let arg = message.content.split(" ").slice(1);
        let thingToEcho = arg.join(" ")
        if (!args[0]) return message.channel.send("❌ Votre syntaxe est incorrecte. \n```Syntaxe : d!sondage <Question>```");
        var sondage = new Discord.RichEmbed()
                .setTitle("📊 Sondage :")
                .addField(thingToEcho, "Répondez dès maintenant au sondage avec ✅ ou ❌!")
                .setColor("#00BFFF")
            message.channel.send(sondage)
        .then(function (message){
            message.react("✅")
            message.react("❌")
        }).catch(function(){

        });
        message.delete()
    }
}