import React, { useEffect, useState } from 'react';
import { Box,Alert,SkeletonCircle,SkeletonText,AlertIcon,AlertTitle,AlertDescription, Button, Img, Text, WrapItem, Flex } from '@chakra-ui/react';
import './fashion.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

function Mobile() {
    const [mobile, setMobile] = useState([]);
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
            .then(res => setMobile(res))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        getFashion();
    }, [])

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

            <Box w="25%" m="auto" textAlign={"center"} className="dealsBox">
                <Text paddingTop={{base:"120px", md:"120px", lg:"70px"}} fontSize={{ base: '10px', md: '20px', lg: '30px' }}> Top Mobile Deals</Text>

                <WrapItem pt="20px">
                    <Button fontSize={{ base: '6px', md: '9px', lg: '12px' }} m={"auto"} colorScheme='messenger'>
                    <NavLink to='./products/mobiles'>
                        VIEW ALL
                        </NavLink>
                        </Button>
                </WrapItem>
                <Img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQJ6xBHIA9e3Pf3QMok5yTZn3XF2Z3KcZ3w&usqp=CAU" alt="fg" />

            </Box>
            <Box w={{ base: '80%', md: '74%', lg: '84%' }} m="auto" className="OffSlider" >
                <Slider {...settings}>
                    {mobile.filter(item=>item.category_name==="mobiles").map(item =>
                        <NavLink to={`/products/view/${item.item_id}`} key={Date.now()+item.item_id+Math.random()}>
                        <Box m="5px" alignItems="center" textAlign={"center"}>
                        <Img maxWidth="190px" h="220px" m="auto" _hover={{ transform: "scale(1.1)", transition: "400ms" }} p="10px" src={item.image} alt="" />
                            <Text fontWeight="500"> {item.description}</Text>
                        <Flex textAlign={"center"} justifyContent={'space-around'} w="50%" m="auto">
                            <Text fontSize={"15px"} fontWeight={"600"} >   ₹ {item.new_price}</Text>
                            <Text  fontSize={"12px"}><del> ₹ {item.old_price}</del></Text>
                        </Flex>
                            <Text fontWeight={"medium"} color={"green"}>Upto {item.discount} % Off</Text>
                        </Box>
                        </NavLink>
                    )}

                </Slider>
            </Box>
            <Box display={{ base: 'block', md: 'none', lg: 'none' }} bg="#FFC3E6" p="10px" backgroundImage={"https://rukminim1.flixcart.com/fk-p-reco/600/150/images/Reco_BDS_ffb8e3.jpg?q=90"}> 
                <Box mb="20px" mt="10px" alignItems={"center"} display="flex" justifyContent={"space-between"}> <Text fontSize={"19px"} >  Top Mobile Deals</Text> <Button size="sm" colorScheme='messenger'>View All</Button></Box>
                <Box className='itemGrid'display={{ base: 'grid', md: 'none', lg: 'none' }}>
                    
                    {mobile.filter(item=>item.category_name==="mobiles").map(item => 
                        <NavLink to={`/products/view/${item.item_id}`} key={Date.now()+item.item_id+Math.random()}>
                            <Box borderRadius="6px" m="5px" bg="white" alignItems="center" textAlign={"center"}  border="1px solid silver">
                            <Img maxWidth="150px" h="150px" m="auto" _hover={{ transform: "scale(1.1)", transition: "400ms" }} p="10px" src={item.image} alt="" />
                                <Text fontWeight="500" p="5px" fontSize={{base:"13px", md:"12px", lg:"14px"}}> {item.description}</Text>
                            <Flex textAlign={"center"} justifyContent={'space-around'} w="50%" m="auto">
                                <Text fontSize={"15px"} fontWeight={"600"} >   ₹ {item.new_price}</Text>
                                <Text  fontSize={"12px"}><del> ₹ {item.old_price}</del></Text>
                            </Flex>
                            
                                <Text fontSize={{base:"13px", md:"14px", lg:"15px"}} fontWeight={"medium"} color={"green"} pb="10px">Upto {item.discount} % Off</Text>
                            </Box>
                        </NavLink>
                    )}
                    
                </Box>
            </Box>
        </Box>

    );
}

export default Mobile;