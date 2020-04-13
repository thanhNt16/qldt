import CryptoJS from "crypto-js";
import { md5 } from "libs";

export function encryptorPass(userName, password) {
  let value = md5(userName + "." + password);
  let keyHex = CryptoJS.enc.Utf8.parse(value);
  var encrypted = CryptoJS.DES.encrypt(password, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
  return encrypted;
}
