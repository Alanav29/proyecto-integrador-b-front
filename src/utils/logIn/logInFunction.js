import { apiLogInUrl } from "../apiRoutes/apiRouterIndex";

async function logInFunction(userData) {
        let data = false;
    try {
        const response = await fetch(apiLogInUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userData.email,
                password: userData.password
            })
        });
        data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error: " + error);
    }
    return data;
}

export default logInFunction;