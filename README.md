# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 **Custom Color Palette** - Beautiful blue color scheme (#0C2B4E, #1A3D64, #1D546C, #F4F4F4)
- 📱 **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- ⚡ **Performance Optimized** - Built with Next.js 16 for optimal performance
- 🎭 **Smooth Animations** - Framer Motion animations for engaging user experience
- 🎯 **Modern UI Components** - shadcn/ui components for consistent design
- ♿ **Accessible** - Built with accessibility best practices

## Sections

- **Hero** - Introduction and call-to-action
- **About** - Personal information and what you do
- **Skills** - Technical skills and technologies
- **Projects** - Showcase of featured projects
- **Contact** - Get in touch section with social links
- **Footer** - Footer with copyright information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the title and description

2. **About Section** (`src/components/About.tsx`):
   - Update the about text with your personal information
   - Modify the "What I Do" list

3. **Skills Section** (`src/components/Skills.tsx`):
   - Update the `skillCategories` array with your skills
   - Add or remove skill categories as needed

4. **Projects Section** (`src/components/Projects.tsx`):
   - Update the `projects` array with your actual projects
   - Add your GitHub and demo links

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email address
   - Add your social media links (LinkedIn, GitHub, Twitter, etc.)

6. **Header** (`src/components/Header.tsx`):
   - Change "Portfolio" to your preferred name/brand

7. **Footer** (`src/components/Footer.tsx`):
   - Update "Your Name" to your actual name

### Update Metadata

Edit `src/app/layout.tsx` to update the page title and description.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills section
│   │   ├── Projects.tsx     # Projects section
│   │   ├── Contact.tsx      # Contact section
│   │   └── Footer.tsx       # Footer
│   └── lib/
│       └── utils.ts         # Utility functions
└── public/                  # Static assets
```

## Deployment

This portfolio can be easily deployed to:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Next.js

For Vercel deployment:
1. Push your code to GitHub
2. Import the repository to Vercel
3. Deploy with default settings

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!
