const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#F43436")
         message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
    let msg = message.content.split(' ').slice(1);
    if (!msg[0]) {
        message.channel.send("<:false:551460099600678944> Merci de donner un chiffre entre 1 et 100 pour effectuer cette commande.")
    }else {
        let x = parseInt(msg[0], 10)
        if (x > 100) {
            x = 100
        }

        message.delete();
        message.channel.bulkDelete(x)
        message.channel.send("<:delete:551428989047013396> **" + x + " messages supprimés.**").then(msg => {msg.delete(5000)});
    }
}
} 