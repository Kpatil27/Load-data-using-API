import { Route, Routes } from "react-router-dom";
import UsersApiData from "../features/Users";
import UserDetails from "../features/Users/UserData";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersApiData />} />
      <Route path="/details/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default Navigation;
