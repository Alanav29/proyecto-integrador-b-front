import { useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
import AdminMenu from "./AdminMenu";
import UsersMenu from "./UsersMenu";

const AccountOption = () => {
  const user = useSelector(selectUser);

  return (
    <li className="nav-item dropdown">
      <p
        className="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        CUENTA
      </p>
      <ul className="dropdown-menu">
        {user.isAdmin ? <AdminMenu /> : <UsersMenu />}
      </ul>
    </li>
  );
};

export default AccountOption;
