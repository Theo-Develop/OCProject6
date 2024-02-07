import React from 'react';
import Header from '../../components/Layout/Header';
import HomeBanner from '../../components/Home/HomeBanner';
import FicheLogement from '../../data/logements.json';
import Gallery from '../../components/Home/Gallery';
import Footer from '../../components/Layout/Footer';

function Home() {
    return (
        <section>
            <div className='home'>
                <Header />
                <HomeBanner />
                <Gallery Logements={FicheLogement} />
            </div>
            <Footer />
        </section>
    )
}

export default Home;