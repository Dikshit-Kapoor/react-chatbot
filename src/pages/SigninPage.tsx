import Layout from "../components/Layout";
import AuthForm from "../components/AuthForm";

const SigninPage=()=>{
    return(
        <Layout>
            <div className="authContainer">
               <AuthForm mode="signin" title="" buttonText="" linkUrl="" linkText=""/>
            </div>
        </Layout>
    )
}

export default SigninPage;