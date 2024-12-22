import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const UserProfile = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default UserProfile;
