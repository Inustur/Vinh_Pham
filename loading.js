//add fade-away effect for loader by adding loader--hidden class and removing it after//

window.addEventListener("load", ()=>{
	const loader= document.querySelector(".loader");
	loader.classList.add("loader--hidden");
	
	loader.addEventListener("transitioned", ()=>{
		document.body.remove(loader);
	});
});