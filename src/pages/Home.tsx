import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
const Home=()=>{
    return (
        <div>
       <Navigation/>
       <Layout>
        <p style={{ marginTop: "2rem" }}>Welcome back 👋</p>
      </Layout>
        </div>
    )
}

export default Home 