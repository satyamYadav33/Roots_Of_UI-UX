
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  if (!API_KEY) {
    throw new Error('API Key not found');
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  // We use gemini-3-flash-preview for quick, intelligent chat responses
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      ...history,
      { role: 'user', parts: [{ text: prompt }] }
    ],
    config: {
      systemInstruction: `You are an expert UI/UX Design mentor for a platform called "Roots of UI/UX Design". 
      Your goal is to provide insightful, practical, and intuitive design advice. 
      Help users understand concepts like hierarchy, accessibility, and user research. 
      Keep responses professional yet encouraging and concise. Use Markdown formatting for clarity.`,
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
    }
  });

  return response;
};
