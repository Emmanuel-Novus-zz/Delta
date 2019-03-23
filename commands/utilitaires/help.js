const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setTitle("🌐 • Listes des commandes disponibles :")
        .addField("⚡ • __Administration__ <:online:555366525155016704>", "`say`, `annonce`, `mp`")
        .addField("⚠️ • __Modération__ <:online:555366525155016704>", "`ban`, `kick`, `warn`, `clear`, `tempmute`")
        .addField("🔨 • __Utilitaires__ <:online:555366525155016704>", "`help`, `test`, `invite`, `suggest`, `bvn`, `infobot`, `infodiscord`, `password`, `calc`, `addnote`, `note`")
        .addField("🎮 • __Divertissement__ <:online:555366525155016704>", "`sondage`, `trueorfalse`, `blague`")
        .addField("🎞️ • __Fun__ <:online:555366525155016704>", "`kiss`, `calin`, `declareramour`, `declareramitie`, `frapper`, `soigner`")
        .addField("<:gold:551468771534176262> • __Économie__ <:online:555366525155016704>", "`profil`, `setdesc`, `daily`, `rep`")
        .setThumbnail(`${client.user.avatarURL}`)
        .setColor("#282830")   
    message.channel.send(help)
}

module.exports.help = {
    name: "help"
}