const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

exports.run = (client, message, args) => {
        const adapter = new FileSync('./db.json')
        const db = low(adapter)
        const get_notes = db.get("note").find({ auteur: message.author.id }).value()
        let note = ''
        if (!get_notes) note = "<:false:551460099600678944> Aucune note enregistré pour le moment."
        else {
            let note_msg = Object.values(get_notes)
            note = note_msg[1]
        }
        message.author.send(":pushpin: __**Voici vos notes**__ : \n ```" + note + "```")
        message.channel.send("<:true:551460100347396107> **Vos notes ont été envoyé en message privée.**")
}

module.exports.help = {
    name: "note"
}