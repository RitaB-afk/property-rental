import '@/assets/styles/global.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


export const metadata= {
    title: 'PropertyRental | Find the best property for rent',
    description: 'Find the best property for rent',
    keywords:'property, rental, rent, house, apartment, room, flat, real estate, property rental, property rent, property house, property apartment, property room, property flat, property real estate',
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body><NavBar></NavBar><main>{children}</main> <Footer/></body>
      
    </html>
  );
};

export default MainLayout;
