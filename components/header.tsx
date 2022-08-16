import { Button } from "semantic-ui-react";
import style from "../styles/components/header.module.css";

import React from "react";
import { useRouter } from "next/router";

const HeaderComponent = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <h1 onClick={() => router.push("/")}>Chatbot</h1>
      <div className={style.rightBox}>
        <div className={style.navContainer}>
          <div className={style.navItem} onClick={() => router.push("/")}>
            Home
          </div>
          <div
            className={style.navItem}
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </div>
          <div className={style.navItem} onClick={() => router.push("/login")}>
            Login
          </div>
          <div
            className={style.navItem}
            onClick={() => router.push("/register")}
          >
            Register
          </div>
          <div
            className={style.navItem}
            onClick={() => router.push("/feedback")}
          >
            Feedback
          </div>
          <div className={style.navItem} onClick={() => router.push("/help")}>
            Help
          </div>
        </div>
        <Button
          circular
          inverted
          color="green"
          size="medium"
          onClick={() => router.push("/adminLogin")}
        >
          {/* <Icon name="admin" /> */}
          Admin
        </Button>
      </div>
    </div>
  );
};

export default HeaderComponent;
