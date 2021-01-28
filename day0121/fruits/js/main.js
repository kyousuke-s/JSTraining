'use strict';
window.addEventListener('load',()=>{
	//const price=[120,50,180];
	const result=document.getElementById('result');
	const fruits=document.getElementsByClassName('fruits');
	const numberChange=()=>{
		//厳密な比較(javaと同様な比較)は[=]３つで比較する
		console.log('3'===3);
		let sum=0;
		for(let i=0;i<fruits.length;i++){
			//sum+=parseInt(fruits[i].value) * price[i];
			sum+=parseInt(fruits[i].value) * parseInt(fruits[i].getAttribute('data-price'));
		}
		result.textContent=`${sum}円です！`;
	};
	for(let i=0;i<fruits.length;i++){
		fruits[i].addEventListener('Change',numberChange);
		fruits[i].addEventListener('keyup',numberChange);
		fruits[i].addEventListener('mouseup',numberChange);

	}
});
