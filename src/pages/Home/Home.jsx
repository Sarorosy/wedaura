import react from 'react';
import Header from '../../components/Header';
import Hero from './Hero';
import SmallAbout from './SmallAbout';
import ShowCase from './ShowCase';
import OurProcess from './OurProcess';
import Faq from './Faq';
import Numbers from './Numbers';
import FooterForm from './FooterForm';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <SmallAbout />
            <ShowCase />
            <OurProcess />
            <Faq />
            <Numbers />
            <FooterForm />
            <Footer />
        </>
    );
}