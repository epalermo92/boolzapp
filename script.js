function automaticAnswers(){
  var chat = $(".chat");
  var divContMessR = document.createElement("div");
  var messageReceived = document.createElement("div");
  var divContMessRjQ = $(divContMessR);
  var messageReceivedjQ = $(messageReceived);

  chat.append(divContMessRjQ.addClass("message-container"));
  divContMessRjQ.append(messageReceivedjQ.addClass("message").addClass("received").text("Ok,va bene."));
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

    chat.append(divContjQ.addClass("message-container"));
    divContjQ.append(messageQ.addClass("message").addClass("sent").text(textToAdd));
    inputMessage.val("");
    setTimeout(automaticAnswers,3000);
  }
}

function init(){
  var input = $("#input-message");

  input.keyup(textEvent);
}

$(document).ready(init);
