var t=new Image;function i(t,i,n,s,a){this.x=t,this.y=i,this.s=n,this.r=s,this.fn=a}function n(t){var i,n;switch(t){case"x":i=Math.random()*window.innerWidth;break;case"y":i=Math.random()*window.innerHeight;break;case"s":i=Math.random();break;case"r":i=6*Math.random();break;case"fnx":n=1*Math.random()-.5,i=function(t,i){return t+.5*n-1.7};break;case"fny":n=1.5+.7*Math.random(),i=function(t,i){return i+n};break;case"fnr":n=.03*Math.random(),i=function(t){return t+n}}return i}function s(){requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;var t,s=document.createElement("canvas");!0,s.height=window.innerHeight,s.width=window.innerWidth,s.setAttribute("style","position: fixed;left: 0;top: 0;pointer-events: none;"),s.setAttribute("id","canvas_sakura"),document.getElementsByTagName("body")[0].appendChild(s),t=s.getContext("2d");for(var a=new SakuraList,r=0;r<50;r++){var h,o,e,u,c,w,f;o=n("x"),e=n("y"),c=n("r"),u=n("s"),w=n("fnx"),f=n("fny"),randomFnR=n("fnr"),(h=new i(o,e,u,c,{x:w,y:f,r:randomFnR})).draw(t),a.push(h)}requestAnimationFrame((function(){t.clearRect(0,0,s.width,s.height),a.update(),a.draw(t),requestAnimationFrame(arguments.callee)}))}t.src="https://i0.wp.com/s2.loli.net/2022/11/18/AdCceXs79zLjy4T.webp",i.prototype.draw=function(i){i.save();i.translate(this.x,this.y),i.rotate(this.r),i.drawImage(t,0,0,40*this.s,40*this.s),i.restore()},i.prototype.update=function(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=n("fnr"),Math.random()>.4?(this.x=n("x"),this.y=0,this.s=n("s"),this.r=n("r")):(this.x=window.innerWidth,this.y=n("y"),this.s=n("s"),this.r=n("r")))},SakuraList=function(){this.list=[]},SakuraList.prototype.push=function(t){this.list.push(t)},SakuraList.prototype.update=function(){for(var t=0,i=this.list.length;t<i;t++)this.list[t].update()},SakuraList.prototype.draw=function(t){for(var i=0,n=this.list.length;i<n;i++)this.list[i].draw(t)},SakuraList.prototype.get=function(t){return this.list[t]},SakuraList.prototype.size=function(){return this.list.length},window.onresize=function(){document.getElementById("canvas_snow")},t.onload=function(){s()};