import createUser from "./addUser";
import deleteUser from "./deleteUser";
import updateUser from "./updateUser";

// Nuevo usuario
const newUser = {
    name: "Sebastian Montes de Oca",
    phoneNumber: 5564556334,
    email: "ing.montesdeoca94@gmail.com",
    password: "holabb"
};

createUser(newUser);

// Eliminar usuario
const idToDelete = "";
deleteUser(idToDelete);

// Editar usuario
const idToUpdate = "";
const updatedUser = {
    name: "",
    phoneNumber: "",
}

updateUser(idToUpdate, updatedUser);