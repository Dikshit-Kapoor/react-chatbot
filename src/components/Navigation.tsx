import styles from "../styles/navigation.module.css";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
    signin: string,
}

const Navigation = ({signin}: NavigationProps) => {
    const navigate = useNavigate();

    const handleLogIn = () => {
        navigate("/sign-in");
    };

    return (
        <nav className={styles.nav}>
          

                <button className={styles.logout} onClick={handleLogIn}>
                   {signin}
                </button>
         


        </nav>
    );
};

export default Navigation;