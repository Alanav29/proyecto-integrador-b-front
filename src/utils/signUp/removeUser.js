import { apiUsersUrl } from "../apiRoutes/apiRouterIndex";

// Función para la petición DELETE
async function deleteUser(id) {
  try {
    const response = await fetch(`${apiUsersUrl}${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default deleteUser;