import Layout from "../Components/Layout";
import AuthForm from "../Components/AuthForm";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="authContainer">
        <AuthForm
          mode="register"
          title="Create a new account"
          buttonText="Register"
          linkUrl="/sign-in"
          linkText="Sign in"
        />
      </div>
    </Layout>
  );
};

export default RegisterPage;
