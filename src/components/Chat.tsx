
import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import styles from '../styles/Input.module.css';
import bot from "../icons/bot.png";
import user from "../icons/user.png";

function Chat() {
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>("");
    const [role, setRole] = useState<string>("user");
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_GEMINI_API_URL;

    const handleSubmit = async (): Promise<any> => {
        setAnswer("loading the answer...")
        setRole("user")
        setAnswer(question)
        const response: any = await axios.post(`${API_URL}?key=${API_KEY}`, {
            contents: [
                {
                    parts: [{ text: question }]
                },
            ],
        });
        console.log(response.data)
        setRole("assistant")
        setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);

    }


    return (
        <div className="App">
            <div className="Column">

                <div className="Content">
                    <div className={styles.wrapper2}>
                        <div>
                            <img
                                src={role === "assistant" ? bot : user}
                                className={styles.avatar}
                                alt="profile avatar"
                            />
                        </div>
                        <div> {answer}</div>

                    </div>

                </div>

                <div className={styles.wrapper}>
                    <input placeholder="Your prompt here..." className={styles.text} value={question} onChange={(e) => { setQuestion(e.target.value) }} ></input>
                    <button tabIndex={0} onKeyDown={e => e.key === "Enter" ? handleSubmit : ''} className={styles.btn} onClick={handleSubmit}> Go</button>
                </div>

            </div>
        </div>
    )
}

export default Chat
