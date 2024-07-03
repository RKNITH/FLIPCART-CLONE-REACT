import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bannerStyle.css';
import { GrFormNext, GrPrevious, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { Img, Box } from '@chakra-ui/react';
function FinalBanner() {

    const PreviousBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <h1 style={{ color: "black", fontSize: "45px" }}> <GrFormPrevious /> </h1>
            </div>
        );
    };
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <Box className={className} onClick={onClick} display="none">
                <h1 style={{ fontWeight: "bolder", fontSize: "45px" }}> <GrFormNext />  </h1>
            </Box>

        );
    };

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <PreviousBtn />,
        autoplaySpeed: 3000,
        nextArrow: <NextBtn />,
        dots: true
    };
    return (
        <Box>


            <Box display={{ base: 'none', md: 'none', lg: 'block' }} className="fiximg" style={{ marginTop: "7px" }} height={{ base: '130px', md: '220px', lg: '300px' }} width={{ base: '100%', md: '100%', lg: '100%' }}>
                <Slider  {...settings}
                >
                    <div>
                        <Img height={{ base: '130px', md: '220px', lg: '280px' }} src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/97f678769b69feef.jpg?q=50" alt="" />
                    </div>
                    <div>
                        <Img height={{ base: '130px', md: '220px', lg: '280px' }} src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c1fe2517e0386eb2.jpg?q=50" alt="" />
                    </div>
                    <div>
                        <Img height={{ base: '130px', md: '220px', lg: '280px' }} src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/6bd47b2bdcdc710c.jpg?q280" alt="" />
                    </div>
                    <div>
                        <Img height={{ base: '130px', md: '220px', lg: '280px' }} src="https://github.com/jigar-sable/flipkart-mern/blob/master/frontend/src/assets/images/Banners/kitchen-sale.jpg?raw=true" alt="" />
                    </div>

                </Slider>
            </Box>
            {/* mobile start  */}
            <Box className="fiximg" style={{ marginTop: "20px" }} h="150px" display={{ base: 'block', md: 'none', lg: 'none' }} mb="50px">
                <Slider  {...settings}
                >
                    <div>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/1300/600/image/3afe1b1c44f75525.jpg?q=90" alt="" />
                    </div>
                    <div>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/1300/600/image/55598fe531b8f000.jpeg?q=20" alt="" />
                    </div>
                    <div>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/1300/600/image/dcd7a29854f46fb9.jpg?q=90" alt="" />
                    </div>
                    <div>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/1300/600/image/3e981015dd42dd8a.jpg?q=90" alt="" />
                    </div>
                    <div>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/800/350/image/992d9b2cd728163a.jpeg?q=20" />
                    </div>

                </Slider>
            </Box>
            {/* mobile end */}
            {/* tab mode start  */}
            <Box className="fiximg" style={{ marginTop: "20px" }} h="150px" display={{ base: 'none', md: 'block', lg: 'none' }} mb="10px">
                <Slider  {...settings}
                >
                    <div>
                        <Img h="160px" src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c1fe2517e0386eb2.jpg?q=50" alt="" />
                    </div>
                    <div>
                        <Img h="160px" src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/97f678769b69feef.jpg?q=50" alt="" />
                    </div>
                    <div>
                        <Img h="160px" src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/987721abe0687218.jpg?q=50" alt="" />
                    </div>
                    {/* <div>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/1300/600/image/3e981015dd42dd8a.jpg?q=50" alt="" />
                    </div> */}

                </Slider>
            </Box>
            {/* tab mode end */}

        </Box>
    );
}

export default FinalBanner;