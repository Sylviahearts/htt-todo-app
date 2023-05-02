const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const bgImg = document.getElementById("bgimg");



function addBtn() {
    let inpValue1 = document.getElementById("input").value;  //variable that stores the input
    let errText =  document.getElementById("error");
    if (inpValue1 == "") {
        errText.innerText = "field cannot be empty";
        errText = "";
      return;
    }
    document.getElementById("input").value = "";
  
}


function lighttheme() {
  sun.style.display = "none";
  moon.style.display = "inline-block";
  bgImg.style.backgroundImage = "url('images/bg-desktop-light.jpg')";
  document.getElementById("inpfielddiv").style.backgroundColor = "white";
  document.getElementById("input").style.backgroundColor = "white";
  document.getElementById("bottomTab").style.backgroundColor = "white";
  document.getElementById("bottomTab").style.color = "black";
  document.body.style.backgroundColor = " hsl(233, 11%, 84%)";
};

function darktheme(){
    sun.style.display = "inline-block";
    moon.style.display = "none";
    bgImg.style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
    document.getElementById("inpfielddiv").style.backgroundColor = "black";
    document.getElementById("input").style.backgroundColor = "black";
    document.getElementById("bottomTab").style.backgroundColor = "black";
    document.getElementById("bottomTab").style.color = "white";
    document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
};


function errmsgdel(){
  document.getElementById('error').style.display = "none";
};


// let listItems = []
// let list = document.getElementById("unlist") //variable for my ul tag
// var id = Math.random();
// list.prepend(`
// <li id="${id}" > 
//   <input onclick="delCheck()" class ="me-2" type="radio">
//   <span class ="me-2 inval ">${inpValue1}</span>
//   <img src="delete.png" class="imm" onclick="delBtn(${id})" alt="">

// </li>
// `); //the item that the user inputs in the input field