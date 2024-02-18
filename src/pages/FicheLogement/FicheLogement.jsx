import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Carousel from '../../components/FicheLogement/Carousel';
import FicheLogement from '../../data/logements.json';
import Presentation from '../../components/FicheLogement/Presentation';
import Collapse from '../../components/Layout/Collapse';

function
    Logements() {
    const { id } = useParams();
    const
        logements = FicheLogement.find((item) => item.id === id)

    return !logements ? (<Navigate to="/error" />) : (
        <section>
            <div className='logements_page'>
                <Header />
                <div className='logements_container'>
                    <Carousel
                        pictures={logements.pictures}
                        title={logements.title}
                    />
                    <Presentation
                        title={logements.title}
                        location={logements.location}
                        tags={logements.tags}
                        host={logements.host}
                        rating={logements.rating}
                    />
                    <div className='logements_collapses collapses'>
                        <Collapse
                            title="Description"
                            content={<p>{logements.description}</p>}
                        />
                        <Collapse
                            title="Équipements"
                            content={
                                <ul>
                                    {logements.equipments.map((equip, index) => {
                                        return <li key={`${index}${equip}`}>{equip}</li>;
                                    })}
                                </ul>
                            }
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Logements;