import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import Menu from '../components/Menu';
import Head from 'next/head';

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const Home = () => {
  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta
          name="description"
          content="This is a short portfolio and link to the my latest work"
        />
      </Head>
      <Header />
      <Menu />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
