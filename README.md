# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Botswana Government 24/7 Helpdesk

![Government Helpdesk](https://img.shields.io/badge/Status-Live%20Demo-brightgreen)
![React](https://img.shields.io/badge/Built%20with-React-blue)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7)

A responsive, dual-language helpdesk system for Botswana government services, providing 24/7 automated assistance to citizens.

## 🚀 Live Demo
**[View Live Application](https://gov-helpdesk-csi-342.netlify.app/)**

## 📋 Project Overview
This system addresses key findings from citizen surveys by providing:
- Instant access to common government services
- Dual-language support (English & Setswana)
- 24/7 automated assistance
- Mobile-responsive design
- Quick-action buttons for frequent queries

## 🎯 Features
- **🤖 AI Assistant** - Instant responses to common queries
- **🌍 Dual Language** - English & Setswana support
- **📱 Mobile Responsive** - Works on all devices
- **⚡ Quick Actions** - One-click access to common services
- **🔔 Real-time Feedback** - Typing indicators & timestamps
- **🎨 Accessible Design** - High contrast, keyboard navigation

## 🛠️ Technology Stack
- **Frontend**: React 18 + Vite
- **Icons**: Lucide React
- **Deployment**: Netlify
- **Styling**: CSS-in-JS with gradient designs

## 📚 UI/UX Principles Applied
Based on CSI 342 Week 10 Lectures:

### 1. **Simplicity**
- Clean, uncluttered interface
- Minimal essential elements
- Straightforward user actions

### 2. **Consistency** 
- Uniform button styles throughout
- Consistent color scheme and typography
- Predictable navigation patterns

### 3. **Feedback**
- Real-time typing indicators
- Message timestamps
- Visual response animations
- Status indicators

### 4. **Tolerance**
- Quick-action buttons prevent typing errors
- Clear error handling
- Easy recovery paths

### 5. **Accessibility**
- High contrast color scheme
- Keyboard navigation support
- Readable font sizes
- Screen reader friendly

## 🎨 Design Process
### Prototyping Approach
Instead of traditional wireframing tools, we developed a **high-fidelity interactive prototype** in React to:
- Demonstrate real user interactions
- Validate technical feasibility
- Create a test-ready system for usability studies
- Provide immediate value to end-users

### User-Centric Design
Based on survey findings from:
- **6 Public respondents** citing long queues as primary frustration
- **3 Government employees** identifying common automatable queries
- High demand for accurate information and quick human escalation

## 📱 Common Services Covered
- 🆔 Omang replacement procedures
- 🚗 Driver's license status & renewals
- 🏠 Residential plot applications
- 📄 Passport services
- 👶 Birth certificate applications

## 🚀 Quick Start
```bash
# Clone repository
git clone https://github.com/TomDon01/CSI-342_Project.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build