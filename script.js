function AddMessage(content) {

  var conversation = $(".conversation.selected")

  var messageWrapper = document.createElement("div")
  var message = document.createElement("div");
  var messageContent = document.createElement("p");
  var messageDetail = document.createElement("span");
  var deletemenu = document.createElement("div")
  var deleteMenuTop = document.createElement("div")
  var deleteMenuSpanTop = document.createElement("span")
  var deleteMenuBottom = document.createElement("div")
  var deleteMenuSpanBottom = document.createElement("span")

  $(deletemenu).addClass("delete-menu");
  $(deleteMenuTop).addClass("delete-menu-top");
  $(deleteMenuSpanTop).attr("id","delete-msg");
  $(deleteMenuBottom).addClass("delete-menu-bottom");
  $(deleteMenuSpanBottom).attr("id","copy-msg");
  $(messageWrapper).addClass("message-wrapper");
  $(message).addClass("user-generated-message sent");

  $(messageContent).text(content);
  $(messageDetail).text("18:00");
  $(deleteMenuSpanTop).text("Cancella")
  $(deleteMenuSpanBottom).text("Copia")


  message.append(messageContent);
  message.append(messageDetail);
  message.append(deletemenu)
  deletemenu.append(deleteMenuTop)
  deleteMenuTop.append(deleteMenuSpanTop)
  deletemenu.append(deleteMenuBottom)
  deleteMenuBottom.append(deleteMenuSpanBottom)
  messageWrapper.append(message);
  conversation.append(messageWrapper);

};

function autoAnswr() {

  var conversation = $(".conversation.selected");

  var messageWrapper = document.createElement("div");
  var message = document.createElement("div");
  var messageContent = document.createElement("p");
  var messageDetail = document.createElement("span");
  var deletemenu = document.createElement("div")
  var deleteMenuTop = document.createElement("div")
  var deleteMenuSpanTop = document.createElement("span")
  var deleteMenuBottom = document.createElement("div")
  var deleteMenuSpanBottom =document.createElement("span")

  $(deletemenu).addClass("delete-menu");
  $(deleteMenuTop).addClass("delete-menu-top");
  $(deleteMenuSpanTop).attr("id","delete-msg");
  $(deleteMenuBottom).addClass("delete-menu-bottom");
  $(deleteMenuSpanBottom).attr("id","copy-msg");
  $(messageWrapper).addClass("message-wrapper");
  $(message).addClass("user-generated-message received");
  $(messageContent).text("ciao!");
  $(messageDetail).text("18:00");
  $(deleteMenuSpanTop).text("Cancella")
  $(deleteMenuSpanBottom).text("Copia")

  message.append(messageContent);
  message.append(messageDetail);
  message.append(deletemenu)
  deletemenu.append(deleteMenuTop)
  deleteMenuTop.append(deleteMenuSpanTop)
  deletemenu.append(deleteMenuBottom)
  deleteMenuBottom.append(deleteMenuSpanBottom)
  messageWrapper.append(message);
  conversation.append(messageWrapper);

};

function sendUsrMessage(e) {
  var txt = $("#usr-content")
  var keyPressed = e.which

  if(keyPressed == 13) {
    AddMessage(txt.val());
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
