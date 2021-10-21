import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthemtication =()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthemtication;