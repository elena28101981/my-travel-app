import { Nunito } from 'next/font/google';

import ClientOnly from './components/ClientOnly';

import './globals.css';
import RegisterModal from './components/modals/RegisterModal';

import Navbar from './components/navbar/Navbar';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';
import Search from './components/navbar/Search';
import SearchModal from './components/modals/SearchModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-20">{children}</div>
      </body>
    </html>
  );
}
