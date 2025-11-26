# 🚀 Abdelmalek Abed - Portfolio

Modern portfolio website showcasing my work in Machine Learning, Data Science, and Full-Stack Development. Built with Next.js 14, React 18, and TypeScript.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.33-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 👨‍💻 About Me

Applied Mathematics and Modeling engineering student with a strong focus on Artificial Intelligence, Machine Learning, and Data Science. I combine mathematical reasoning with practical engineering to build intelligent systems that solve real-world problems.

**Connect with me:**
- 🔗 [LinkedIn](https://www.linkedin.com/in/abdelmalek-abed-613493289/)
- 💻 [GitHub](https://github.com/AbdelmalekAbed)

## ✨ Features

### 🎯 Portfolio Sections

- **Projects Showcase**: Interactive grid displaying ML, Data Science, and Web Development projects
- **About Page**: Comprehensive background, skills, experience, and education
- **Skills Matrix**: Organized display of technical expertise across AI/ML, Web Development, Programming, and Data Engineering
- **Work Experience**: Detailed timeline of professional experience and internships
- **Certifications**: AWS, Azure, and DataCamp certifications with credential links
- **Contact**: Direct links to LinkedIn and GitHub profiles

### ⚡ Technical Highlights

- **Modern Stack**: Next.js 14 with App Router and React Server Components
- **Static Export**: Optimized for fast loading and easy deployment
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation with strict checking
- **Animations**: Smooth transitions with Framer Motion
- **SEO Optimized**: Metadata API and structured data
- **Dark Mode**: Built-in theme support
- **Performance First**: Static generation for optimal loading speeds

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14.2.33 with App Router
- **UI Library**: React 18.3.1
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3.4
- **Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Development Tools
- **Package Manager**: pnpm
- **Code Quality**: Biome (formatter & linter)
- **Testing**: Vitest, React Testing Library, Playwright
- **Build**: Next.js static export

## 🚀 Getting Started

### Prerequisites

- Node.js 24.x or higher
- pnpm 10.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbdelmalekAbed/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   ```

4. **Open browser**
   - Navigate to `http://localhost:3000`

### Build for Production

```bash
# Build static export
pnpm build

# Preview production build
pnpm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── about/        # About page
│   │   ├── projects/     # Projects page
│   │   └── contact/      # Contact page
│   ├── components/       # React components
│   │   ├── sections/     # Page sections
│   │   ├── layout/       # Layout components
│   │   ├── projects/     # Project components
│   │   └── ui/           # UI primitives
│   ├── data/             # Content data
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── skills.ts
│   │   └── certifications.ts
│   └── lib/              # Utilities
├── public/               # Static assets
│   ├── projects/         # Project images
│   ├── certifications/   # Certification badges
│   └── headshot/         # Profile photos
└── package.json



## 💻 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run linter
pnpm format       # Format code with Biome

# Testing
pnpm test         # Run unit tests
pnpm test:watch   # Run tests in watch mode
pnpm test:ui      # Open Vitest UI
pnpm test:e2e     # Run end-to-end tests

# Code Quality
pnpm check        # Run Biome checks
pnpm format:fix   # Auto-fix formatting issues
```

## 🎨 Key Features Showcase

### Projects Section
- **NLP Text Classification**: Multi-class classification using BERT and TensorFlow
- **ML Pipeline**: End-to-end pipeline for machine learning workflows
- **Automated Essay Scoring**: Deep learning model with 0.85 accuracy
- **Predictive Maintenance**: LSTM-based failure prediction system
- **Real-time Dashboards**: Interactive analytics with React and D3.js
- **Fraud Detection**: Anomaly detection using Isolation Forest

### Skills Categories
- **AI & Machine Learning**: NLP, Deep Learning, Computer Vision, Neural Networks
- **Web Development**: React.js, HTML5/CSS3, JavaScript, PHP, Java, C/C++, JEE
- **Programming & Frameworks**: Python, TensorFlow, PyTorch, Scikit-learn
- **Data Engineering**: ETL Pipelines, Data Visualization, Feature Engineering

## 📊 Certifications

- AWS Certified Solutions Architect – Associate
- AWS Certified Developer – Associate
- Microsoft Certified: Azure AI Fundamentals
- Microsoft Certified: Azure Data Fundamentals
- DataCamp Associate Data Scientist

## 🤝 Contributing

This is a personal portfolio project. However, if you find any bugs or have suggestions:

1. Open an issue describing the problem or enhancement
2. Feel free to fork and submit pull requests
3. Ensure code follows existing style (run `pnpm format` before committing)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Deployment

This portfolio can be easily deployed to several free hosting platforms:

### Vercel (Recommended)

The simplest deployment option for Next.js applications:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### GitHub Pages

Add the following to your `next.config.mjs`:

```javascript
output: 'export',
basePath: '/your-repo-name',
images: { unoptimized: true }
```

Then push to GitHub and enable GitHub Pages in repository settings.

## 👨‍💻 Author

**Abdelmalek Abed**

Applied Mathematics and Modeling engineering student specializing in Artificial Intelligence, Machine Learning, and Data Science.

**Certifications:**
- AWS Certified Solutions Architect – Associate
- AWS Certified Developer – Associate
- Microsoft Certified: Azure AI Fundamentals
- Microsoft Certified: Azure Data Fundamentals
- DataCamp Associate Data Scientist

**Connect:**
- [LinkedIn](https://www.linkedin.com/in/abdelmalek-abed-613493289/)
- [GitHub](https://github.com/AbdelmalekAbed)

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js and React documentation
- Tailwind CSS and shadcn/ui communities
- All open-source contributors

---

Built with ❤️ using React 18 + Next.js 14
