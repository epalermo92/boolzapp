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
  var chat = $(".chat.active");
  var check = $("i.fas.fa-check-double");
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  hour = oneDigitTime(hour);
  minutes = oneDigitTime(minutes);
  var template = $("#template").html();
  var compiled = Handlebars.compile(template);
  var data = {
    nomeClasse : "received",
    testo : "Ok",
    time : hour+":"+minutes,
    testoMenu : "Cancella il messaggio",
  };
  var finalHTML = compiled(data);
  check.css("color","blue");
  chat.append(finalHTML);
}

function sending(e){
  var chat = $(".chat.active");
  var inputMessage = $("#input-message");

  if(e.which == 13){
    var textToAdd = inputMessage.val();
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    hour = oneDigitTime(hour);
    minutes = oneDigitTime(minutes);
    var template = $("#template").html();
    var compiled = Handlebars.compile(template);
    var data = {
      nomeClasse : "sent",
      testo : textToAdd,
      time : hour+":"+minutes,
      testoMenu : "Cancella il messaggio",
    };
    var finalHTML = compiled(data);
    chat.append(finalHTML);
    inputMessage.val("");
    setTimeout(automaticAnswers,2000);
  }

}

function search(){
  var me = $(this);
  var inputVal = me.val().toLowerCase();
  var nameContacts = $(".contacts > .contact.list h5");
  var contacts = $(".contacts > .contact.list");

  contacts.removeClass("hidden");
  for (var i = 0; i < nameContacts.length; i++) {
    var name = nameContacts.eq(i).text().toLowerCase();
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

  input.keyup(sending);
}

function change(){
  var me = $(this);
  var name = me.find("h5").text();
  var contactToChange = $(".right-part > .contact");
  var contactNameToChange = contactToChange.find("h5");
  var srcImgToShow = me.children("img").attr("src");

  contactToChange.children("img").attr("src",srcImgToShow);
  contactNameToChange.text(name);
}

function changeChatContactNameAndImg(){
  var contacts = $(".contacts > .contact.list");

  contacts.click(change);
}

function clickChange(){
  var me = $(this);
  var meIndex = me.index();
  var chats = $(".chat");

  chats.removeClass("active").addClass("hidden");
  chats.eq(meIndex).removeClass("hidden").addClass("active");

}

function changeConversation(){
  var contacts = $(".contacts > .contact.list");

  contacts.click(clickChange);
}

function showMenu(){
  var me = $(this);
  me.siblings(".menu-delete").slideToggle("fast");
}

function deleteMessage(){
  var me = $(this);
  me.parent(".message-container").remove();
}



function init(){
  automaticTime();
  sendMessage();
  searchContacts();
  changeChatContactNameAndImg();
  changeConversation();
  $(document).on("click",".message",showMenu);
  $(document).on("click",".menu-delete",deleteMessage);
}

$(document).ready(init);
