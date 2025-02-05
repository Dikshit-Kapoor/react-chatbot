import Layout from "../Components/Layout";
import AuthForm from "../Components/AuthForm";

const SigninPage=()=>{
    return(
        <Layout>
            <div className="authContainer">
               <AuthForm mode="signin" title="Sign in to your account" buttonText="Login" linkUrl="/register" linkText="Register"/>
            </div>
        </Layout>
    )
}

export default SigninPage;