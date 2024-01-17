import { apiUsersUrl } from "../apiRoutes/apiRouterIndex";

async function createUser(userData) {
  try {
    const response = await fetch(apiUsersUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error: " + error);
  }
}

export default createUser;
