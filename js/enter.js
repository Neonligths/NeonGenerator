
// handle enter plain javascript
function handleEnter(e){
    let keycode = (e.keyCode ? e.keyCode : e.which);
    let content = document.getElementById('neonTextFromInput').innerHTML;
    let breakline = document.createElement("br");
    if (keycode == '13') {
        content.appendChild(breakline);
    }
}