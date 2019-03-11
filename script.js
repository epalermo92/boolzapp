function automaticAnswers(){
  var chat = $(".chat");
  var divContMessR = document.createElement("div");
  var messageReceived = document.createElement("div");
  var divContMessRjQ = $(divContMessR);
  var messageReceivedjQ = $(messageReceived);
  var time = document.createElement("small");
  var timejQ = $(time);
  var date = new Date();

  chat.append(divContMessRjQ.addClass("message-container"));
  divContMessRjQ.append(messageReceivedjQ.addClass("message").addClass("received").text("Ok,va bene."));
  messageReceivedjQ.append(timejQ.addClass("time").text(date.getHours()+":"+date.getMinutes()));
}


function textEvent(e){
  var chat = $(".chat");
  var inputMessage = $("#input-message");

  if(e.which == 13){
    var divContMess = document.createElement("div");
    var message = document.createElement("div");
    var divContjQ = $(divContMess);
    var messageQ = $(message);
    var textToAdd = inputMessage.val();
    var time = document.createElement("small");
    var timejQ = $(time);
    var date = new Date();

    chat.append(divContjQ.addClass("message-container"));
    divContjQ.append(messageQ.addClass("message").addClass("sent").text(textToAdd));
    messageQ.append(timejQ.addClass("time").text(date.getHours()+":"+date.getMinutes()));
    inputMessage.val("");
    setTimeout(automaticAnswers,3000);
  }
}

function init(){
  var input = $("#input-message");

  input.keyup(textEvent);
}

$(document).ready(init);
