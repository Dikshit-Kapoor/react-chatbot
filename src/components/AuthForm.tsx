import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from '../styles/authForm.module.css';

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

const AuthForm=({mode,title,buttonText,linkUrl,linkText}:AuthFormProps)=>{

    const [formState, setFormState] = useState(initialFormState);
    const navigate = useNavigate();
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      navigate("/");
    };
    return(
        
<form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1 className={styles.authTitle}>{title}</h1>
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
        <>
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
        </>
      )}
      <button type="submit" className="ctaLink">
        {buttonText}
      </button>

      <Link to={linkUrl} className={styles.iconLink}>
        {linkText}
      </Link>
    </form>
    )
}

export default AuthForm;