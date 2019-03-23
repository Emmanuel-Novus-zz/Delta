const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var args = message.content.split(" ").slice(1);
    var msg_note = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send("<:false:551460099600678944> **Merci de donner des notes correcte s'il vous plaît.**")
    if (!db.get("note").find({ auteur: author }).value()) {

        db.get("note").push({ auteur: author, notes: msg_note }).write()

      } else {

        var usernotedb = db.get("note").filter({ auteur: author }).find('notes').value()

        var note = Object.values(usernotedb)

        db.get("note").find({ auteur: author }).assign({ auteur: author, notes: msg_note }).write()   
}
message.delete()
message.channel.send("<:true:551460100347396107> **Vos notes ont bien été actualités avec succès.**")
}

module.exports.help = {
    name: "addnote"
}