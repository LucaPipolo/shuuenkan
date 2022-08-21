import Main from '../components/4-layouts/Main';
import Hero2 from '../components/3-organism/Hero2';
import Attrezzatura from '../components/3-organism/Attrezzatura';

const Kendo = () => {
  return (
    <Main>
      <section id='hero'>
        <Hero2 />
      </section>
      <section id='hero'>
        <Attrezzatura />
      </section>
    </Main>
  );
};

export default Kendo;
