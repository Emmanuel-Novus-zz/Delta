const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.channel.send("<:true:551460100347396107> __**Le serveur est actuellement en ligne.**__")
}

module.exports.help = {
    name: "test"
}