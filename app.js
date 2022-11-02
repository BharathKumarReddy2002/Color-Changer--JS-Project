let btn = document.getElementById("button");

btn.addEventListener("click", () => {
    document.getElementById("canvas").style.backgroundColor = randomColor();
});

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let bg = "#";
    for(let i=0; i<6; i++){
        bg = bg + val[Math.floor(Math.random()*16)];
    } 
    return bg;
}