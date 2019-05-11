
var resetBtn = document.querySelector("#resetBtn");
var difficult = 6;
var colors;
var displayColor = document.querySelector("#displayColor");

var squares = document.querySelectorAll(".color");
reset(); 
resetBtn.addEventListener("click", function(){
    reset();    
});

//square colors equal arr colors
function game(){
    var pickedColor = colors[Math.floor(Math.random()*difficult)];
    displayColor.textContent = pickedColor;
    console.log(pickedColor);
    for(i = 0; i < colors.length; i ++){
        squares[i].style.backgroundColor = colors[i];
        // square events
        squares[i].style.opacity = "1";
        squares[i].addEventListener("click", function(){
            //if you click on right color
            
            if(this.style.backgroundColor === pickedColor){
                document.querySelector("#result").textContent = "Correct!";
                document.querySelector("#resetBtn").textContent = "Try Again?";
                document.querySelector("h1").style.backgroundColor = pickedColor;
                changeColor(pickedColor);
            } else{
                this.style.opacity = "0";      
            }

        });
    }
}
//reset button

function reset(){
    colors = randColorArray(difficult);
    game();
    document.querySelector("#resetBtn").textContent = "New Color";
    document.querySelector("#result").textContent = "";
}

// random color string rgb(x,x,x)
function randColor(){
    return "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
}

// random color arr=[rgb(x,x,x),rgb(x,x,x),rgb(x,x,x)]
function randColorArray(n){
    arr = [];
    for(i = 0; i < n; i++){
        arr.push(randColor());
    }
    return arr;
}
function changeColor(color){
    for(i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
