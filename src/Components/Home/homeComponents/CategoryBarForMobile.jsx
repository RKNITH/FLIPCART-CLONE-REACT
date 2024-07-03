import React from 'react';
import { Box, Grid, GridItem, Img, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
function CategoryBarForMobile() {
    var data = [
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f0b3c58d99158fc3.png?q=100",
            title: "Top Offers"
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100",
            title: "Mobiles & Tablets"
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100",
            title: "Electronics"
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d7278abbff8ba2a.png?q=100",
            title: " TVs & Appliances"
        },
        {

            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a28598a782b6b4cf.png?q=100",
            title: "Fashion"
        }, {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100",
            title: "Beauty"
        }
        ,
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47874cd4acbfaf20.png?q=100",
            title: "Home & Furniture"
        }
        ,
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a1140bead6bfd787.png?q=100",
            title: "FK Originals"
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/705e339964226df2.png?q=100",
            title: "Flights & Hotels"
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5b09c4d0a60ecad7.png?q=100",
            title: "Grocery"
        }
    ]
    return (
        <div>
             <Box boxShadow="2xl" display={{base:"block", md:"none", lg:"none"}} bg="#6C2F9D" color={"white"}>
            <Grid pb="20px" textAlign={"center"} templateColumns='repeat(5, 1fr)' m="auto"  >
                {
                    data.map((ele, index) => (
                        <NavLink key={Date.now()+index+Math.random()} to='/products'>
                        <GridItem _hover={{color:"#2874F0"}} fontSize={{base:"10px", md:"13px", lg:"14px"}} >
                            <Box > <Img src={ele.image} alt=""  height={{base:"60px", md:"60px", lg:"70px"}} m="auto" />
                             <Text> {ele.title}</Text>
                            </Box>
                           
                        </GridItem>
                        </NavLink>

                    ))
                }
            </Grid>
            <Img src="https://rukminim1.flixcart.com/fk-p-flap/450/100/image/eceee0573a65ca9e.jpeg?q=90"/>
        </Box>

        </div>
    );
}

export default CategoryBarForMobile;