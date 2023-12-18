import { apiUsersUrl } from "../apiRoutes/apiRouterIndex";

async function updateUser(id, updatedData) {
  try {
    const response = await fetch(`${apiUsersUrl}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default updateUser;