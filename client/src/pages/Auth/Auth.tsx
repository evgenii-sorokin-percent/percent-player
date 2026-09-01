import styles from "./Auth.module.scss";

import { UserRound, LogIn } from "lucide-react";

const Auth = () => {
  return (
    <div className={`container flex-center ${styles.auth}`}>
      <article className={`${styles["auth__card"]}`}>
        <UserRound size={128} />
        <h2>Войти без аккаунта</h2>
      </article>
      <article className={`${styles["auth__card"]}`}>
        <LogIn size={128} />
        <h2>Войти в аккаунт</h2>
      </article>
    </div>
  );
};

export default Auth;
