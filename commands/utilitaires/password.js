const Discord = require('discord.js');
const generator = require('generate-password');
const fetch = require('node-superfetch');

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);

exports.run = (client, message, args) => {

    message.reply("Combien de caractères souhaitez-vous ?");

    var nb_caract = "nd";
    var nombres = "nd";
    var symboles = "nd";

    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 300000 });

    collector.on('collect', message => {
        if(nb_caract === "nd" && nombres === "nd" && symboles === "nd"){
            if(isNaN(message.content)) return message.reply('veuillez entrer un nombre valide.');
            if(parseInt(message.content) > 100000) return message.reply('Min : 0 | Max : 100000')
            nb_caract = message.content;
            return message.reply('Le mot de passe peut-il contenir des nombres ? oui/non');
        }
        
        if(nb_caract !== "nd" && nombres === "nd" && symboles === "nd"){
            var response = message.content.toLowerCase();
            if(response !== "oui" && response !== "non") return message.reply('répondez par `oui` ou par `non` !');
            if(response === 'oui') nombres = true;
            if(response === 'non') nombres = false;
            return message.reply('Le mot de passe peut-il contenir des symboles ? oui/non');
        }
        if(nb_caract !== "nd" && nombres !== "nd" && symboles === "nd"){
            var response = message.content.toLowerCase();
            if(response !== "oui" && response !== "non") return message.reply('répondez par `oui` ou `non` !');
            if(response === 'oui') symboles = true;
            if(response === 'non') symboles = false;
            return collector.stop('ok');
        }
    });

    collector.on('end', (collected, reason) => {

        if(reason === "time") {
            return message.reply('Temps écoulé.').then(d => d.delete(5000));
        }
        if(reason === "ok") {
            var password = generator.generate({
                length: nb_caract,
                numbers: nombres,
                symboles: symboles
            });
            if(password.length > 1970){
                fetch.post(`https://hastebin.com/documents`).send(password).then(body => {
                    message.author.send('```Le mot de passe compte trop de caractères, il se trouve donc sur hastebin. Le lien : https://hastebin.com/'+body.body.key+'```');
                    return message.channel.send('<:true:551460100347396107>Mot de passe envoyé en message privé !');
                });
            }else {
            message.author.send('```Mot de passe généré : '+password+'```');
            return message.channel.send('<:true:551460100347396107> Mot de passe envoyé en message privé !');
        }}
        if(reason !== "time" && reason !== "ok"){
            return message.reply('erreur.').then(d => d.delete(5000));
        }
    });

    console.log(times+"\x1b[36m%s\x1b[0m","[INFO]","\x1b[0m","Command: "+"password"+" executed | By: "+message.author.displayName+" | In server: "+message.guild.name);
}

module.exports.help = {
    name:"password"
}