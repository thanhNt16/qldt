import CryptoJS from "crypto-js";
import axios from "axios";
import { v5 as uuidv5 } from "uuid";
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

export async function loginWithPassword({ username, password, remember }) {
  const hashedPassword = encryptorPass(username, password);
  const sessionid = uuidv5(username, uuidv5.DNS);
  try {
    const result = await axios.get(
      `https://set-hust.appspot.com/api?type=login&username=${username}&password=${hashedPassword}&sessionid=${sessionid}`
    );
    return result.data;
  } catch (error) {
    if (error) {
      throw new Error(error);
    }
  }
}
