import {app} from "./Modulos/appconfig.js"
//import {EmailEnvio} from "./Modulos/aut-email.js";
import { autgoogle } from "./Modulos/aut-google.js";
import {registrarse} from "./Modulos/registrarse.js";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./Modulos/appconfig.js";
import { logout } from "./Modulos/logout.js";
import {CheckUsuario} from "./Modulos/CheckUsuario.js";

registrarse(app);
EmailEnvio(app);
autgoogle(app);
logout();
CheckUsuario();

onAuthStateChanged(auth, async (user) => {
    CheckUsuario(user)  
})