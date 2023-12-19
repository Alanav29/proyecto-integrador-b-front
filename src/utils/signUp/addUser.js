import { apiUsersUrl } from "../apiRoutes/apiRouterIndex";

async function createUser(userData) {

    try {
        const response = await fetch(apiUsersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: userData.name,
                phoneNumber: userData.phoneNumber,
                email: userData.email,
                password: userData.password
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error: " + error);
    }
}

export default createUser;