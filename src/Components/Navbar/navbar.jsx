import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";
import "./navbar.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { InputRightElement } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'
import vikas from './Icon/icon1.svg';
import url1 from "./Icon/coin1.webp";
import coin2 from "./Icon/coin2.webp";
import icon3 from "./Icon/icon3.webp";
import icon4 from "./Icon/icon4.webp";
import icon5 from "./Icon/icon5.webp";
import icon6 from "./Icon/icon6.webp";
import icon7 from "./Icon/icon7.webp";
import icon8 from "./Icon/icon8.webp";
import icon9 from "./Icon/icon9.webp";
import icon10 from "./Icon/icon10.webp";
import icon11 from "./Icon/icon11.webp";
import icon12 from "./Icon/icon12.webp";
import icon13 from "./Icon/icon13.webp";
import icon14 from "./Icon/icon14.webp";
import icon15 from "./Icon/icon15.png";

import { Flex, Box, Center, Image, Spacer, InputGroup, Input, InputLeftElement, Icon } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import { BsFillFilePlusFill, BsFillCreditCard2BackFill, BsBellFill, BsQuestionSquareFill, BsMic } from "react-icons/bs";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { RiInboxUnarchiveFill, RiCoupon3Fill } from "react-icons/ri"
import { AiFillHeart } from "react-icons/ai"
import { BiTrendingUp } from "react-icons/bi"
import { HiDownload } from "react-icons/hi"
import { useDisclosure } from '@chakra-ui/react';

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { Link, Navigate, NavLink } from "react-router-dom";
import Register from "../Login/Register";
import { Signup } from "../Login/SignUp";
import { Authcontext } from "../Context/Authcontext";
import { IoMdPower } from "react-icons/io";
import { CartContext } from "../Context/CartContext";


const Navbar = () => {
  const {cartData} = useContext(CartContext);
  console.log(cartData, " cartData ");

  const {correct, setCorrect} = useContext(Authcontext)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const ref = useRef(null)

  const [hiddenDiv, setHiddenDiv] = useState(false)

  const [isLargerThan670] = useMediaQuery('(min-width: 730px)')
  const url = `https://flipkart-data.onrender.com/all`
  // const url = `https://flipkart.dvishal485.workers.dev/search/`

  const [data, setData] = useState([])
  const [searchVal, setSearchVal] = useState("");
  useEffect(()=>{
    fetchData(searchVal)
  },[searchVal])
  
  const fetchData=(searchVal)=>{
    fetch(`${url}?_limit=5&q=${searchVal}`)
    .then((res)=>res.json())
    .then((res)=>{
      // setData(res)
      setData(res)
      console.log(res, " search input data after fetched ");
    })
  }

  // const handleinput = (e)=>{
  //   const val = e.target.value
  //   console.log(val, " input box ");
  //   setSearchVal(val)
  // }

  const debounce = (fn, timeout)=>{
    let timerid;
    return ()=>{
      clearTimeout(timerid)
      timerid = setTimeout(() => {
        fn()
      }, timeout);
    }
  }
  const handleinput = debounce(()=>{
    const val = ref.current.value
    console.log(" event val check in debounce ", val);
    setHiddenDiv(true)
    setSearchVal(val)
  }, 500)

  window.addEventListener("click",(e)=>{
    console.log(e.target.id, " check window ");
    if(e.target.id!=="inputBox"){
      setHiddenDiv(false)
    }
  })

  const handleSetQuaryUrl = (query_url)=>{
    // console.log("handleSetQuaryUrl", query_url);
    // console.log("check after slice ",query_url.slice(48));
    console.log(query_url);
  }

  const handleLogout = ()=>{
    setCorrect(false)
    console.log(" handleLogout ", correct);
  }
  // console.log(" handleLogout ", correct);

  // const { toggleColorMode } = useColorMode();

  if (isLargerThan670) {
    return (
      <Box mt='-1px' ml='-1px'>
        <Box mb='3.4rem' border={'1px solid blue'}>
        <Flex bg="#2874f0" h="56px" align="center"  position='fixed' w='100%' zIndex={'100'}>
          <Spacer />
          <Box>
            <NavLink to='/'>
            <Box mr="10px" cursor={'pointer'} >
              <Image
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="flipkart"
                h="20px"
                marginBottom="-5px"
              />
              <Flex alignItems='center' >
                <Text className="explore" color="white">
                  Explore
                </Text>
                <Text className="explore1" color="yellow.400">
                  Plus
                </Text>
                <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" w='10px' h='10px' />
              </Flex>
            </Box>
            </NavLink>
          </Box>

          {/* =======search======== */}

          <Box w="34%" pos={'relative'}>
            <InputGroup>
              <Input
                placeholder="Search for products,brands and more"
                bg="white"
                w="100%"
                borderRadius="2px"
                h="36px"
                fontSize="14px"
                ref={ref}
                // value={}
                onInput={handleinput}
                id='inputBox'
              />
              {/* <Box w={'100%'} pos='relative' zIndex='10'>
                <ReactSearchAutocomplete
                    styling={{
                      borderRadius: "2px",
                      height:"38px",
                      overflowY:'scroll'
                      // border: '1px solid red'
                    }}
                    showIcon ={false}
                    showClear = {false}
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onChange ={handleinput}
                    onFocus={handleOnFocus}
                    placeholder="Search for products,brands and more"
                    formatResult={formatResult}
                    fuseOptions={{
                      keys: ["id", "description"] 
                    }}
                    maxResults = "5"
                    // resultStringKeyName={"sy"+Date.now()+Math.random()}
                  />
              </Box> */}
              <InputRightElement
              pos='absolute' zIndex='10'
                children={
                  <IoSearchSharp
                    color="#2874f0"
                    cursor="pointer"
                    fontSize="23px"
                    fontWeight="bold"
                  />
                }
              />
            </InputGroup>
            <Box
              display={hiddenDiv?"":"none"}
              pos={'absolute'} zIndex={'10'}
              maxH='320px' overflowY={'auto'}
              borderRadius='0 0 2px 2px'
              borderTop={'1px solid #e0e0e0'}
              w='100%'
              bg='#fff'
              boxShadow={'2px 3px 5px -1px rgb(0 0 0 / 50%)'}
            >
              {
                data.map((item, index)=>(
                  <Box key={index}>
                    <NavLink to={`/products/view/${item.item_id}`}>
                      <Flex gap={2} p='10px 25px' m='10px 0'
                      align={'center'}
                      cursor='pointer'
                      _hover={{bg:"#F5F8FF"}}
                      // onClick={()=>handleSetQuaryUrl(item.query_url)}
                      >
                        <Box maxH='32px' w='32px'>
                          <Image maxH='30px' maxW='32px' src=
                          {item.image}
                          // {item.thumbnail}
                          />
                        </Box>
                        <Box color={'#212121'}
                        >
                          {item.description}
                          {/* {item.name} */}
                        </Box>
                      </Flex>
                    </NavLink>
                  </Box>
                ))
              }
            </Box>
          </Box>
          {/* ======================================search end======================================= */}
          <Popover trigger="hover" >
            <PopoverTrigger>
              <Box >
                <Register/>
              </Box>
            </PopoverTrigger>
            <PopoverContent
              zIndex={4}
              bg="white"
              color="white"
              w="250px"
              borderRadius="2px"
              mt="5px"
            >
              <PopoverArrow bg="white" />

              <PopoverBody color="black" className='shade' >
                {
                  correct?"":
                  <Flex h="56px" justifyContent="space-between">
                  <Center fontWeight="600" fontSize='14px'>New Customer?</Center>
                  <Center>
                    <Link color="#2874f0" fontSize='14px'>
                    {/* Sign Up */}
                    <Signup/>
                    </Link>
                  </Center>
                </Flex>
                }
                <hr margin="0px" />
                <Flex cursor={'pointer'} h="49px" fontSize='14px' className="pop1">
                  <Center ml='10px'><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'>My Profile</Center>
                </Flex>
                <hr />
                <Flex cursor={'pointer'} className="pop1" h='49px' fontSize='14px'><Center ml='10px'><Image src={vikas} alt="vikas" /></Center> <Center ml='16px'>Flipkart Plus Zone</Center></Flex>
                <hr />
                {/* orderpage */}
                <NavLink to='/orderpage'>
                    <Flex  cursor={'pointer'}  h="49px" fontSize='14px' className="pop1"  > 
                      <Center ml='10px'>
                          <RiInboxUnarchiveFill color="#2874f0" size="18px" />
                      </Center> 
                        <Center ml='16px'>
                          Orders
                        </Center>
                    </Flex>
                </NavLink>
                  <hr />
                <Flex cursor={'pointer'}  h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><AiFillHeart color="#2874f0" size="18px" /></Center> <Center ml='16px'> Wishlist</Center></Flex><hr />
                <Flex cursor={'pointer'}  h="49px" fontSize='14px' className="pop1">  <Center ml='10px'><RiCoupon3Fill color="#2874f0" size="18px" /></Center><Center ml='16px'>Rewards</Center></Flex><hr />
                <Flex cursor={'pointer'}  h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><BsFillCreditCard2BackFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>Gift cards</Center></Flex><hr />
                {
                  correct?
                  <Flex onClick={handleLogout} 
                  cursor={'pointer'} h="49px" fontSize='14px' className="pop1"> 
                <Center ml='10px'>
                  <IoMdPower color="#2874f0" size="18px" />
                </Center> 
                  <Center ml='16px'>
                  Log Out
                  </Center>
              </Flex>:""
                }
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* {=============login end====================} */}
          <Box
            fontSize="16px"
            textAlign="center"
            w="14%"
            color="white"
            fontWeight="600"
            cursor={'pointer'}
          >
            Become a Seller
          </Box>

          {/* ==================================more============= */}
          <Popover trigger="hover" >
            <PopoverTrigger>
              <Box
                fontSize="16px"
                textAlign="center"
                w="7%"
                color="white"
                fontWeight="600"
                cursor={'pointer'}
              >
                <NavLink to='./products'>More</NavLink>
                <ChevronDownIcon
                  _hover={{ transform: "rotate(180deg)" }}
                />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              zIndex={4}
              bg="white"
              color="white"
              w="250px"
              borderRadius="2px"
              mt="5px"
              h='auto'
            >
              <PopoverArrow bg="white" />

              <PopoverBody color="black" className='shade'>
                <Flex h="49px" fontSize='14px' className="pop1"  > <Center ml='10px'><BsBellFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>Notification Prefernces</Center></Flex> <hr />
                <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><BsQuestionSquareFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>24x7 Customer care</Center></Flex> <hr />
                <Flex h="49px" fontSize='14px' className="pop1">  <Center ml='10px'><BiTrendingUp color="#2874f0" size="18px" /></Center><Center ml='16px'>Advertize</Center></Flex><hr />
                <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><HiDownload color="#2874f0" size="18px" /></Center> <Center ml='16px'>Download app</Center></Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* ===============================more end============= */}

          <NavLink to='./cart'>
            <Flex align={'center'} justify='' cursor={'pointer'}>
              <Icon as={FaShoppingCart} w={5} h={5} color="white" ml="2%" mr="-5px" />
                {
                  cartData.length>0?<Flex 
                    ml='-8px' mt='-25px' zIndex={5} bg={'#ff6161'} fontSize='12px' p='6px' 
                    border={'1px solid #fff'}
                    borderRadius={'40%'} w='18px' h='18px' 
                    align={'center'} justify='center' color='#fff'
                    >{cartData.length}</Flex>:""
                }
              <Box
                fontSize="17px"
                ml="10px"
                textAlign="center"
                color="white"
                fontWeight="600"
              >
                Cart
              </Box>
            </Flex>
          </NavLink>

          {/* <Button onClick={toggleColorMode}>Toggle Color Mode</Button> */}

          <Spacer />
        </Flex>
      </Box>
      </Box>
    );
  }
  
  else {
    return (
    <Box mt='-1px' ml='-1px'>
      <Box mb='6.4rem' border={'1px solid blue'}>
      <Box position='fixed' w='100%' zIndex={'100'}>
      <Flex bg="#2874f0" h='52px' >
        <Center ml='10px' ref={btnRef} color='white' onClick={onOpen}>
          <HamburgerIcon color='white' fontSize='20px' />
        </Center>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            className="drawercontent">

            <DrawerHeader bg='#2874f0' color='white' h='40px' className="head"> <Center><FaUser pr='10px' fontSize='15px' /> &nbsp; Login & Signup</Center> <Center><Image src={icon15} w='20px' h='20px' /></Center></DrawerHeader>

            <DrawerBody ml='-5px'>
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={coin2} alt="c" w='15px' /></Center> <Center className="drawer" ml='16px'>SuperCoin Zone</Center></Flex>
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon3} w="15px" /></Center> <Center className="drawer" ml='16px'>Flipkart Plus Zone</Center></Flex><hr />
              <Flex h="38px" fontSize='14px' > <Center ><Image src={url1} w='15px' /></Center> <Center className="drawer" ml='16px'> All Categories</Center></Flex>
              <Flex h="38px" fontSize='14px'>  <Center ><Image src={icon4} w='15px' /></Center><Center className="drawer" ml='16px'>Trending Stores</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon5} w='15px' /></Center> <Center className="drawer" ml='16px'>More on Flipkart</Center></Flex><hr />
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon6} w='15px' /></Center> <Center className="drawer" ml='16px'>Choose Language</Center></Flex><hr />
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon7} w='15px' /></Center> <Center className="drawer" ml='16px'> Offer Zone</Center></Flex>
              <Flex h="38px" fontSize='14px'>  <Center ><Image src={icon8} w='15px' /></Center><Center className="drawer" ml='16px'>Sell on Flipkart</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon9} w='15px' /></Center> <Center className="drawer" ml='16px'>My Orders</Center></Flex>
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon10} w='15px' /></Center> <Center className="drawer" ml='16px'>Coupons</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon11} w='15px' /></Center> <Center className="drawer" ml='16px'> My Cart</Center></Flex>
              <Flex h="38px" fontSize='14px'>  <Center ><Image src={icon12} w='15px' /></Center><Center className="drawer" ml='16px'>My Wishlist</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon13} w='15px' /></Center> <Center className="drawer" ml='16px'>My Account</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon14} w='15px' /></Center> <Center className="drawer" ml='16px'>My Notification</Center></Flex><hr />
              <Flex h="38px" fontSize='14px' > <Center className="drawer">Notification Preferences</Center></Flex>
              <Flex h="38px" fontSize='14px' >  <Center className="drawer" >Help Center</Center></Flex>
              <Flex h="38px" fontSize='14px' >  <Center className="drawer" >Legal</Center></Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Center ml='10px' mt='5px'>
          <Box  >
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart"
              h="16px"
              marginBottom="-3px"
            />
            <Flex alignItems='center' >

              <Link className="explore3" color="white">
                Explore
              </Link>
              <Link className="explore4" color="yellow.400">
                Plus
              </Link>
              <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" w='10px' h='10px' />
            </Flex>
          </Box>
        </Center>
        <Spacer />
        <Center w='45px'><BsFillFilePlusFill color='white' /></Center>
        <Center w='45px'>
          <FaShoppingCart color='white' />
                {
                  cartData.length>0?<Flex 
                    ml='-5px' mt='-20px' zIndex={5} bg={'#d32f2f'} fontSize='9px' p='6px' 
                    border={'2px solid #fff'} fontWeight='600'
                    borderRadius={'50%'} w='15px' h='15px' 
                    align={'center'} justify='center' color='#fff'
                    >{cartData.length}</Flex>:""
                }
        </Center>
        
        <Center color='white' mr='10px'>
        <Register/>
        </Center>
      </Flex>
      <Flex bg="#2874f0" h='52px'>
        <Center w='100%' ml='1%' mr='1%' pos={'relative'}> 
        <InputGroup pos={'relative'}>
            <Input
                placeholder="Search for products,brands and more"
                bg="white"
                w="100%"
                borderRadius="2px"
                h="36px"
                fontSize="14px"
                ref={ref}
                // value={}
                onInput={handleinput}
                id='inputBox'
              />
              <Box mt='10px' ml='-25px' zIndex={'100'}>
                <BsMic />
              </Box>
          {/* <InputLeftElement 
            pos={'absolute'} zIndex='10'
            children={
              <IoSearchSharp
                color="#2874f0"
                cursor="pointer"
                fontSize="23px"
                fontWeight="bold"
              />
            }
          /> */}
            <Box
            mt='36px'
              display={hiddenDiv?"":"none"}
              pos={'absolute'} zIndex={'10'}
              maxH='320px' overflowY={'auto'}
              borderRadius='0 0 2px 2px'
              borderTop={'1px solid #e0e0e0'}
              w='100%'
              bg='#fff'
              boxShadow={'2px 3px 5px -1px rgb(0 0 0 / 50%)'}
            >
              {
                data.map((item, index)=>(
                  <Box key={index}>
                    <NavLink to={`/products/view/${item.item_id}`}>
                      <Flex gap={2} p='10px 25px' m='10px 0'
                      align={'center'}
                      cursor='pointer'
                      _hover={{bg:"#F5F8FF"}}
                      // onClick={()=>handleSetQuaryUrl(item.query_url)}
                      >
                        <Box maxH='32px' w='32px'>
                          <Image maxH='30px' maxW='32px' src=
                          {item.image}
                          // {item.thumbnail}
                          />
                        </Box>
                        <Box color={'#212121'}
                        >
                          {item.description}
                          {/* {item.name} */}
                        </Box>
                      </Flex>
                    </NavLink>
                  </Box>
                ))
              }
            </Box>
        </InputGroup>
          
        </Center>
      </Flex>
    </Box>
    </Box>
    </Box>
    )

  }





};
export default Navbar;
