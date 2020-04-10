export async function simpleFetch() {
  try {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(await data.json());
    return data;
  } catch (error) {
    error && console.log(error);
  }
}
