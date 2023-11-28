import {app} from "./Modulos/appconfig.js"
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./Modulos/appconfig.js";
import { logout } from "./Modulos/logout.js";
import {CheckUsuario} from "./Modulos/CheckUsuario.js";

logout();
CheckUsuario();

onAuthStateChanged(auth, async (user) => {
    CheckUsuario(user)  
})