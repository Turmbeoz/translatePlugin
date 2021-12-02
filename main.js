
const pTags = document.getElementsByTagName('p');
console.log(pTags);
for (let i=0; i<pTags.length; i++){
	console.log("We here " + i)
	console.log(pTags[i].innerTEXT);
	pTags[i].style.fontSize = "25px";
	
}
// pTags.forEach((p)=>{
// 	p.innerHTML.style.fontSize = "35px";
// })


document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById("btn");
	function textBigger(){
		console.log("Hey Hey");
		const paragraphs = document.getElementsByTagName("p");
		console.log(paragraphs)
		paragraphs.forEach((p)=>{
			paragraphs.style.fontSize = "25px";
		})
	}
	button.addEventListener("click", textBigger);

})




// function fontToggle(btn){
// 	const paragraphs = document.querySelectorAll("p");
// 	paragraphs.forEach((p)=>{
// 	p.style.fontSize = "25px";
// 	console.log(btn);
// 	if (btn.status == "off"){
// 		console.log("Button is off")
// 		btn.status = "on";
// 		const paragraphs = document.querySelectorAll("p");
// 		paragraphs.forEach((p)=>{
// 		p.style.fontSize = "25px";
// 	});
// 	}else{
// 		btn.status = "off"
// 	}
// 	console.log("Here we go")
// 	console.log(btn);
// 	//document.getElementById("#divId").addEventListener("click", myFunction);
// }


// const button = document.getElementById("btn");
// button.addEventListener('click', fontToggle(button))
// button.onclick(button);
