# AlphaWave - AI Course Generator App
## Overview
AlphaWave is an AI-powered application designed to generate tailored course outlines. This application leverages Next.js for the frontend, Tailwind CSS for styling, and Clerk for user authentication. With dynamic content generation and smooth user experience, AlphaWave simplifies the process of creating detailed course plans.

## Key Technologies
Next.js: Frontend framework    
Tailwind CSS: Styling        
Shadcn/UI & HyperUI: UI components   
Clerk: Authentication with Passkey & Google OneTap       
Gemini API: AI-based course generation    

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
