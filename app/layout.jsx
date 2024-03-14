import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property rental | Find Your Next Home',
  description:
    'Find your dream home with us. We have a wide range of properties to rent.',
  keywords: 'rent, property, home, house, apartment, flat, real estate, rental',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
