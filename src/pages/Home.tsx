import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
const Home=()=>{
    return (
        <div>
       <Navigation signin="Sign In"/>
       <Layout>
        <p style={{ marginTop: "2rem",color:"white" }}>Welcome back 👋</p>
      </Layout>
        </div>
    )
}

export default Home 