import { useSelector } from "react-redux";
import AdminMenuMobile from "./AdminMenuMobile";
import UsersMenuMobile from "./UsersMenuMobile";
import { selectUser } from "../../features/userFeature";

const AccountMenuMobile = ({ setSecondaryMenu }) => {
  const user = useSelector(selectUser);
  return (
    <>
      {user.isAdmin ? (
        <AdminMenuMobile setSecondaryMenu={setSecondaryMenu} />
      ) : (
        <UsersMenuMobile setSecondaryMenu={setSecondaryMenu} />
      )}
    </>
  );
};

export default AccountMenuMobile;
