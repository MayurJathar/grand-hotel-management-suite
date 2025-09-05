
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Using a mock service.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "mock-key" });

export const generateRoleDescription = async (role: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return new Promise(resolve => setTimeout(() => resolve(`This is a mock AI-generated description for a ${role}. In a real application, this would provide a detailed summary of the responsibilities, qualifications, and key duties associated with this position at a luxury hotel, tailored to maintain the highest standards of guest service and operational excellence.`), 1500));
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Provide a concise, professional job description for a "${role}" at a high-end luxury hotel. Focus on key responsibilities and required qualities. Limit the response to 3-4 sentences.`,
      config: {
        systemInstruction: "You are an expert HR consultant specializing in the luxury hospitality industry.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating role description:", error);
    return "Could not generate role description due to an API error. Please check the console for details.";
  }
};
