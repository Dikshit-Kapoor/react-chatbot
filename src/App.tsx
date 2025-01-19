
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>("");
  const handleSubmit = async (): Promise<any> => {
    setAnswer("loading the answer...")
    const response: any = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDuOiQv1CDVWUlKuGkxI3BmNYMX0dBTXbI', {
      contents: [
        {
          parts: [{ text: question }]
        },
      ],
    });
    console.log(response.data)
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);

  }


  return (
    <div>
      <h1 className="text-2xl font-bold underline">CHAT AI</h1>
      <textarea value={question} onChange={(e) => { setQuestion(e.target.value) }} ></textarea>
      <button onClick={handleSubmit}>Generate Answer</button>
      <pre className="text-sm/6 text-gray-900">{answer}</pre>
    </div>
  )
}

export default App
