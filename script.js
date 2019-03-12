function oneDigitTime(time){       //Funzione che fixa il bug della mancanza della cifra che indica le decine
                                   //nelle ore e nei minuti (esempio : 10:0 anzichè 10:00)
  if (time >= 0 && time <= 9) {

    return "0"+time;

  }else {

    return time;

  }
}

function automaticTime(){
    var timePrevMess = $(".right-part .preview-message > small");
    var timeMessRec = $(".message.received > small.time:first-of-type");
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    hour = oneDigitTime(hour);
    minutes = oneDigitTime(minutes);

    timePrevMess.text(timePrevMess.text()+" "+hour+":"+minutes);
    timeMessRec.text(hour+":"+minutes);
}

function automaticAnswers(){
  var chat = $(".chat");
  var divContMessR = document.createElement("div");
  var messageReceived = document.createElement("div");
  var divContMessRjQ = $(divContMessR);
  var messageReceivedjQ = $(messageReceived);
  var time = document.createElement("small");
  var timejQ = $(time);
  var date = new Date();
  var check = $("i.fas.fa-check-double");

  check.css("color","blue");
  chat.append(divContMessRjQ.addClass("message-container"));
  divContMessRjQ.append(messageReceivedjQ.addClass("message").addClass("received").text("Ok"));
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
    var check = document.createElement("i");
    var checkjQ = $(check)
    var date = new Date();

    chat.append(divContjQ.addClass("message-container"));
    divContjQ.append(messageQ.addClass("message").addClass("sent").text(textToAdd));
    messageQ.append(timejQ.addClass("time").text(date.getHours()+":"+date.getMinutes()));
    checkjQ.addClass("fas fa-check-double");
    messageQ.append(checkjQ);
    inputMessage.val("");
    setTimeout(automaticAnswers,3000);
  }
}

function search(){
  var me = $(this);
  var inputVal = me.val();
  var nameContacts = $(".contacts > .contact.list h5");
  var contacts = $(".contacts > .contact.list");

  contacts.removeClass("hidden");
  for (var i = 0; i < nameContacts.length; i++) {
    var name = nameContacts.eq(i).text();
    if(!name.includes(inputVal)){
      contacts.eq(i).addClass("hidden");
    }
  }
}

function searchContacts(){
  var inputSearch = $("#search");

  inputSearch.keyup(search);
}

function sendMessage(){
  var input = $("#input-message");

  input.keyup(textEvent);
}

function init(){

  automaticTime();
  sendMessage();
  searchContacts();
}

$(document).ready(init);
