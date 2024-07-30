

const readone = document.querySelector("#read1")
const hoverone = document.querySelector("#hover1")
const readtwo = document.querySelector("#read2")
const readthree = document.querySelector("#read3")
const hoverthree = document.querySelector("#hover3")

function Onehoverone(){
    hoverone.style.transition = "all 0.3s ease";
    hoverone.style.background= "#FFC000";
    hoverone.style.border = "1px solid #FFC000";
    readone.style.color= "#FFC000";
    readone.style.transition = "all 0.3s ease";
    readone.style.textDecoration= "underline";
}


function clearOnehoverone(){
    hoverone.style.transition = "all 0.3s ease";
    hoverone.style.border = "1px solid gray";
    hoverone.style.background= "white";
    readone.style.color= "black";
    readone.style.transition = "all 0.3s ease";
    readone.style.textDecoration= "none";
}



function Twohovertwo(){
    readtwo.style.color= "#FFC000";
    readtwo.style.transition = "all 0.3s ease";
    readtwo.style.textDecoration= "underline";
}


function clearTwohoverTwo(){

    readtwo.style.color= "black";
    readtwo.style.transition = "all 0.3s ease";
    readtwo.style.textDecoration= "none";
}


function threehoverthree(){
    hoverthree.style.transition = "all 0.3s ease";
    hoverthree.style.background= "#FFC000";
    hoverthree.style.border = "1px solid #FFC000";
    readthree.style.color= "#FFC000";
    readthree.style.transition = "all 0.3s ease";
    readthree.style.textDecoration= "underline";
}


function clearthreehoverthree(){
    hoverthree.style.transition = "all 0.3s ease";
    hoverthree.style.border = "1px solid gray";
    hoverthree.style.background= "white";
    readthree.style.color= "black";
    readthree.style.transition = "all 0.3s ease";
    readthree.style.textDecoration= "none";
}





window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var elementToToggle = document.getElementById('yourElementId');
    var menustyle = document.getElementById('menustyle');
    var imgone = document.getElementById('img1');
    var imgtwo = document.getElementById('img2');
    var btnstyle = document.getElementById("btnstyle");

    if (scrollPosition > 20) {
        elementToToggle.style.transition = "all 0.3s ease";
        elementToToggle.style.background = "white";
        elementToToggle.style.padding = "3px 0px";
        menustyle.style.color = "black"
        imgone.style.display = "block";
        imgtwo.style.display = "none";
        menustyle.style.fontFamily = "bold";
        elementToToggle.style.borderBottom = "none";
        btnstyle.style.color = "black";
    } else {
        elementToToggle.style.transition = "all 0.3s ease";
        elementToToggle.style.background = "none";
        elementToToggle.style.padding = "12px 0px";
        menustyle.style.color = "white"
        menustyle.style.fontFamily = "bold"
        imgtwo.style.display = "block";
        imgone.style.display = "none";
        elementToToggle.style.borderBottom = "1px solid gray";
        btnstyle.style.color = "white";
    }
});

