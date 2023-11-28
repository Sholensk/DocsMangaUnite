
export function Home(){

    const boton = document.getElementById('boton');

    boton.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(window.location.href)
        
    })
}