import React from 'react';
import imgBannerHome from '../../images/img_home_banner.webp';
import Banner from '../Layout/Banner';

function HomeBanner() {
    return (
        <div className="img_banner_home">
            <Banner
                title='Chez vous, partout et ailleurs'
                src={imgBannerHome}
            />
        </div>
    )
}
export default HomeBanner;