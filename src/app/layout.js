import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'myhitboard',
  description: 'Track your weekly hits',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <footer className=' h-full flex justify-center text-slate-300 mb-4'>
          Made by&nbsp;
          <a href='https://raphaeling.com' className='font-semibold hover:text-slate-400'>@raphaeling</a>
        </footer>
      </body>
    </html>
  );
}
