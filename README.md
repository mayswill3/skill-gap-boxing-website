# Skill Gap Promotion & Management Website

A professional boxing promotion and management website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🥊 Professional boxing promotion theme
- 📱 Fully responsive design
- ⚡ Static site generation for fast loading
- 🎨 Custom Montserrat font integration
- 🖼️ Professional brand assets integrated
- 📧 Contact form for inquiries
- 🏆 Sections for fighters, events, and services

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

Build the static website:

```bash
npm run build
```

This will generate a static website in the `out/` directory that can be deployed to any static hosting service.

## Deployment Options

Since this is a static website, you can deploy the contents of the `out/` folder to:

- **GitHub Pages**: Upload the `out/` folder contents
- **Netlify**: Drag and drop the `out/` folder
- **Vercel**: Connect your repository for automatic deployments
- **Any static hosting service**: Upload the `out/` folder contents

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Main layout with header/footer
│   │   ├── page.tsx            # Homepage with all sections
│   │   └── globals.css         # Global styles and fonts
│   └── components/
│       ├── Header.tsx          # Navigation header
│       └── Footer.tsx          # Site footer
├── public/
│   └── assets/                 # Brand assets (logos, fonts, etc.)
└── out/                        # Generated static files (after build)
```

## Customization

- **Colors**: Edit the color scheme in the Tailwind classes (primarily red-600 theme)
- **Content**: Update the text content in `src/app/page.tsx`
- **Brand Assets**: Replace files in `public/assets/` with your own
- **Contact Info**: Update contact details in the Contact section and Footer
- **Fighters/Events**: Add real content when available

## Technologies Used

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4
- Custom Montserrat fonts
- Static site generation
