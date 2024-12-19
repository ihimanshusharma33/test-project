import React, { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0],console.log(data.results[0])))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {user ? <ProfileCard user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
