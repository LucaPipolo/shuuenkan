import Head from 'next/head';
import Footer from '../3-organism/Footer';
import Header from '../3-organism/Header';

const Main = ({ children, className }) => {
  return (
    <>
      <Head>
        <title>Shuuenkan</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Aboreto&family=Barlow+Condensed:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        ></link>

        <link href='favicon.ico' rel='icon' />
      </Head>
      <main>
        <Header />
        <div className={` ${className}`}>{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Main;
