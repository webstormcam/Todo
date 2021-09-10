var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let lis = document.querySelectorAll('li')
 

 for(var i=0;i<lis.length;i++){
	 lis[i].addEventListener('click',toggle);
 }

 function toggle(){
	 this.classList.toggle('done')
 }








function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}






button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);