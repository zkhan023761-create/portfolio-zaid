import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Zaid Khan | Web Developer & UI/UX Designer',
  description: 'Zaid Khan - Web Developer & UI/UX Designer specializing in modern web applications and user-centered design solutions',
  keywords: 'Web Developer, UI/UX Designer, Portfolio, Zaid Khan, Frontend Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans text-neutral-800`}>
        {children}
      </body>
    </html>
  );
}
