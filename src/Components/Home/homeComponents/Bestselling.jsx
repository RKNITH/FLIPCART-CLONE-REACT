import React, { useEffect, useState } from 'react';
import { Box,Alert,SkeletonCircle,SkeletonText,AlertIcon,AlertTitle,AlertDescription, Button, Img, Text, WrapItem, Flex } from '@chakra-ui/react';
import './fashion.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

function Bestselling() {
    const [bestselling, setBestselling] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
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
    // var settings = {
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     prevArrow: <PreviousBtn />,
    //     nextArrow: <NextBtn />
    // }
    var settings = {
        prevArrow: <PreviousBtn />,
         nextArrow: <NextBtn />,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const getFashion = () => {
        setLoading(true)
        fetch("https://flipkart-data.onrender.com/all")
            .then(res => res.json())
            .then(res => setBestselling(res))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        getFashion();
    },[])

    if (loading) {
        return (
            <>
                <Box padding='6' boxShadow='lg' bg='white'>
                    <SkeletonCircle size='100' />
                    <SkeletonText mt='4' noOfLines={8} spacing='4' />
                </Box>
            </>
        )
    }
    if (error) {
        return (
            <><Alert status='error' w="70%" m="auto" textAlign={"center"}>
                <AlertIcon />
                <AlertTitle>Opps!</AlertTitle>
                <AlertDescription>Please Refresh and try again.</AlertDescription>
            </Alert>
            </>
        )
    }
    return (
        <Box display={"flex"} mt="20px" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" p='1' bg='white' >

            <Box width="25%" h="300px" m="auto" textAlign={"center"} className="dealsBox">
                <Text paddingTop={{base:"120px", md:"100px", lg:"70px"}} fontSize={{ base: '10px', md: '20px', lg: '30px' }}> Living Room Decorations </Text>

                <WrapItem mt="20px">
                    <Button fontSize={{ base: '6px', md: '9px', lg: '12px' }} m={"auto"} colorScheme='messenger'>
                    <NavLink to='./products/home'>
                        VIEW ALL
                        </NavLink>
                        </Button>
                </WrapItem>
                <Img   src="https://rukminim1.flixcart.com/reco/278/278/images/Reco_DTO.jpg?q=90" alt="fg" />

            </Box>
            <Box w={{ base: '80%', md: '75%', lg: '84%' }} m="auto" className="OffSlider">
                <Slider {...settings}>
                    {bestselling.filter(item=>item.category_name==="home").map((item, index) =>
                        <NavLink to={`/products/view/${item.item_id}`} key={Date.now()+index+Math.random()}>
                            <Box m="5px" alignItems="center" textAlign={"center"} >
                            <Img maxWidth="190px" h="240px" m="auto" _hover={{ transform: "scale(1.1)", transition: "400ms" }} p="10px" src={item.image} alt="" />
                                <Text p="5px" fontWeight="500" fontSize={{base:"13px", md:"12px", lg:"14px"}}> {item.description}</Text>
                            
                                <Text pb="16px" fontWeight={"medium"} color={"green"} mt="8px" fontSize={{base:"13px", md:"14px", lg:"15px"}}> From  ₹  {item.new_price} </Text>
                            </Box>
                        </NavLink>
                    )}

                </Slider>
            </Box>
              {/* mobile version */}
              <Box  w="100%" display={{ base: 'block', md: 'none', lg: 'none' }} bg="orange" backgroundImage={"https://rukminim1.flixcart.com/fk-p-reco/850/200/images/Reco_BDS_e1c4ff.jpg?q=90"} p="10px"> 
                <Box mb="20px" mt="10px" alignItems={"center"} display="flex" justifyContent={"space-between"}> <Text fontWeight={"500"} fontSize="19px">  Living Room Decorations</Text> <Button size="sm" colorScheme='messenger'>View All</Button></Box>
                <Box className='itemGrid'display={{ base: 'grid', md: 'none', lg: 'none' }} >
                    
                    
                    {bestselling.map((item,index) => 
                    <Box key={Math.random()+index} m="5px" borderRadius="6px" bg="white" alignItems="center" textAlign={"center"}border="1px solid silver">
                        <Img maxWidth="160px" h="190px" m="auto" _hover={{ transform: "scale(1.1)", transition: "400ms" }} p="10px" src={item.image} alt="" />
                        <Text fontWeight="500" p="5px"> {item.description}</Text>
                      
                       
                        <Text pb="10px" fontWeight={"medium"} color={"green"}> From  ₹  {item.new_price} </Text>
                    </Box>)}
                    
                </Box>
            </Box>
            {/* mobile version end */}
        </Box>

    );
}

export default Bestselling;