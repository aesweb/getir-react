import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaings from 'components/Campaigns';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import { useWindowWidth } from '@react-hook/window-size';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <div>
      <Header />
      {windowWidth <= 768 && <Campaings />}
      <HeroSection />
      <Categories />
      {windowWidth > 768 && <Campaings />}
      <div className="container mx-auto max-w-7xl grid gap-y-6 pt-8">
        <Favorites />
        <MobileApp />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
