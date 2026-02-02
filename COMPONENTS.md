# Component Documentation

## Overview
This Next.js portfolio has been broken down into 9 modular components for easy maintenance and scalability.

## Component Structure

### 1. Navigation.jsx (`src/components/Navigation.jsx`)
**Purpose**: Sticky navigation bar with mobile menu

**Features**:
- Client-side component with state management
- Responsive hamburger menu for mobile
- Smooth scroll to sections
- Active section highlighting on scroll
- Glass morphism effect

**State**:
- `mobileMenuOpen`: Controls mobile menu visibility
- `scrolled`: Tracks scroll position for styling

---

### 2. Hero.jsx (`src/components/Hero.jsx`)
**Purpose**: Landing section with introduction and profile

**Features**:
- Large heading with gradient text
- Social media links (LinkedIn, GitHub, Figma, Email, WhatsApp)
- Call-to-action buttons
- Profile card with stats (15+ Projects, 9+ Skills, 100% Passion)
- Floating background decorations
- Animated entrance with AOS

**Key Elements**:
- Welcome badge
- Name and title
- Brief introduction
- Action buttons
- Social icons
- Profile photo placeholder
- Role badges
- Statistics grid

---

### 3. About.jsx (`src/components/About.jsx`)
**Purpose**: Detailed information about background and expertise

**Features**:
- Two-column layout (visual + content)
- Education information
- Specialization details
- Mission statement
- What I Bring to the Table list
- Core Competencies list

**Sections**:
- Education card (Nexcore Institute)
- Specialization card (Full Stack + UI/UX)
- Mission card
- Skills and competencies lists

---

### 4. Skills.jsx (`src/components/Skills.jsx`)
**Purpose**: Visual showcase of technical skills

**Features**:
- Grid layout (4 columns on desktop)
- 11 skill cards with icons
- Animated progress bars
- Hover effects with scale animation
- Color-coded by technology

**Skills Included**:
1. HTML5 (100%)
2. CSS3 (80%)
3. Tailwind CSS (90%)
4. JavaScript (75%)
5. React.js (30%)
6. Next.js (40%)
7. Node.js (10%)
8. Express.js (30%)
9. C Programming (50%)
10. Figma (90%)
11. WordPress (70%)

**Data Structure**:
```javascript
{
  name: string,
  icon: string,
  color: string,
  progress: number,
  description: string,
  isFontAwesome?: boolean
}
```

---

### 5. Projects.jsx (`src/components/Projects.jsx`)
**Purpose**: Portfolio showcase with filtering

**Features**:
- Client-side component with filtering
- 15 projects total
- Filter buttons (All, Coding, Design)
- Project cards with hover effects
- Category badges
- Technology tags

**Project Categories**:
- **Coding Projects** (9):
  - BookMyShow Clone
  - Printify Clone
  - Wonderlust Travels
  - Admin Dashboard
  - ChatBot Interface
  - Quiz Application
  - Tailkits Clone
  - Subscription Plan

- **Design Projects** (6):
  - RedBus Clone
  - JioMart Clone
  - Gozoop Website Clone
  - Snapdeal Website Clone
  - CoCo Cola Website Clone
  - Tours & Travels Redesign
  - School & Campus Redesign

**Project Data Structure**:
```javascript
{
  name: string,
  category: 'coding' | 'design',
  icon: string,
  gradient: string,
  description: string,
  features: string[],
  tags: string[],
  badge: string,
  badgeColor: string
}
```

---

### 6. Certifications.jsx (`src/components/Certifications.jsx`)
**Purpose**: Display professional certifications

**Features**:
- 2-column grid layout
- Certificate cards with icons
- Links to LinkedIn for verification
- Hover lift effect

**Certifications**:
1. AI For All - AI Appreciate (Intel & Digital India, Jan 2026)
2. Yuva AI For All - English (AISECT Learn, Jan 2026)

---

### 7. Contact.jsx (`src/components/Contact.jsx`)
**Purpose**: Contact information display

**Features**:
- 4-column grid layout
- Contact method cards
- Clickable links
- Color-coded icons

**Contact Methods**:
1. Email: zaidkhan023761@gmail.com
2. Phone: +91 9082775122
3. WhatsApp: Direct chat link
4. Figma: Portfolio link

---

### 8. Footer.jsx (`src/components/Footer.jsx`)
**Purpose**: Site footer with links and social media

**Features**:
- 3-column layout
- Brand section
- Quick links navigation
- Social media icons
- Copyright notice

**Sections**:
- Brand + tagline
- Quick navigation links
- Social media links (5 platforms)
- Copyright text

---

### 9. WhatsAppFloat.jsx (`src/components/WhatsAppFloat.jsx`)
**Purpose**: Floating WhatsApp contact button

**Features**:
- Fixed position (bottom-right)
- Floating animation
- Hover tooltip
- Direct WhatsApp link

**Styling**:
- Green circular button
- WhatsApp icon
- Tooltip on hover
- Float animation

---

## Main Page (`src/app/page.jsx`)

**Purpose**: Main entry point that assembles all components

**Features**:
- Client-side component
- AOS initialization
- Iconify script loading
- Smooth scroll implementation
- Skill bar animation observer

**Component Order**:
1. Navigation (sticky)
2. Hero
3. About
4. Skills
5. Projects
6. Certifications
7. Contact
8. Footer
9. WhatsAppFloat (fixed)

---

## Layout (`src/app/layout.jsx`)

**Purpose**: Root layout with fonts and metadata

**Features**:
- Google Fonts integration (Inter, JetBrains Mono)
- SEO metadata
- External CSS libraries (Font Awesome, AOS)
- Smooth scroll HTML attribute

---

## Global Styles (`src/app/globals.css`)

**Custom Animations**:
- fadeInUp
- float
- shimmer
- glow
- slideInLeft
- slideInRight

**Custom Classes**:
- `.gradient-text` - Blue to purple gradient
- `.hover-lift` - Lift on hover effect
- `.btn-hover-glow` - Button glow animation
- `.skill-bar` / `.skill-progress` - Progress bar styling
- `.glass-effect` - Backdrop blur effect
- `.bg-pattern` - Radial gradient background
- `.info-list` - Bullet point styling
- `.whatsapp-float` - Fixed floating button

**Color Scheme**:
- Primary: Blue (#0ea5e9)
- Accent: Purple/Pink (#d946ef)
- Neutral: Gray shades

---

## Dependencies

### Production
- `next`: 16.1.6
- `react`: 19.2.3
- `react-dom`: 19.2.3
- `aos`: 2.3.4

### Development
- `@tailwindcss/postcss`: ^4
- `tailwindcss`: ^4
- `eslint`: ^9
- `eslint-config-next`: 16.1.6

### External (CDN)
- Font Awesome 6.5.1
- Iconify 3.1.0
- Google Fonts (Inter, JetBrains Mono)

---

## Design System

### Typography
- **Headings**: Inter (sans-serif)
- **Code/Mono**: JetBrains Mono

### Spacing
- Section padding: `py-24 px-6 lg:px-8`
- Container: `max-w-7xl mx-auto`

### Breakpoints (Tailwind)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

### Border Radius
- Small: `rounded-lg` (8px)
- Medium: `rounded-xl` (12px)
- Large: `rounded-2xl` (16px)
- Extra Large: `rounded-3xl` (24px)

### Shadows
- Card: `shadow-lg`
- Hover: `shadow-xl`
- Float: `shadow-2xl`

---

## Animation Timing

### AOS (Animate On Scroll)
- Duration: 1000ms
- Once: true (animate only once)
- Offset: 100px

### Delays
- Stagger effect: 50-100ms increments
- Skill bars: 1.5s transition

### Hover Transitions
- Default: 300ms ease
- Transform: 300ms ease
- Colors: 300ms ease

---

## Responsive Design

### Mobile (<768px)
- Single column layouts
- Hamburger menu
- Stacked cards
- Hidden elements (profile card)

### Tablet (768px-1024px)
- 2-column grids
- Visible navigation
- Adjusted spacing

### Desktop (>1024px)
- 3-4 column grids
- Full navigation
- Profile card visible
- Maximum spacing

---

## Performance Optimizations

1. **Static Generation**: All pages pre-rendered
2. **Font Optimization**: Next.js font optimization
3. **Image Optimization**: Ready for next/image
4. **Code Splitting**: Component-based architecture
5. **CSS Purging**: Tailwind CSS purges unused styles
6. **Lazy Loading**: AOS animations on scroll

---

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Sufficient color contrast
- Responsive text sizing

---

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancements

Potential additions:
1. Blog section
2. Dark mode toggle
3. Project detail pages
4. Contact form with backend
5. Testimonials section
6. Resume download
7. Language switcher
8. Analytics integration
