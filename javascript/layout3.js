
(function() {
    
    var firstName = "Dana";
    var lastName= "Aloni";
    var num = numLetters(firstName,lastName); 

function numLetters(firstName,lastName) {
    var lenF=firstName.length;
    var lenL=lastName.length;

    return lenF*lenL;
}

AddBoxes (num);

function AddBoxes(num) {
    var mainLayout3=document.getElementById("mainLayout3")
    var articles="";

    for(i=1;i<num;i++){
        articles+="<article></article>";
    }
    mainLayout3.innerHTML = articles; 
}

var Black = document.getElementById("Black");
Black.onclick=function () {
    ChangeColorOfBox(firstName);
}

function ChangeColorOfBox(firstName) {
    var num=firstName.length;
    var box=document.getElementsByTagName(("article"));
    for(i=0;i<num;i++){
        box[i].style.backgroundColor = "black";
    }
}

var White = document.getElementById("White");
White.onclick=function () {
    ChangeColorOfBoxReturn(lastName);
}

function ChangeColorOfBoxReturn(lastName) {
    var num=lastName.length;
    var box=document.getElementsByTagName(("article"));
    for(i=0;i<num;i++){
        box[i].style.backgroundColor = "white";
    }
}

var box1=document.getElementsByTagName("article")[0];

box1.onmouseover=function () {
    box1.style.backgroundImage="url(./images/sLetter.jpg)";
}

box1.onmouseout=function () {
    box1.style.backgroundImage="";

}


}) (); 
       