//Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();

var prefix = "!!";//the text before commands. (no commands added at the moment, except !!ping).


function hasPrefix(var msg){
if(msg.substring(0,prefix.length) == prefix){
  return true;
}
else{
  return false;
}

}


//Listener Event: message recieved (this will run every time a message is recieved).
bot.on('message', message => {

  //variables
  var sender = message.author; //the person who sent the message
  var msg = message.content.toUpperCase(); //takes the message, and makes it all uppercase for easier management.


  //ping / pong command for testing response time
  if (msg === prefix + 'PING') { //checks if the message sent by the sender is !!ping.
    message.channel.send('PONG'); //sends PONG to the channel.
  }

});

//login event.
bot.login(process.env.BOT_TOKEN);
//END OF CODE.
