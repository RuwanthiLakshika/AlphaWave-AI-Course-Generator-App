# AlphaWave - AI Course Generator App
## Overview
AlphaWave is an AI-powered application designed to generate tailored course outlines. This application leverages Next.js for the frontend, Tailwind CSS for styling, and Clerk for user authentication. With dynamic content generation and smooth user experience, AlphaWave simplifies the process of creating detailed course plans.

## Key Technologies
Next.js: Frontend framework    
Tailwind CSS: Styling        
Shadcn/UI & HyperUI: UI components   
Clerk: Authentication with Passkey & Google OneTap       
Gemini API: AI-based course generation  

![HomePage](https://github.com/user-attachments/assets/f47bbf95-3bbd-487f-9491-0f7cdbd38ce2)

![LoginPage](https://github.com/user-attachments/assets/4c6c5041-f594-4cf6-813d-ceb9b57f74bb)

![Dashboard](https://github.com/user-attachments/assets/f6d2f786-3d49-4c36-9669-127825bf6ce3)

![Select Category for Course](https://github.com/user-attachments/assets/9bbbfefe-0ebb-4b60-952f-f3118ab256cb)

![Topic   Desciption for Course](https://github.com/user-attachments/assets/2ed59c59-3e1c-48e2-8e09-7f0324ecf2b2)

![Select Options for Course](https://github.com/user-attachments/assets/7368dde8-fe50-481f-a28a-91ccf932a709)

![Generate course content using AI](https://github.com/user-attachments/assets/56f8ff60-8fcb-4d1a-a05e-8f9ac3bff9b4)

![couse content in json format](https://github.com/user-attachments/assets/f0fba56d-f7ea-48f3-a3bb-1b94d9b77fa1)

## Key Features
### 1. AI Course Layout Generation
Gemini API is used to generate structured course content based on user inputs. The app transforms user data into a structured AI prompt to generate a course outline.   

### 2. Custom Loading Feedback
A custom loader provides feedback to the user during the course generation process, enhancing the user experience with animated icons.       

### 3. Dynamic Styling with Class Bindings
Uses template literals in the className attribute to dynamically apply CSS classes based on the user’s course input.       

### 2. Global State Management via Context
User inputs (like course category, topic, level, etc.) are managed globally using React’s Context API, enabling easy access and updates across the application.   

### 3. Conditional Logic for User Flow
The state of the "Next" button is dynamically controlled based on the current step and whether the required input fields are filled.   

## Installation & Setup
Clone the repository and install dependencies.     
Run the development server locally to start using the app.     

## Contributing
Contributions to improve features and functionality are welcome.
