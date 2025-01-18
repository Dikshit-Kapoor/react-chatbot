import axios from "axios"

const GenerateAnswer=async (): Promise<any>=>{
     const response:any=await axios.post('/posts',{})
     return response.data;
}

export default GenerateAnswer