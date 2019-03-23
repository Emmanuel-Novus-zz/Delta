const Discord = require('discord.js');
const math = require('mathjs');

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);

exports.run = (client, message, args) => {

    let calcul = args.join(" ");

    calcul = calcul.replace(/['x'_]/g,'*');

    if(!calcul) return message.channel.send("Utilisation : `d!calc [opération]`").then(d => d.delete(5000));

    try {
      math.eval(calcul);
      message.channel.send("```Résultat :\n\n"+calcul+" = "+math.eval(calcul)+"```");
    } catch (error) {
      message.channel.send("Vérifiez votre opération !").then(d => d.delete(5000));
    }

}

module.exports.help = {
  name: "calc"
}
