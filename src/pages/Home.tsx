import { MessageCircle, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/sign-in");
  };
  return (
    <div>
      <div className="min-h-screen  flex flex-col items-center justify-center px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          Welcome to ChatSphere AI
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Your smart conversational assistant powered by the latest LLM
          technology. Ask questions, get insights, and simplify your tasks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button
            className="bg-black-500 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition"
            onClick={handleLogIn}
          >
            <Rocket className="w-5 h-5 mr-2" />
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full border">
          <div className="flex items-start space-x-3">
            <MessageCircle className="text-blue-500 mt-1" />
            <div>
              <p className="text-sm text-gray-800 font-semibold">
                ChatSphere AI
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Hi there! 👋 I'm here to help you with anything. Just Sign Up
                and type your question and I'll respond right away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
