import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "./routes";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const usersResponse = await getUserDetails(id);
      setUser(usersResponse);
    })();
  }, []);

  if (user === null) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>User Name:</b>
        {user.username}
      </p>
      <p>
        <b>Email Id:</b>
        {user.email}
      </p>
      <p>
        <b>Phone Number:</b>
        {user.phone}
      </p>
    </>
  );
};

export default UserDetails;
