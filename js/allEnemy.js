/*
	所有类型的飞机
*/

function SmallEnemy(){
	var type1 = parseInt(Math.random()*3 + 3);
	Enemy.call(this,1,type1,['image/enemy1.png','image/enemy1-bang.gif'],10);
}
SmallEnemy.prototype.__proto__ = Enemy.prototype;

function MiddleEnemy(){
	var type2 = parseInt(Math.random()*3 + 2);
	Enemy.call(this,4,type2,['image/enemy2.png','image/enemy2-bang.gif'],50);
}
MiddleEnemy.prototype.__proto__ = Enemy.prototype;


function LargeEnemy(){
	var type3= parseInt(Math.random()*2 + 2);
	Enemy.call(this,10,type3,['image/enemy3.png','image/enemy3-bang.gif'],200);
}
LargeEnemy.prototype.__proto__ = Enemy.prototype;


