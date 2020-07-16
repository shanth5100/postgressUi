import CryptoJS from "crypto-js";
import { SECRET_KEY } from "./GlobalKeys";
const DB = localStorage;
export const Store = {
   storeObjectData: function(key, data) {        
        let val = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY);
        DB.setItem(key, val)        
   },
    storeStringData: function(key, data) {
        let val = CryptoJS.AES.encrypt(data, SECRET_KEY);
        DB.setItem(key, val)   
        // let Decript = CryptoJS.AES.decrypt(val.toString(), secureKey);
        // console.log("Decript data: ", Decript.toString(CryptoJS.enc.Utf8))
    },

    getObjectData: function (key){
        let val = DB.getItem(key)
        if (val) {
            let Decript = CryptoJS.AES.decrypt(val.toString(), SECRET_KEY);
            return JSON.parse(Decript.toString(CryptoJS.enc.Utf8));
        }
        return null;
    },
    getStringData: function (key){
        let val = DB.getItem(key)
        if (val) {
            let Decript = CryptoJS.AES.decrypt(val.toString(), SECRET_KEY);
            return Decript.toString(CryptoJS.enc.Utf8);
        }
        return null;
    },
}