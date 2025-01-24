import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
const Home=()=>{
    return (
        <div>
        <h1 style={{color:"whitesmoke"}}>Home</h1>
       <Navigation/>
       <Layout>
        <p style={{ marginTop: "2rem" }}>Welcome back 👋</p>
      </Layout>
        </div>
    )
}

export default Home 