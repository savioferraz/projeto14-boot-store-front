import React, { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <UserContext.Provider value={{ email, setEmail, amount, setAmount }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
