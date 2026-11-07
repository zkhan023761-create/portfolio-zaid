import './globals.css';

export const metadata = {
  title: 'Zaid Khan | Creative Developer & AI/ML Specialist',
  description: 'Zaid Khan - Full-Stack Developer, AI & Data Science Specialist, and UI/UX Designer',
  keywords: 'Web Developer, UI/UX Designer, Portfolio, Zaid Khan, Fullstack, AI, Machine Learning, PM2, DevOps',
  icons: {
    icon: [
      { url: '/logo.png?v=3', type: 'image/png' },
      { url: '/favicon.ico?v=3' },
      { url: '/favicon-32x32.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=3', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png?v=3',
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="icon" type="image/png" href="/logo.png?v=3" />
        <link rel="shortcut icon" href="/logo.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />

        {/* Font Awesome Icons & hls.js for streaming video */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js" async></script>
      </head>
      <body className="bg-bg text-text-primary font-body antialiased selection:bg-[#4E85BF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
