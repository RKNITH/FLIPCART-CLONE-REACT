import React, { useEffect, useState } from 'react';
import { Box, Alert, SkeletonCircle, SkeletonText, AlertIcon, AlertTitle, AlertDescription, Button, Img, Text, WrapItem, Flex } from '@chakra-ui/react';
import './fashion.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

function Fashion() {
    const [fashion, setFashion] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const[category, setCategory]=useState({});
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
                    slidesToShow: 2,
                    slidesToScroll: 2,

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
            .then(res => setFashion(res))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        getFashion();
        setCategory(fashion[0])

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
        <>
        <Box display={"flex"}  mt="20px" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" p='1' bg='white' >

            <Box w={{base:'0px', md:'26%', lg:"18%"}} h={{base:'0px', md:'300px', lg:"18%"}}  m="auto" textAlign={"center"} className="dealsBox">
                <Text paddingTop={{base:"120px", md:"120px", lg:"70px"}} fontSize={{ base: '10px', md: '20px', lg: '30px' }}> Fashion Top Deals</Text>

                <WrapItem mt="20px"> 
                    <Button  fontSize={{ base: '6px', md: '9px', lg: '12px' }} m={"auto"} colorScheme='messenger'>
                        <NavLink to='./products/fashion'>VIEW ALL </NavLink>
                    </Button>
                </WrapItem>
                <Img  pt="15px" src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/31d46a8fd93eeedd.jpg?q=90" alt="fg" />

            </Box>
            <Box w={{ base: '60%', md: '55%', lg: '70%' }} m="auto" className="OffSlider">
                <Slider {...settings}>
                    {fashion.filter(item=>item.category_name==="fashion").map((item, index) => 
                    <NavLink to={`/products/view/${item.item_id}`} key={Date.now()+item.item_id+Math.random()}>
                    <Box  m="5px" alignItems="center" textAlign={"center"} >
                        <Img maxWidth="190px" h="220px" m="auto" _hover={{ transform: "scale(1.1)", transition: "400ms" }} p="10px" src={item.image} alt="" />
                        <Text fontWeight="500" fontSize={{base:"13px", md:"12px", lg:"14px"}}> {item.description}</Text>
                       <Flex textAlign={"center"} justifyContent={'space-around'} w="50%" m="auto">
                         <Text fontSize={"15px"} fontWeight={"600"} >   ₹ {item.new_price}</Text>
                         <Text  fontSize={"12px"}><del> ₹ {item.old_price}</del></Text>
                       </Flex>
                        <Text fontWeight={"medium"} mt="8px" fontSize={{base:"13px", md:"14px", lg:"15px"}} color={"green"}>Max {item.discount} % Off</Text>
                    </Box>
                    </NavLink>
                    )}

                </Slider>
                </Box>
               
                <Box  display={{base:'none' , md:'block' , lg:'block'}} w={{base:'0px', md:'30%', lg:"20%"}} >

                    <Img h={{base:'0px', md:'350px', lg:"350px"}} src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/74eaeafbf1a19432.jpeg?q=70" />
                </Box>
                 {/* mobile start  */}
                <Box display={{ base: 'block', md: 'none', lg: 'none' }} bg="#FFC3E6" p="10px" backgroundImage={"https://rukminim1.flixcart.com/fk-p-reco/600/150/images/Reco_BDS_ffb8e3.jpg?q=90"}> 
                <Box mb="20px" mt="10px" alignItems={"center"} display="flex" justifyContent={"space-between"}> <Text fontWeight={"500"} fontSize="19px"> Fashion Top Deals</Text> <Button size="sm" colorScheme='messenger'>View All</Button></Box>
                <Box className='itemGrid'display={{ base: 'grid', md: 'none', lg: 'none' }}>
                    
                    {fashion.filter(item=>item.category_name==="fashion").map(item =>
                        <NavLink to={`/products/view/${item.item_id}`} key={Date.now()+item.item_id+Math.random()}>
                                <Box  borderRadius="6px" m="5px" bg="white" alignItems="center" textAlign={"center"}  border="1px solid silver">
                            <Img maxWidth="170px" h="170px" m="auto" _hover={{ transform: "scale(1.1)", transition: "400ms" }} p="10px" src={item.image} alt="" />
                                <Text fontWeight="500" p="5px"> {item.description}</Text>
                            <Flex textAlign={"center"} justifyContent={'space-around'} w="50%" m="auto">
                                <Text fontSize={"15px"} fontWeight={"600"} >   ₹ {item.new_price}</Text>
                                <Text  fontSize={"12px"}><del> ₹ {item.old_price}</del></Text>
                            </Flex>
                            
                                <Text pb="10px" fontWeight={"medium"} color={"green"}>Max {item.discount} % Off</Text>
                            </Box>
                        </NavLink>
                    )}
                    
                </Box>
            </Box>
            
        </Box>
        </>
    );
}

export default Fashion;