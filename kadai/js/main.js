'use strict';
window.onload=function(){
	class Tarot{
		constructor(num,name,text){
			this.num=num;
			this.name=name;
			this.text=text;
			this.front=`t${this.num<10?'0':''}${this.num}.jpg`;
		}
	};

	let names=[
		'愚者','魔術師','女教皇','女帝','皇帝','教皇','恋人','戦車','力','隠者','運命の輪','正義','吊るされた男','死神','節制','悪魔','塔','星','月','太陽','審判','世界'
	]
	let texts=[
	'夢想・愚行・極端・熱狂','意志・手腕・外交','秘密・神秘・英知','実り・行動・月日の長さ・未知','統治・堅固さ・防御・同盟','信条・社会性・恵みと有徳','魅力・愛美','援軍・摂理・勝利・復讐','力・勇気・寛大・名誉','深慮・忠告を受ける・崩壊','幸運・転機・向上','平等・正しさ・正当な判決','英知・慎重・試練・直観','停止・損失・死と再生','調整・中庸・倹約・管理','暴力・激烈・宿命・黒魔術','悲嘆・災難・不名誉・転落','希望と吉兆・瞑想・放棄','隠れた敵・幻想・欺瞞・失敗','物質的な幸福・幸運な結婚','復活・位置の変化・更新','完成・約束された成功・旅'
	]

	const tarots=[];
	for(let i=0;i<22;i++){
		let tarot=new Tarot(i,names[i],texts[i]);
		tarots.push(tarot);
	}

	//シャッフル
	
	let i=tarots.length
	function shuffle(){
		console.log('test');
		while(i){
			let index=Math.floor(Math.random()*i--);
			let temp=tarots[index];
			tarots[index]=tarots[i];
			tarots[i]=temp;
		}
	}

	shuffle();

	//ボタン
	
	let btn=document.getElementById('shuf');
	btn.addEventListener('click',shuffle);
	btn.addEventListener('click',function(){
		console.log('ボタンおしたよ');
		location.reload();
		//for(let i=0;i<3;i++){
			//let cImg=document.getElementsByClassName(`tarot${i}`);
			//let time=new Date().getTime();
			//cImg.src=`images/${cImg.front}+?${time}`;
		//}
	});
	/*
	btn.addEventListener('click',function(){
		console.log('test');
		shuffle();
	});
	*/

	const tarotTable=document.getElementById('tarotTable');
	for(let i=0;i<3;i++){
			let div=document.createElement('div');
			let tempTarot=tarots[i];
			div.classList.add('tarot1','back');
			div.onclick=flip;
			div.num=tempTarot.num;
			div.style.backgroundImage=`url(images/${tempTarot.front})`;
			tarotTable.appendChild(div);
	}

	function flip(e){
		let div=e.target;
		div.classList.remove('back');
	}

	$(function(){
		$('.tarot1').each(function(i){
			$('this').on('mouseover',function(){
				$('this').css({height:'200px'})
			})
		});
	});
};

