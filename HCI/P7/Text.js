
var sent1 = document.getElementById("send")
var sent0 = document.getElementById("textSend")
var yinput = document.getElementById("input")
var ylink = link("https://pbs.twimg.com/media/CKYEz08WUAAgI2h.png")

function sendText(){
	sent0.style.opacity = 1
	sent1.innerHTML = yinput.value  
	yinput.value = null     	
}



