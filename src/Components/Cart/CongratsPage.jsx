

import {
    Box,
    VStack,
    Divider,
    Image,
    Text,
    Flex,
    Button,
    Grid,
    GridItem,
  } from '@chakra-ui/react'
  import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import Navbar from '../Navbar/navbar';

  const ConsratsPage = () => {
    var amount=localStorage.getItem("Total");

    const { globalAddress } = useContext(CartContext);
    let tracking  = Math.ceil((Math.random()*117)+1578154424840);
    useEffect(()=>{
      window.scrollTo(0, 0)
    },[])
    return (
      <>
        <VStack
          spacing={4}
          align="stretch"
          alignItems="center"
          bg="#f1f3f6"
          height="37rem"
          pt="1rem"
        >
          <Box
            boxShadow="base"
            p="1rem"
            width="92%"
            // border="2px solid black"
            h="160px"
            bg="white"
          >
            <Flex gap="20px">
              {' '}
              <Image
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/orderPlacedV2_cb4f64.png"
                alt=""
                height="5rem"
                width="6%"
                mt="15px"
              />
              <Box mt="20px">
                <Text  color="#2874f0" fontSize="28px">
                  Order placed for ₹{amount}!
                </Text>
                <Text  fontWeight="400">
                  Your item will be delivered by Mon, Oct 24th' 22
                </Text>
              </Box>
              <Divider
                marginLeft="24rem"
                mt="-15px"
                height="10rem"
                orientation="vertical"
              />
              <Box>
                <Text
                  
                  color="black"
                  fontSize="20px"
                  fontWeight="450"
                >
                  Why call ? just click!
                </Text>
                <Text >
                  Easily tracks all your flipkart orders
                </Text>
                <NavLink to='/orderpage'> 
                <Button
                  
                  mt="12px"
                  borderRadius="4px"
                  color="white"
                  bg="#2874f0"
                >
                  Go to my orders
                </Button></NavLink>
              </Box>
              <Image
                height="3.5rem"
                width="6%"
                mt="35px"
                src="https://img1a.flixcart.com/www/helpcenter/assets/images/1529927950114/group-2%403x.png"
              />
            </Flex>
          </Box>
          <Box
            boxShadow="base"
            width="92%"
            // border="2px solid blue"
            h="230px"
            bg="white"
          >
            <Flex>
              <Grid
                
                fontWeight="400"
                color="black"
                gap="7px"
                p="20px"
              >
                <GridItem>Delivery Address</GridItem>
  
                <GridItem fontSize="15px"> <Text >{globalAddress.Name}   </Text></GridItem>
  
                <Box mt="7px" width="300px">
                  <GridItem>
                  <Text  >  {globalAddress.Address} </Text>
                  </GridItem>
                </Box>
                <GridItem mt="7px">Phone number {globalAddress.Number}</GridItem>
                <GridItem mt="10px">This order is tracked by {tracking}</GridItem>
              </Grid>
              <Image
                height="15rem"
                src="https://change.om/storage/2018/12/ab98e3d48e409510b1a671b0b50537dc-e1545629550955.png"
              ></Image>
              <Divider
                marginLeft="6.5rem"
                mt="-1.5px"
                marginRight="0.3rem"
                height="14.4rem"
                orientation="vertical"
              />
              <Box>
                <Image
                  marginLeft="3.8rem"
                  height="7rem"
                  src="data:image/png;base64,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"
                ></Image>
                <Text
                  ml="2rem"
                  fontWeight="500"
                  fontSize="20px"
                  color="green"
                  textAlign="center"
                  
                >
                  Your Payment was Succesfull
                </Text>
                <Text  ml="3.5rem" width="240px">
                  Thank you for shopping with us
                </Text>
                <Flex>
                  <Text  mr="9px" ml="6.5rem">
                    Have a nice day{' '}
                  </Text>
  
                  <Image
                    height="30px"
                    src="https://th.bing.com/th/id/OIP.pDskn-2NPEJnsCbfO6o8aAHaF7?w=246&h=197&c=7&r=0&o=5&pid=1.7"
                  ></Image>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box width="92%" h="140px" bg="white">
            <Flex mt="4px" justifyContent="center" alignItems="center" gap="8px">
              {' '}
              <Text color="#Fdc800"  fontSize="4xl">
                THANK
              </Text>
              <Text color="#2874ee"  fontSize="4xl">
                YOU!
              </Text>
              <Text color="#Fdc800"  fontSize="4xl">
                VISTIT
              </Text>
              <Text
                color="#2874ee"
                
                marginRight="3px"
                fontSize="4xl"
              >
                AGAIN
              </Text>
              <Image
                height="50px"
                src="https://th.bing.com/th/id/OIP.GppY9YoqscvWZblIttOi5gHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7"
              ></Image>
            </Flex>
            <NavLink to='/'> 
            <Button
              border="2px solid #F1e949"
              fontSize="20px"
              p="24px"
              _hover={{ bg: '#2874ee' }}
              color="#F1e949"
              bg="#2874ee"
              mt="1rem"
              ml="30.5rem"
              
            >
              Continue Shopping
            </Button></NavLink>
          </Box>
        </VStack>
      </>
    )
  }
  
export default ConsratsPage;