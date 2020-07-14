import axios from "axios";
import cookie from "js-cookie";

export async function getClasses() {
  const sessionid = cookie.get("token");
  try {
    const result = await axios.get(
      `https://set-hust.appspot.com/api?type=getclasses&semester=20192&sessionid=${sessionid}`
    );
    return result.data;
  } catch (error) {
    if (error) {
      throw new Error(error);
    }
  }
}
