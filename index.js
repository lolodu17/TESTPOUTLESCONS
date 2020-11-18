const Discord = require("Discord.js")
const bot = new Discord.client()

bot.on("ready", function(){
  console.log("Coucou")
})

bot.login(PROCESS.env.TOKEN)
