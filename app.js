//Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();

var prefix = "!!";//the text before commands. (no commands added at the moment, except !!ping).

function hasPrefix(msg){
  if(msg.substring(0,prefix.length) == prefix){
    return true;
  }
  return false;
}




//Listener Event: message recieved (this will run every time a message is recieved).
bot.on('message', message => {

  //variables
  var sender = message.author; //the person who sent the message
  var msg = message.content.toUpperCase(); //takes the message, and makes it all uppercase for easier management.


  if(hasPrefix(msg)){ // if the message is a command

    msg = msg.substring(prefix.length); // removes the prefix from the message
    command = msg.split(" ")[0];

    msg = msg.substring(command.length + 1);

    message.channel.send('COMMAND: ' + command); //sends PONG to the channel.
    message.channel.send('message: ' + msg); //sends PONG to the channel.


    //ping / pong command for testing response time
    if (msg === 'PING') { //checks if the command sent by the sender is ping
      message.channel.send('PONG'); //sends PONG to the channel.
    }

  }
  else{
    return; // No command is written
  }


});

//login event.
bot.login(process.env.BOT_TOKEN);
//END OF CODE.
