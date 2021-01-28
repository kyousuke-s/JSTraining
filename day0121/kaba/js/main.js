'use strict';
window.onload=()=>{
	let images=document.getElementsByClassName('headerImage');
	let zIndexMax=0;
	let zIndexChange=eve=>eve.target.style.zIndex=++zIndexMax;

	for(let i=0;i<images.length;i++){
		images[i].addEventListener('click',zIndexChange);
	}

	/*
	for(let i=0;i<images.length;i++){
		images[i].addEventListener('click',function(){
			this.style.zIndex=++zIndexMax;
		});
	}
	*/

	for(let i=0;i<images.length;i++){
		images[i].addEventListener('click',(eve)=>{
			console.log(eve);
			eve.target.style.zIndex=++zIndexMax;
		});
	}
};
