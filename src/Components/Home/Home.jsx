import React from 'react'
import Appliances from './homeComponents/Appliances'
import Bestselling from './homeComponents/Bestselling'
import Electronics from './homeComponents/Electronics'
import Fashion from './homeComponents/Fashion'
import FinalBanner from './homeComponents/FinalBanner'
import Footer from '../Footer/Footer'
import Groceries from './homeComponents/Groceries'
import Mobile from './homeComponents/Mobile'
import TopOffers from './homeComponents/TopOffers'
import OfferBanner from './homeComponents/OfferBanner'
import CategoryBar from './homeComponents/CategoryBar'
import BannerOffer from './homeComponents/BannerOffer'
import BannerOffer2 from './homeComponents/BannerOffer2'
import BeforeFooter from './homeComponents/BeforeFooter'
import { Box } from '@chakra-ui/react'
import CategoryBarForMobile from './homeComponents/CategoryBarForMobile'

const Home = () => {
    
    return (
        <Box>
            <CategoryBar />
            <FinalBanner />
            <CategoryBarForMobile />
            <OfferBanner />
            <BannerOffer />
            <Fashion />
            <Bestselling />
            <Appliances />
            <BannerOffer2 />
            <TopOffers />
            <Electronics />
            <Groceries />
            <Mobile />
            <BeforeFooter />
            {/* <Footer /> */}
        </Box>
    )
}

export default Home