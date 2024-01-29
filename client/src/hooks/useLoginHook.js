import { useState } from "react";

const useLoginHook = (notify) => {
  const [isLogIn, setIsLogIn] = useState(() => {
    if (localStorage.getItem("is-logged") !== null) {
      const storedValue = localStorage.getItem("is-logged");
      return storedValue === "true" ? true : false;
    } else return false;
  });

  const [user, setUser] = useState(() => {
    const storedValue = localStorage.getItem("user-data");
    if (storedValue !== null && isLogIn) return JSON.parse(storedValue);
    else return {};
  });

  function logIn(data) {
    setIsLogIn(true);
    setUser(data);
    notify("You have been logged in!");
    localStorage.clear(); // TEST
    localStorage.setItem("user-data", JSON.stringify(data));
    localStorage.setItem("is-logged", true);
  }

  function logOut() {
    setIsLogIn(false);
    setUser({});
    notify("You have been logged out!");
    localStorage.clear();
  }

  return {
    isLogIn,
    user,
    logIn,
    logOut,
  };
};

export default useLoginHook;
