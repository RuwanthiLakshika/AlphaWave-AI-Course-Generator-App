/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// Create and export the chat session
export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hour, NoOf Chapters: 5, in JSON format"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming Fundamentals\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering the essential concepts and syntax for beginners. You will learn how to write basic Python programs, work with variables, data types, operators, control flow, and functions.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter covers the history of Python, its key features, and its applications. We will also explore the different ways to set up your Python environment and write your first Python program.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Variables, Data Types, and Operators\",\n        \"about\": \"This chapter introduces you to the fundamental building blocks of Python programming, including variables, data types like integers, floats, strings, and booleans, as well as different types of operators.\",\n        \"duration\": \"25 minutes\"\n      },\n      {\n        \"name\": \"Control Flow: Conditional Statements and Loops\",\n        \"about\": \"This chapter delves into control flow mechanisms in Python, such as conditional statements (if-else) and loops (for and while), allowing you to create programs that execute different code blocks based on conditions.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Functions\",\n        \"about\": \"This chapter explores functions, which are reusable blocks of code that perform specific tasks. You'll learn how to define, call, and pass arguments to functions.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Data Structures: Lists and Dictionaries\",\n        \"about\": \"This chapter introduces two important data structures in Python: lists and dictionaries. You will learn how to create, access, modify, and iterate over these structures.\",\n        \"duration\": \"15 minutes\"\n      }\n    ]\n  },\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5\n}\n```\n"},
      ],
    },
  ],
});

// async function run(input) {
//   const result = await chatSession.sendMessage(input);
//   console.log(result.response.text());
// }

// // Export both the chatSession and run function
// module.exports = {
//   chatSession,
//   run,
// };
