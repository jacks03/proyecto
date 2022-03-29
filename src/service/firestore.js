import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyCtSvlTVA6VOnmeHlblvwlyqhnN9jXYiO0",
    authDomain: "codigo13-a2bc9.firebaseapp.com",
    projectId: "codigo13-a2bc9",
    storageBucket: "codigo13-a2bc9.appspot.com",
    messagingSenderId: "412169440372",
    appId: "1:412169440372:web:71acd519b952654eb3d521",
    measurementId: "G-6F5EG01249"
  };

  const app = initializeApp(firebaseConfig)
  //Iniciar firestore
  //database : base de datos
  const db = getFirestore(app);

  //Hacer la peticion para poder traer los productos
  export const getProductClothes = async () =>{
    //paso 1 : Traer la coleccion de datos
    const collectionClothes = collection(db, "Product_clothes")
    //paso 2 :Traer los documentos
    const documentClothes = await getDocs(collectionClothes);
    //paso 3 :Crear un arreglo que guarde los documentos que estamos trayendo
    const clothes = documentClothes.docs.map(doc=> doc.data())
    return clothes;
  }
