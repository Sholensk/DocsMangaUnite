let menu = document.getElementById('menu')
let menuUsuario = document.getElementById('usuario')
menuUsuario.style.display = 'none'
function hide()
{
    menuUsuario.style.display = 'block'
    menu.style.display = 'none'
}
function show()
{
    menuUsuario.style.display = 'none'
    menu.style.display = 'block'
}