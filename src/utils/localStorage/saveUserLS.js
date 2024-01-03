const saveUserLS = (userData) => {
  const timeStamp = new Date().getTime();
  const userSigned = {
    user: userData,
    timeStamp: timeStamp,
  };
  localStorage.setItem("user", JSON.stringify(userSigned));
};

export default saveUserLS;
