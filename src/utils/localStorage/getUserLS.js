const timeStampValidity = (dataTimeStamp) => {
  const currentTime = new Date().getTime();
  const TimeDifference = currentTime - dataTimeStamp;
  return TimeDifference < 86400000; // 86400000 ms equivale a 1 dia
};

const getUserLS = (dispatch, setUser) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData) {
    const { user, timeStamp } = userData;
    timeStampValidity(timeStamp)
      ? dispatch(setUser(user))
      : localStorage.removeItem("user");
  }
};

export default getUserLS;
