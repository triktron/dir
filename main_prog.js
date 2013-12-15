var s_w=window.innerWidth

var s_h=window.innerHeight

//--------------- id's -----------------------------------
var text_ar_1 = document.getElementById("text_ar_1");
var text_sh_1 = document.getElementById("text_sh_1");

//--------------- var's --------------------------------
var video_chat;
var chat;
var temp_text = "";
var items = [["hallo","#0000CD"],["world","#008000"],["raf","Transparent"],["emma","#F06"]];

//--------------- functie's ------------------------------
function update_show() {
	var temp_text = text_ar_1.value;
	if (temp_text.length > 0) {
		setCookie("docu_temp",temp_text,1);
	}
	for (var i = 0;i<items.length;i++) {
		temp_text = temp_text.replace(items[i][0],"<span style='color: "+items[i][1]+"'>"+items[i][0]+"</span>");
	}
	text_sh_1.innerHTML = temp_text;
	
	setTimeout(function(){update_show()},1000/30);
}

function on_close() {
	chat.close();
}

//--------------- cookie api ------------------------------
function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}
function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}

//--------------- startup ---------------------------------
update_show();
video_chat = confirm("want to join chat");
if (video_chat==true) {
	chat = window.open("","MsgWindow","width=200,height=200");
	chat.document.write("hallo");
}
var temp = getCookie("docu_temp");
if (temp != null) {
	text_ar_1.value = temp;
}