# 🚀 Vijay Gottipati - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and skills. Built with cutting-edge technologies and featuring a stunning 3D computer science-themed background.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-blue)

## ✨ Features

### 🎨 **Visual Design**
- **3D Computer Science Background** - Animated floating code elements, geometric shapes, and matrix rain effects
- **Responsive Design** - Optimized for all screen sizes and devices
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Dark Theme** - Eye-friendly dark color scheme with vibrant accents

### 📱 **Functionality**
- **Interactive Contact Form** - Direct email integration with professional templates
- **Visitor Counter** - Real-time visitor tracking (email notifications disabled)
- **WhatsApp Integration** - Direct messaging capability
- **Project Showcase** - Detailed project presentations with live demos
- **Skills & Certifications** - Comprehensive technical expertise display
- **Professional Experience** - Complete work history and achievements

### 🛠️ **Technical Features**
- **Server-Side Rendering** - Fast loading and SEO optimization
- **Email Service** - Automated contact form processing
- **Real-time Analytics** - Visitor tracking and engagement metrics
- **Performance Optimized** - Lazy loading and efficient asset management

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   VITE_EMAIL_SERVICE_ID=your_emailjs_service_id
   VITE_EMAIL_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAIL_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev:full
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📦 Build & Deployment

### Development
```bash
npm run dev          # Frontend only
npm run dev:server   # Backend only
npm run dev:full     # Full stack development
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build
npm start           # Start production server
```

## 🛠️ Technologies Used

### **Frontend**
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Vite** - Lightning-fast build tool

### **Backend**
- **Node.js** - Server runtime
- **Express.js** - Web application framework
- **EmailJS** - Email service integration
- **CORS** - Cross-origin resource sharing

### **Development Tools**
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   └── vijay-photo.jpeg   # Profile photo
├── src/
│   ├── components/        # React components
│   │   ├── Background3D.tsx
│   │   ├── Hero.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── data/             # Static data
│   ├── services/         # API services
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
├── server.cjs            # Express server
├── package.json          # Dependencies
└── README.md            # This file
```

## 🎨 Customization

### Personal Information
Update your personal information in `src/utils/constants.ts`:
```typescript
export const YOUR_NAME = "Vijay Gottipati";
export const YOUR_EMAIL = "vijay.gottipati18@gmail.com";
export const YOUR_PHONE = "+19293928746";
```

### Content Updates
Update the content in the respective data files:
- `src/data/education.ts` - Education information
- `src/data/experience.ts` - Work experience
- `src/data/projects.ts` - Projects showcase
- `src/data/volunteer.ts` - Volunteer activities
- `src/data/certifications.ts` - Certifications
- `src/data/tools.ts` - Skills and tools

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [EmailJS](https://www.emailjs.com/) for email service integration

## 📞 Contact

For questions or support:
- **Email**: vijay.gottipati18@gmail.com
- **Phone**: +19293928746
- **Website**: [Portfolio Website](http://localhost:5173)

---

**Made with ❤️ by Vijay Gottipati**