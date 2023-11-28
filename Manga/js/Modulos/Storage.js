import {
    getStorage,
    ref as refStorage,
    uploadBytesResumable,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
export function firebaseStorage(app){
    const storage = getStorage(app),
    docsRef = refStorage(storage, "docs"),
    d = document,
   // $progressAdvance = d.getElementById("progress-bar"),
    $appStorage = d.getElementById("app-storage");


    d.addEventListener("change",(e) => {
        if(e.target.matches("#uploader")){
            alert("Deberia subor un archivo se supone");

            let fileList = Array.from(e.target.files);

            fileList.forEach((file) => {
                const filesRef = refStorage(storage,"files/"+file.name), uploadTask = uploadBytesResumable(filesRef, file);

                uploadTask.on(
                    "state_changed",
                    () =>{
                        getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            $appStorage.innerHTML += 
                            `
                            <img src="${downloadURL}">
                            `;
                        })
                        .catch((err)=> {
                            $appStorage.innerHTML += `<div class="alert alert-danger" role="alert">Error al subor el arhivo ${err.code} - ${err.message}</div>`
                        });
                    }
                );
            });
        }
    });
}