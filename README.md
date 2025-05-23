# Albus Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Quick Start Guide

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd AlbusLandingPage1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   This will start the development server at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   This will create a production-ready build in the `dist` directory.

5. **Preview production build**
   ```bash
   npm run preview
   ```
   This will serve the production build locally for testing.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- PostCSS

## Project Structure

```
├── src/              # Source files
├── public/           # Static assets
├── index.html        # Entry HTML file
├── vite.config.ts    # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json      # Project dependencies and scripts
```

## Development

The project uses Vite as the build tool, which provides:
- Fast hot module replacement (HMR)
- TypeScript support out of the box
- Optimized production builds
- Built-in development server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 