var images = ["A.jpg", "B.png", "C.jpg", "D.jpg", "E.jpg"];
var index = 0;

function prev(){
    if(index == 0){
        index = 4;
    } else{
        index = index - 1;
    }
    document.getElementById("image").src = images[index];
}

function next(){
    index = (index + 1) % 5;
    document.getElementById("image").src = images[index];
}