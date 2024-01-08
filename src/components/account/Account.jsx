import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../api/API";
import Navbar from "../navbar/Navbar";
export default function Account(props) {
  const [accountInfo, setAccountInfo] = useState(null);
  useEffect(() => {
    getUser(setAccountInfo);
  }, []);

  return (
    <>
        <Navbar token={props.token} setToken={props.setToken}/>
      <h1>ACCOUNT</h1>
      {accountInfo ? (
        <div>
          <p>{accountInfo.email}</p>
          <p>{accountInfo.phone}</p>
          <p>{accountInfo.username}</p>
          <p>{accountInfo.name.firstname}</p>
          <p>{accountInfo.name.lastname}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
