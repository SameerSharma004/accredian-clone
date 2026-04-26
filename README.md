# Accredian Landing Page

A premium, high-performance, and mobile-optimized landing page for Accredian's enterprise training solutions. Built with cutting-edge technologies to deliver a world-class user experience.

## Setup Instructions

To get this project running locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <your-repo-link>
   cd accredian
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the results.


## Approach Taken

- **Mobile-First Design**: Prioritized tactile, swipe-based interactivity for mobile users (horizontal snap carousels) while maintaining structured grid layouts for desktop.
- **Component-Driven Development**: Built modular components (Navbar, Hero, LeadForm, etc.) to ensure the codebase is scalable and easy to maintain.
- **High-Fidelity Aesthetics**: Leveraged Tailwind CSS 4 gradients, glassmorphism, and custom blur effects to create a premium, authoritative brand presence.
- **Single-Page Navigation**: Implemented a seamless anchor-based system with CSS smooth scrolling and precise header offsets for an intuitive user journey.

## AI Usage

### Where AI helped
- **Core Scaffolding**: Rapidly generated initial component structures and responsive Tailwind skeletons.
- **Complex UI Logic**: Assisted in developing the state-managed testimonial carousel and the infinite-loop marquee for partnerships.
- **Visual Concepting**: Helped brainstorm the "Next-Gen" design system, including the CAT Framework and visual depth layers.

### What I modified manually
- **Fine-Tuned Spacing**: Manually adjusted vertical padding and margins (especially in the Accredian Edge and Hero sections) to achieve a compact, high-impact vertical rhythm.
- **Brand Identity**: Enforced a specific high-impact subtitle style (uppercase, brand blue, wide tracking) that the AI initially generalized.
- **Mobile Refinements**: Redesigned the partnership marquee into a stable grid for mobile to ensure brand legibility, which required manual layout overrides.
- **Asset Integration**: Manually coordinated the placement and responsive switching of custom SVG infographics.