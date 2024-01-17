import { useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
import SignedUserMenu from "./SignedUserMenu";
import CommonUserMenu from "./CommonUserMenu";

const UsersMenu = () => {
  const user = useSelector(selectUser);

  let optionToShow = <></>;

  if (user.privilege.privilege === "user" && user.email) {
    optionToShow = <SignedUserMenu />;
  } else {
    optionToShow = <CommonUserMenu />;
  }

  return <li>{optionToShow}</li>;
};

export default UsersMenu;
