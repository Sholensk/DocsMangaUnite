import { firebaseStorage } from "./Modulos/Storage.js";
import {app} from "./Modulos/appconfig.js"
import { Home } from "./Modulos/Home.js";

Home();
firebaseStorage(app);