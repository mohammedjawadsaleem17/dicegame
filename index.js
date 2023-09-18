
var first = Math.floor((Math.random()*6)+1);

var second =Math.floor((Math.random()*6)+1);

console.log(first);
console.log(second);

document.querySelector(".img1").src="./images/dice"+ first+".png";
document.querySelector(".img2").src="./images/dice"+ second+".png";


if(first>second){
    document.querySelector(".answer").innerHTML="Player 1 Wins";
}else if(first<second){
    document.querySelector(".answer").innerHTML="Player 2 Wins";
}else{
    document.querySelector(".answer").innerHTML="Its a Draw";
}