var rn1=Math.floor(Math.random()*6)+1;
var ri1="dice"+rn1+".png";
var is1="images/" + ri1;
document.querySelector(".img1").setAttribute("src",is1);

var rn2=Math.floor(Math.random()*6)+1;
var ri2="dice"+rn2+".png";
var is2="images/" + ri2;
document.querySelector(".img2").setAttribute("src",is2);

if(rn1>rn2){
    document.querySelector("h1").textContent="Player 1 wins";
}else if(rn1<rn2){
    document.querySelector("h1").textContent="Player 2 wins";
}else{
    document.querySelector("h1").textContent="Draw!";
}