import { apiLogInUrl } from "../apiRoutes/apiRouterIndex";

async function logInFunction(userData) {
  let data = false;
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify(userData);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(apiLogInUrl, requestOptions);
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error: " + error);
  }
  return data;
}

export default logInFunction;
