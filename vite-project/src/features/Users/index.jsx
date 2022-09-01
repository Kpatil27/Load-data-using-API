import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "./UsersData/routes";

const UsersApiData = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      const usersResponse = await getAllUsers();
      setUsers(usersResponse);
    })();
  }, []);

  if (users === null) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <ol>
        {users.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>{item.name}</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default UsersApiData;