
function update(){
    var border_color     = String(document.getElementById("R_border").value) +
                           String(document.getElementById("G_border").value) +
                           String(document.getElementById("B_border").value);
    var background_color = String(document.getElementById("R_background").value) +
                           String(document.getElementById("R_background").value) +
                           String(document.getElementById("R_background").value);
                           
    var p = document.getElementById("Para");
    p.style.backgroundColor = background_color;
    p.style.borderColor = border_color;
}