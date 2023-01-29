window.onload=function(){
const inputField = document.getElementById("input");
const popUp = document.getElementById("pop_up")
inputField.addEventListener('mouseover', () => {
    popUp.style.display = "block"
});
inputField.addEventListener('mouseleave', () => {
    popUp.style.display = "none"
});
}