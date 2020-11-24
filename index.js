const Discord = require("Discord.js")
const bot = new Discord.client()

var prefix = "!";

bot.on("ready", function(){
  console.log("Coucou")
})

bot.on("message", message =>{
 if(message.content.startsWith(prefix + "test"){
    message.reply("Test réussi !")
    }})

bot.login(PROCESS.env.TOKEN)
