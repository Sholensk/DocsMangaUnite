import { signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./appconfig.js"

export function logout () {

const salir = document.querySelector('#Logout')

salir.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        await signOut(auth)
        cambio();
    console.log("Hizo logout")
    } catch (error) {
        console.log(error)
    }    
});
function cambio(){
    console.log("1");
    window.location.href = "/DocsMangaUnite/Manga/prueba.html";
  }
}