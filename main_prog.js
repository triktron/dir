var s_w=window.innerWidth

var s_h=window.innerHeight

//--------------- id's -----------------------------------
var text_ar_1 = document.getElementById("text_ar_1");
var text_sh_1 = document.getElementById("text_sh_1");

//--------------- var's --------------------------------
var temp_text = "";
var items = [["hallo","#0000CD"],["world","#008000"],["raf","Transparent"],["emma","#F06"]];

//--------------- functie's ------------------------------
function update_show() {
	var temp_text = text_ar_1.value;
	
	for (var i = 0;i<items.length;i++) {
		temp_text = temp_text.replace(items[i][0],"<span style='color: "+items[i][1]+"'>"+items[i][0]+"</span>");
	}
	text_sh_1.innerHTML = temp_text;
	setTimeout(function(){update_show()},1000/30);
}

//--------------- startup ---------------------------------
update_show();