# Mindery - Mindfulness & Meditation Landing Page

A modern, responsive landing page built with React and Tailwind CSS for a mindfulness and meditation platform designed specifically for children aged 4-14.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, engaging design with smooth animations and interactive elements
- **Contact Modal**: Functional popup form for lead generation with form validation
- **Age-Specific Programs**: Dedicated sections for different age groups (4-6, 7-10, 11-14)
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **Accessibility**: Semantic HTML and proper ARIA labels for screen readers

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js (version 16 or higher) installed on your system.

### Installation

1. **Clone or download this project**
   ```bash
   # If you have the project files, navigate to the project directory
   cd wellsfound
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to view the landing page

### Build for Production

```bash
npm run build
```

This will create a `dist` folder with optimized files ready for deployment.

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Secondary**: Yellow/Orange accents (#eab308 to #a16207)
- **Background**: Soft gradients from blue to purple

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### Key Components

1. **Header**: Sticky navigation with mobile menu
2. **Hero Section**: Eye-catching banner with CTA buttons
3. **Features**: Four key benefits with icons and descriptions
4. **Programs**: Age-specific program cards (4-6, 7-10, 11-14)
5. **Testimonials**: Customer reviews with ratings
6. **Pricing**: Three-tier pricing table with highlighted popular plan
7. **FAQ**: Expandable frequently asked questions
8. **Footer**: Links and company information
9. **Contact Modal**: Lead capture form with validation

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting for better code quality

## 📋 Form Fields

The contact modal includes:
- **Name**: Parent/Guardian name (required)
- **Email**: Email address (required)
- **Phone**: Phone number (optional)
- **Class**: Child's age group selection
- **Message**: Additional information (optional)

## 🎯 Key Interactions

- **Start Free Trial** buttons open the contact modal
- **Mobile menu** toggles on hamburger click
- **FAQ items** expand/collapse on click
- **Form submission** shows loading state and success message
- **Hover effects** on all interactive elements

## 🎨 Animations

- **Fade in**: Elements appear with opacity transition
- **Slide up**: Components slide from bottom with easing
- **Bounce gentle**: Subtle floating animation for decorative elements
- **Scale on hover**: Interactive elements grow slightly on hover
- **Loading spinner**: Animated spinner during form submission

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── Features.jsx     # Benefits section
│   ├── Programs.jsx     # Age-specific programs
│   ├── Testimonials.jsx # Customer reviews
│   ├── Pricing.jsx      # Pricing plans
│   ├── FAQ.jsx          # Frequently asked questions
│   ├── Footer.jsx       # Footer section
│   └── ContactModal.jsx # Contact form modal
├── App.jsx              # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🛠 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your primary colors */ },
      secondary: { /* your secondary colors */ }
    }
  }
}
```

### Fonts
Add custom fonts in `index.html` and update `tailwind.config.js`:
```javascript
fontFamily: {
  'sans': ['YourFont', 'ui-sans-serif'],
  'display': ['YourDisplayFont', 'ui-sans-serif'],
}
```

### Content
Update text content directly in the component files to match your needs.

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command to `npm run build`
3. Set output directory to `dist`

### Other Platforms
Use the files in the `dist` folder after running `npm run build`

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@mindery.com or join our community forum.

---

**Note**: This landing page is designed to be a starting point. Customize the content, colors, and features to match your specific brand and requirements.
