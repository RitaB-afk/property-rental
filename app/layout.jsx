import '@/assets/styles/global.css';


export const metadata= {
    title: 'PropertyRental | Find the best property for rent',
    description: 'Find the best property for rent',
    keywords:'property, rental, rent, house, apartment, room, flat, real estate, property rental, property rent, property house, property apartment, property room, property flat, property real estate',
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body> </body>
      <div>{children}</div>
    </html>
  );
};

export default MainLayout;
