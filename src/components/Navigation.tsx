import styles from "../styles/navigation.module.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/sign-in");
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.logout} onClick={handleLogOut}>
        Log Out
      </button>
    </nav>
  );
};

export default Navigation;