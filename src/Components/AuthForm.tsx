import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../styles/authForm.module.css';
import { FaUserPlus } from "react-icons/fa";
import { doSignInwithGoogle, logInWithEmailAndPassword } from "../utils/firebase";
import { UserAuth } from "../Pages/UserAuth";


interface AuthFormProps {
    mode: "signin" | "register";
    title: string;
    buttonText: string;
    linkUrl: string;
    linkText: string;
}

const initialFormState = {
    email: "",
    password: "",
    name: ""
};

const AuthForm = ({ mode, title, buttonText, linkUrl, linkText }: AuthFormProps) => {
    const navigate = useNavigate();
    const { login } = UserAuth();

    const [formState, setFormState] = useState(initialFormState);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let user = null;
        if (mode === "signin") {
            user = await doSignInwithGoogle();

        }
        if (mode === "register") {
            user = await logInWithEmailAndPassword(formState.email, formState.password, formState.name);
        }
        console.log(user)
        if (user !== null) {
        
            login(user);
            navigate("/chat");
        }


    };
    return (

        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h1>{title}</h1>
            <input
                type="email"
                placeholder="Email"
                value={formState.email}
                onChange={(event) =>
                    setFormState((prevState) => ({
                        ...prevState,
                        email: event.target.value
                    }))
                }
            />
            <input
                type="password"
                placeholder="Password"
                value={formState.password}
                onChange={(event) =>
                    setFormState((prevState) => ({
                        ...prevState,
                        password: event.target.value
                    }))
                }
            />
            {mode === "register" && (
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={formState.name}
                        onChange={(event) =>
                            setFormState((prevState) => ({
                                ...prevState,
                                name: event.target.value
                            }))
                        }
                    />
                </div>
            )}
            <button type="submit" className="ctaLink">
                {buttonText}
            </button>

            <Link to={linkUrl} className={styles.iconLink}>
                <FaUserPlus className={styles.inlineSvg} />
                {linkText}
            </Link>
        </form>
    )
}

export default AuthForm;