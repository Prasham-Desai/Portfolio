# Personal Portfolio Website

A modern, interactive, and fully responsive personal portfolio website built with React.js. It is designed to showcase projects, skills, and professional experience with smooth animations and a premium user experience.

## ✨ Features

- **Modern UI/UX**: Clean and contemporary design with a focus on readability and visual appeal.
- **Smooth Animations**: Powered by [Framer Motion](https://www.framer.com/motion/) for delightful page transitions, scroll animations, and interactive elements.
- **Custom Cursor**: Enhances interactivity and gives a unique feel to the website.
- **Loading Screen**: A sleek initial loading experience before revealing the content.
- **Responsive Design**: Flawlessly adapts to all screen sizes, from mobile devices to large desktop monitors.
- **Dynamic Routing**: Built with `react-router-dom` for seamless navigation between the home page and detailed project views.
- **Sections Included**:
  - **Hero**: Impactful introduction.
  - **Projects**: Showcase of past and current work with detailed views.
  - **Skills**: Highlighting technical proficiencies.
  - **Experience**: Professional timeline.
  - **About**: Personal background and journey.
  - **Contact**: Get in touch section.

## 🛠️ Technologies Used

- **Framework**: [React 18](https://react.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Scroll Effects**: `react-intersection-observer`
- **Number Counters**: `react-countup`
- **Styling**: Standard CSS (`styles/globals.css`)
- **Build Tool**: Create React App (`react-scripts`)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   # or
   npm start
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```text
src/
├── assets/        # Images, icons, and other static files
├── components/    # Reusable UI components (Hero, Navbar, About, etc.)
├── data/          # JSON or JS data files for projects, skills, etc.
├── pages/         # Top-level page views (Home, ProjectDetail)
├── styles/        # Global stylesheets (e.g., globals.css)
├── App.jsx        # Main application component & routing logic
└── index.js       # React application entry point
```

## 📜 Scripts

In the project directory, you can run:

- `npm run dev` or `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- `npm test`: Launches the test runner in the interactive watch mode.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License

This project is open-source and available under the MIT License.
