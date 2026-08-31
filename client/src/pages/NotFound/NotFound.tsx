import { useNavigate } from "react-router";
import styles from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => navigate("/");

  return (
    <div className={`container flex-center  ${styles["not-found"]}`}>
      <h1>{t("notFound.title")}</h1>
      <Button onClick={handleClick}> {t("notFound.backButton")} </Button>
    </div>
  );
};

export default NotFound;
