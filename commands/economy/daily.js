const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (message.channel.id === "554326914622291968") {
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('./db.json')
        const db = low(adapter)
        db.defaults({ description: [], credits: [], note: []}).write()
        var author = message.author.id;
       
    if (!db.get("credits").find({ auteur: author }).value()) {

        db.get("credits").push({ auteur: author, credits: 500 }).write()
  
        } else {
  
          var usercreditsdb = db.get("credits").filter({ auteur: author  }).find('credits').value()
  
          var credits = Object.values(usercreditsdb)
  
          db.get("credits").find({ auteur: author }).assign({ auteur: author, credits: credits[1] += 500 }).write()   
    }
    message.channel.send("<:true:551460100347396107> **Vous venez de récupérer 500 crédits. Merci de patienter 2 heures avant de pouvoir effectuer encore cette action.**")   
    }else {
        message.channel.send("<:false:551460099600678944> **Vous devez effectuez cette action dans le salon daily du serveur officiel.**")
    }

    
}

module.exports.help = {
    name: "daily"
}