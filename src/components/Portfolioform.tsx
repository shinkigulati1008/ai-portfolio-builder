import  { useState } from "react";
import { generateBio } from "../utils/openai"; // Import AI function

export default function PortfolioForm() {
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateBio = async () => {
    setLoading(true);
    const generatedBio = await generateBio("React developer with 5 years of experience");
    setBio(generatedBio);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        🚀 AI-Powered Portfolio Builder
      </h1>
      <textarea
        value={bio}
        readOnly
        placeholder="Your AI-generated bio will appear here..."
        className="w-full h-40 p-3 text-gray-700 border rounded-lg focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleGenerateBio}
        disabled={loading}
        className={`mt-4 w-full py-2 text-white font-semibold rounded-lg ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Generating..." : "Generate Bio"}
      </button>
    </div>
  );
}
