const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let arg = message.content.split(" ").slice(1);
    let thingToEcho = arg.join(" ");
    if(!args[0]) return message.channel.send("<:false:551460099600678944> Votre syntaxe est incorrecte. \n```Syntaxe : d!suggest <Description>```")
    var suggest = new Discord.RichEmbed()
        .setDescription("<:suggest:551484929293156372> | Nouvelle suggestion !")
        .addField("💼 __Auteur :__", "<@" + message.author.id + ">")
        .addField("📝 __Description :__", thingToEcho, true)
        .setColor("#FFD97C")
    client.channels.get('551425482705338408').send(suggest)
    .then(function (message){
        message.react("551460100347396107")
        message.react("551460099600678944")
    }).catch(function(){

    });
    message.delete();
    message.author.send("<:true:551460100347396107> Votre suggestion viens d'être envoyé sur le serveur principal.")
}

module.exports.help = {
    name: "suggest"
}