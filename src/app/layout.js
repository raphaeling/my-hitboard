import { Inter } from 'next/font/google';
import { FaGithub } from 'react-icons/fa';
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
        <footer className='h-full flex justify-center text-slate-300 mb-4'>
          Made by&nbsp;
          <a href='https://raphaeling.com' target='_blank' className='font-semibold hover:text-slate-400'>@raphaeling</a>
          &nbsp;•&nbsp;
          <a href='https://github.com/raphaeling/my-hitboard' target='_blank' className='hover:text-slate-400 text-2xl'>
            <FaGithub />
          </a>
        </footer>
      </body>
    </html>
  );
}
