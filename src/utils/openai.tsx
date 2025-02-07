import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Use environment variable
  dangerouslyAllowBrowser: true, // Required for using OpenAI in frontend
});

export const generateBio = async (prompt) => {
  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Write a professional bio for a portfolio: ${prompt}`,
      max_tokens: 100,
    });

    return response.choices[0].text.trim();
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return "Error generating bio.";
  }
};