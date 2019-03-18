function addMessage() {

  var conversation = $(".conversation.selected");
  var usrTXT = $("#usr-content");
  var messaggio = $("#message-template > .user-generated-message")

  var data = {
    testoMSG : usrTXT.val(),
    class : "sent"
  };

  var msgTemplate = $("#message-template").html();
  var compile = Handlebars.compile(msgTemplate);
  var finalHTML = compile(data)


  conversation.append(finalHTML)
};

function autoAnswr() {

  var conversation = $(".conversation.selected");

  var usrTXT = $("#usr-content");
  var messaggio = $("#message-template > .user-generated-message")

  var data = {
    testoMSG : "ciao!",
    class : "received"
  };

  var msgTemplate = $("#message-template").html();
  var compile = Handlebars.compile(msgTemplate);
  var finalHTML = compile(data)


  conversation.append(finalHTML)



};

function sendUsrMessage(e) {
  var txt = $("#usr-content")
  var keyPressed = e.which

  if(keyPressed == 13) {
    addMessage();
    txt.val("");
    setTimeout(function() {
      autoAnswr();
    }, 1000);
  }
};


function searchBar(){

  var me = $(this);
  var searchContent = me.val().toLowerCase();

  var contactList = $(".contact");
  var box = $(".conversation-single");
  box.removeClass("hidden");

  for (var i = 0; i < contactList.length; i++) {

    var contacts = contactList.eq(i);
    var contactNames = contacts.text().toLowerCase();

    if (!contactNames.includes(searchContent)) {
      var singleBox = box.eq(i)
      singleBox.addClass("hidden");
    };
  };


};



function selectUsrConversation() {
  var me = $(this);
  var meIndex = me.index();

  var conversations = $(".conversation");
  conversations.removeClass("selected");
  var selectedConversation = conversations.eq(meIndex);
  selectedConversation.addClass("selected");
};

function showDeleteMenu() {
  var me = $(this);
  var deleteMenu = $(".delete-menu");

  thisMenu = me.children(".delete-menu")
  // thisMenu.slideToggle()
  thisMenu.toggleClass("active")
}

function deleteThisMessage() {
  var me = $(this);
  var deleteMenu = me.parent()
  var message = deleteMenu.parent()

  message.remove()

};




function init() {
  var txt = $("#usr-content");
  txt.keyup(sendUsrMessage);

  var search =$("#search-bar");
  search.keyup(searchBar);

  var contactsLeft = $(".conversation-single");
  contactsLeft.click(selectUsrConversation);

  // var chatBox = $(".user-generated-message")
  // chatBox.click(showDeleteMenu)

  $(document).on("click", ".user-generated-message", showDeleteMenu)

  // var deleteBtn = $(".delete-menu-top")
  // deleteBtn.click(deleteThisMessage)

  $(document).on("click", ".delete-menu-top", deleteThisMessage)
}

$(document).ready(init);
