//layerHair is a class
const layerHair = document.getElementsByClassName("colour-hair");
const HairSlider = document.getElementById("hair-hue");
HairSlider.addEventListener("change",ChangeHairColor);

const layerEye = document.getElementById("layer-eyes");
const EyeSlider = document.getElementById("eye-hue");
EyeSlider.addEventListener("change",ChangeEyeColor);

const layerUpper = document.getElementById("layer-upper");
const UpperSlider = document.getElementById("upper-hue");
UpperSlider.addEventListener("change", ChangeUpperColor);

const layerLower = document.getElementById("layer-lower");
const LowerSlider = document.getElementById("lower-hue");
LowerSlider.addEventListener("change",ChangeLowerColor)

//hue-rotate


function ChangeHairColor() {
    let children = layerHair
    let style = `filter: hue-rotate(${this.value}deg)`;
    for (let child of children){
        child.style = style;
    }
}

function ChangeEyeColor() {
    let style = `filter: hue-rotate(${this.value}deg)`;
    layerEye.style = style;
    
}


function ChangeUpperColor() {
    let children = layerUpper.childNodes;
    let style = `filter: hue-rotate(${this.value}deg)`;
    for (let child of children){
        child.style = style;
    }
}

function ChangeLowerColor() {
    let children = layerLower.childNodes;
    let style = `filter: hue-rotate(${this.value}deg)`;
    for (let child of children){
        child.style = style;
    }
}

//layerUpper.src = "./img/clothes/upper/blouse/full.png"