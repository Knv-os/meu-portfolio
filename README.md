# Portfolio Website

A modern React TypeScript portfolio website with particles.js background effects, built with Vite.

## Features

- ✨ Modern React 18 with TypeScript
- 🎨 Beautiful particle background with absorbers effect
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 🎯 Clean, modular component architecture
- 🌈 Gradient effects and glass morphism UI
- 📧 Contact form with validation
- 🚀 Fast development with Vite

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Particles**: TSParticles (react-tsparticles)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: ESLint, PostCSS

## Prerequisites

This project requires Node.js version 18 or higher. Your current Node.js version appears to be older.

### Updating Node.js

#### Option 1: Using Node Version Manager (NVM) - Recommended

```bash
# Install NVM (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal or run:
source ~/.bashrc

# Install and use Node.js 18
nvm install 18
nvm use 18
nvm alias default 18
```

#### Option 2: Direct Installation

Visit [nodejs.org](https://nodejs.org/) and download the latest LTS version (18+).

## Installation & Setup

1. **Clone/Navigate to the project directory**

   ```bash
   cd portfolio-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section with intro
│   │   ├── About.tsx         # About me section
│   │   ├── Projects.tsx      # Projects showcase
│   │   └── Contact.tsx       # Contact form
│   ├── ParticlesBackground.tsx # Particle effects
│   ├── Navigation.tsx        # Navigation bar
│   └── Footer.tsx           # Footer component
├── App.tsx                  # Main app component
├── main.tsx                # Entry point
└── index.css               # Global styles
```

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/sections/Hero.tsx` - Name, title, description
- `src/components/sections/About.tsx` - Skills, experience, journey
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer details

### Styling

- Colors and themes: `tailwind.config.js`
- Global styles: `src/index.css`
- Component-specific styles: Individual component files

### Particles Configuration

Modify the particles configuration in `src/components/ParticlesBackground.tsx` to customize:

- Particle colors
- Animation speed
- Interaction effects
- Absorbers behavior

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI

## Troubleshooting

### Node.js Version Issues

If you encounter syntax errors or module issues, ensure you're using Node.js 18+:

```bash
node --version
```

### Dependencies Issues

Clear node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

MIT License - feel free to use this project for your own portfolio.
