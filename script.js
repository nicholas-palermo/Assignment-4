//Question 1
//Arguer 1 button response
function argue () {
    document.querySelector(".question1 p").innerHTML = "< I'm right!"
}

//Arguer 2 button response
function argueBack () {
    document.querySelector(".question1 p").innerHTML = "No, I'm right! >";
}

//Question 2
const hoverElement = document.querySelector(".question2 h2");

hoverElement.addEventListener("mouseover", function (event) {
    alert("Hey! I told you not hover over me!");
})

//Question 3 & 4
    const password = document.getElementById("password");
    const heading = document.querySelector(".prompt");
    
    function onSubmit() {
        console.log(heading);
        console.log(password);
        if (password.value == "12345678") {
            console.log(true);
            heading.innerHTML = "Welcome " + document.querySelector("#username").value + ".";
        } else {
            alert ("The password you have entered is invalid. Please try again.")
        }
    }


//Question 6
function calcVolume(){
    const radius = document.getElementById("radius").value;
    console.log(radius);
    const volume = document.querySelector("#volume");
    const v = 4/3 * Math.PI * (Math.pow(radius , 3));
    console.log(v);
    volume.innerHTML = "Volume: " + v + " cubic units";
}

