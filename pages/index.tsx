import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import Menu from '../components/Menu';
export const getStaticProps = async () => {
    return {
      props: {}, 
    };
  };
const Home = () => {
    return (
        <div>
            <Header />
            <Menu />
            <MainContent />
            <Footer />
        </div>
    );
};

export default Home;
