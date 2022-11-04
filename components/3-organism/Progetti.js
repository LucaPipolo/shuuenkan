import Link from 'next/link';
import { motion } from 'framer-motion';

import Card from '../2-molecules/Card';

import naginataImage from '../../public/images/senseiCarlini.jpeg';
import fundImage from '../../public/images/fundLogo.png';
import tenuguiImage from '../../public/images/tengui.jpeg';

const Content = () => {
  const items = [
    {
      key: 1,
      src: fundImage,
      alt: 'GoFundMe Logo',
      title: 'Fundrising',
      text: (
        <p className="text-2xl sm:text-3xl md:text-4xl">
          Partecipa al nostro progetto di fundrising con l&apos;obbiettivo di
          sostituire la pavimentazione del dojo in parquet, modificare le porte
          e gli infissi deteriorati, rinnovare gli spogliatoi,facilitare
          l&apos;aquisto di attrezzature per chi non possa permettersene delle
          proprie e acquistare dei bogu per i bambini
          <br />
        </p>
      ),
      btnProps: { btnText: 'Dona ora!', href: 'https://gofund.me/12c1d74f' },
      id: 'fundrising',
    },
    {
      key: 2,
      src: naginataImage,
      alt: 'Sensei Carlini Image',
      title: 'Project Naginata',
      text: (
        <p className="text-2xl sm:text-3xl md:text-4xl">
          A partire da quest&apos;anno lo Shuuenkandojo propone un nuovo
          progetto di disciplina marziale, il <b>Naginata do</b>, sotto la
          sapiente guida di sensei Stefano Carlini (detto Nonno Naginata),{' '}
          <b>3 Dan di Naginata </b> e <b>Nazionale Italiano</b> per la sezione
          di Naginata della CIK.
          <br />
        </p>
      ),
      btnProps: {
        btnText: 'Scopri il Naginata',
        href: '/naginata',
      },
      tag: Link,
      id: 'naginata',
    },
    {
      key: 3,
      src: tenuguiImage,
      alt: 'Original Tenugui Artwork',
      title: 'Tenugui',
      text: (
        <p className="text-2xl sm:text-3xl md:text-4xl">
          Vendita Tenugui e Altri accessori per il Kendo!
          <br />
        </p>
      ),
      btnProps: { btnText: 'Acquista Ora', href: '/shop' },
      imgSize: 'w-full',
      extraClasses: ' ',
      id: 'tenugui',
    },
  ];
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.9 } },
    exit: { opacity: 0 },
  };

  return (
    <>
      <div className="bg-shuuenkan-blue pt-28 lg:pt-36">
        <div className="md:py-15 container mx-auto bg-shuuenkan-blue py-8 xsm:py-20 sm:py-24 hmd:py-24 lg:py-36 hlg:py-32 xl:py-36">
          <div className="float-center w-full">
            <motion.p
              className=" px-5 py-14 text-center text-6xl text-pearl sm:text-7xl md:p-10 md:text-8xl"
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: 'linear' }}>
              Lo <b className="text-white">Shuuenkandojo</b> presenta il{' '}
              <b className="text-white">primo e unico</b> progetto di kendo
              <b className="text-white"> gratuito </b> in Italia!
            </motion.p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap rounded-md py-40">
        <div className="container mx-auto pb-20 ">
          <h1 className="text-center text-4xl text-shuuenkan-blue md:text-5xl">
            La diffusione gratuita del kendo è sostenuta dai nostri molteplici
            progetti di raccolta fondi reinvestiti al 100%
          </h1>
        </div>
        {items.map((item) => (
          <Card
            key={item.key}
            src={item.src}
            title={item.title}
            text={item.text}
            btn={true}
            btnProps={item.btnProps}
            alt={item.alt}
            imgSize={item.imgSize}
            extraClasses={item.extraClasses}
            tag={item.tag}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Content;
