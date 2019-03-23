const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var invite = new Discord.RichEmbed()
        .setDescription(`🔧 Ajouter ${client.user.username} sur votre serveur discord !`)
        .addField("__**Lien d'invitation avec les permissions d'administrateurs :**__", "[**Cliquez ici**](https://discordapp.com/oauth2/authorize?client_id=551431456002670632&scope=bot&permissions=8)")
        .addField("__**Lien d'invitation avec les permissions que vous pouvez personnaliser :**__", "[**Cliquez ici**](https://discordapp.com/oauth2/authorize?client_id=551431456002670632&scope=bot&permissions=1342319703)")
        .setColor("#8697CB")
    message.channel.send(invite)
}

module.exports.help = {
    name: "invite"
}
