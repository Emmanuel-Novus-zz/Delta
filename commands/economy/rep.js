const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (message.channel.id === "556410299113013264") {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    const member = message.mentions.users.first();
    if (!member) return message.channel.send("<:false:551460099600678944> **Merci de mentionner un utilisateur à qui donner un point de réputation.**")
    if (member.id === message.author.id) return message.channel.send("<:false:551460099600678944> **Vous ne pouvez pas vous envoyer un point de réputation à vous même !**");
   
    if (!db.get("rep").find({ auteur: member.id }).value()) {

        db.get("rep").push({ auteur: member.id, rep: 1 }).write()

    } else {

      var userrepdb = db.get("rep").filter({ auteur: member.id }).find('rep').value()

      var rep = Object.values(userrepdb)

      db.get("rep").find({ auteur: member.id }).assign({ auteur: member.id, rep: rep[1] += 1 }).write()   
}  
    message.channel.send(`<:true:551460100347396107> **Vous venez d'envoyer un point de réputation à ${member.tag} !**`)
}else {
    message.channel.send("<:false:551460099600678944> **Vous devez faire cette commande dans le salon réputation du serveur officiel.**")
}
}

module.exports.help = {
    name: "rep"
}