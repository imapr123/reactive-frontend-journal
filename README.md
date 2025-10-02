# Reactive Frontend Journal

A dynamic journal capturing continuous learnings, experiments, and best practices in front-end development with a special focus on React, React Native, and modern JavaScript. This repository serves as a personal log for documenting real-world problem solving, performance optimization, and technical deep dives.

## 🚀 Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **ESLint + Prettier** - Code quality and formatting
- **Husky + lint-staged** - Git hooks for code quality
- **CSS Modules** - Scoped styling solution

## 📦 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── types/          # TypeScript type definitions
├── assets/         # Static assets (images, icons, etc.)
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## 🛠️ Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd reactive-frontend-journal
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🔧 Development Workflow

### Code Quality

This project uses several tools to maintain code quality:

- **ESLint** - Identifies and fixes JavaScript/TypeScript issues
- **Prettier** - Ensures consistent code formatting
- **TypeScript** - Provides static type checking
- **Husky** - Runs pre-commit hooks to ensure code quality

### Pre-commit Hooks

Before each commit, the following checks run automatically:

1. ESLint fixes any auto-fixable issues
2. Prettier formats the code
3. TypeScript type checking

### Coding Standards

- Use TypeScript for all new files
- Follow the existing code structure and naming conventions
- Write meaningful component and function names
- Add proper TypeScript types for all props and functions
- Use functional components with hooks

## 🎯 Features

- Modern React 19 setup with TypeScript
- Fast development with Vite HMR
- Strict TypeScript configuration
- Automated code formatting and linting
- Git hooks for code quality enforcement
- Path aliases for clean imports (`@/components`, `@/utils`, etc.)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel** - Zero-config deployment for Vite projects
- **Netlify** - Drag and drop deployment
- **GitHub Pages** - Free hosting for open source projects
- **AWS S3 + CloudFront** - Scalable cloud hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)

---

**Happy Coding! 🎉**
