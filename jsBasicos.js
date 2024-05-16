const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey)

function logKey(e)
{
    if (e.code =="ArrowLeft")
    {
        console.log("Se fue pa la izquierda")
    }
    
        if (e.code =="ArrowRight")
    {
        console.log("Se fue pa la derecha")
    }
    if (e.code =="ArrowUp")
    {
        console.log("Se fue pa arriba")
    }

    if (e.code =="ArrowDown")
    {
        console.log("Se fue pa abajo")
    }
}