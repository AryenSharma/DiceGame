// !st Method
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomImage1 = "dice" + randomNumber1 + ".png" ;
// var randomImageSrc1="images/"+ randomImage1;
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomImageSrc1);
// ---------------------------------------------------------------------------------------------------------------------
// 2nd METHOD
function clicked(){
    

var randomImageSrc1="images/"+ "dice" + (Math.floor(Math.random() * 6) + 1) + ".png" ;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc1);// setattribute is used to change the attribute value setattribute("attributeName",attributeValue); for example setattribute(attributeName="src",attributeValue=randomImageSrc1)

//Part of 1st Method
// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomImage2 = "dice" + randomNumber2 + ".png" ;
// var randomImageSrc2="images/"+ randomImage2;
// var image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomImageSrc2)
// ------------------------------------------------------------------------------------------------------------------------
// Part of 2nd METHOD
var randomImageSrc2="images/"+ "dice"+ (Math.floor(Math.random()*6)+1) + ".png";
document.querySelector(".img2").setAttribute("src",randomImageSrc2);

if (randomImageSrc1>randomImageSrc2) {
  document.querySelector("h1").innerHTML="Player1 Wins";
}
else if (randomImageSrc2>randomImageSrc1) {
  document.querySelector("h1").innerHTML="Player2 Win";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
}