var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let lis = document.querySelectorAll('li')
// let trash = document.createElement('button')
// trash.className ='delete'
// trash.textContent ='Delete'

 

 for(var i=0;i<lis.length;i++){
	 lis[i].addEventListener('click',toggle);
 }

 function toggle(){
	 this.classList.toggle('done')
 }


ul.addEventListener('click',function(e){
	var target = e.target;
	if(target.classList.contains('delete')){
		target.parentNode.remove();
	}

});





function inputLength() {
	return input.value.length;
}

function createListElement() {
let trash = document.createElement('button')
trash.className ='delete'
trash.textContent ='Delete'
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.append(trash);
	li.addEventListener('click',toggle);
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