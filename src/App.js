import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaings from 'components/Campaigns';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Categories />
      <Campaings />
      <div className="container mx-auto max-w-7xl">
        <Favorites />
        <MobileApp />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
