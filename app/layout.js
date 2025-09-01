import { IBM_Plex_Sans } from 'next/font/google';
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans', 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>

      <body>
        {children}
      </body>

    </html>
  );
}