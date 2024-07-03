import React, { useContext } from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, CheckboxGroup, Flex, Img, Input, Radio, RadioGroup, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';
import { IoFilterOutline } from 'react-icons/io5';
import { AiOutlineRight } from 'react-icons/ai'
import { BiRadioCircle } from 'react-icons/bi'
import { useState } from 'react';
import { useEffect } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,

} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { CartContext } from '../Context/CartContext';
function OrderPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('bottom')
    const [Order, setOrder] = useState([]);

    const { orderpageData } = useContext(CartContext);

    const getData = () => {
        setOrder([...orderpageData]);
        // fetch(`https://flipkart-data.onrender.com/orderedProducts`)
        //     .then((res) => (res.json()))
        //     .then((res) => {
        //         setOrder(res);
        //         console.log(res, "solve ho gaya")
        //     })
    }

    // orderedProducts
    useEffect(() => {
        window.scrollTo(0, 0)
        getData();
    },[])
    console.log(Order, "der");
    return (
        <Box display="flex" gap="15px" bg="#F1F3F6" pt='2.5rem'>
            <Box w="20%" h="fit-content" boxShadow="0 2px 4px 0 rgb(0 0 0 / 8%)" bg="white" display={{ base: "none", md: "none", lg: "block" }} >

                <Breadcrumb pb='0.6rem' color={'#878787'} fontWeight={'600'} fontSize={{ base: "0px", md: "10px", lg: "13px" }} pl='1.5rem' bg='#F1F3F6' spacing='2px' separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>My Account</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>My Orders</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Text pl="50px" fontSize={"22px"} > Filters</Text>
                <hr /><Box p="5px 0px 13px 50px">
                    <CheckboxGroup colorScheme='blue' >
                        <Text pb="10px"> ORDER STATUS</Text>
                        <Stack spacing={[1, 2]} >
                            <Checkbox value='ontheway'>On the way</Checkbox>
                            <Checkbox value='deliverd'>Deliverd</Checkbox>
                            <Checkbox value='cancelled'>Cancelled</Checkbox>
                            <Checkbox value='returned'>Returned</Checkbox>
                        </Stack>
                    </CheckboxGroup></Box>
                <hr />
                <Box p="15px 0px 60px 50px">
                    <CheckboxGroup colorScheme='blue'>
                        <Text pb="10px"> ORDER TIME</Text>
                        <Stack spacing={[1, 2]} >
                            <Checkbox value='last30days'>Last 30 days</Checkbox>
                            <Checkbox value='2022'>2022</Checkbox>
                            <Checkbox value='2021'>2021</Checkbox>
                            <Checkbox value='2020'>2020</Checkbox>
                            <Checkbox value='2019'>2019</Checkbox>
                            <Checkbox value='older'>Older</Checkbox>
                        </Stack>
                    </CheckboxGroup> </Box>
            </Box>
            <Box width={{ base: "100%", md: "100%", lg: "80%" }} >
                <Box w="88%" bg="white" display={{ base: "none", md: "none", lg: "flex" }} boxShadow="0 2px 4px 0 rgb(0 0 0 / 8%)" >  <Input w="90%" outline={{ border: "1px solid black" }} placeholder='Search Your orders here' size='md' rounded={'0px'} /> <Button bg="#2874F0" color="white" rounded={"0px"} _hover={{ bg: "#2874F0" }}> <Text mr="6px"> <FaSearch size={"14px"} /> </Text> Search  Orders</Button></Box>
                {/* mobile search button start  */}
                <Box mt="-37px" w="100%" bg="white" p="12px 15px 12px 10px" alignItems={"center"} display={{ base: "flex", md: "flex", lg: "none" }} position="fixed" boxShadow="0 2px 4px 0 rgb(0 0 0 / 8%)" > <Box display="flex" alignItems={"center"} border="1px solid silver" pl="10px">  <FaSearch size={"16px"} color="#838383" /> <Input className='out' style={{ outline: "none", padding: "7px" }} w={{ base: "260px", md: "500px", lg: "15px" }} outline={{ border: "1px solid red" }} border="none" placeholder='Search Your orders here' size='md' rounded={'0px'} /></Box> <Box ml="20px" mr="20px" onClick={onOpen}> <IoFilterOutline color='black' size="25px" /></Box> <Text color={"black"}> Filters</Text> </Box>
                {/* mobile search button end */}
                <Box mt="6px" w="98%" overflow={"auto"} display={{ base: "none", md: "none", lg: "block" }}>

                    {Order.map((item) => (
                        <Flex fontSize={{ base: "8.5px", md: "15px", lg: "18px" }} h="110px" border={"0.3px solid #DBDBDB"} rounded="5px" p="5px 0px 5px 0px" key={Math.random()} mb="9px" alignItems={"center"} justifyContent={"space-around"} gap="15px" bg="white" boxShadow="0 2px 4px 0 rgb(0 0 0 / 8%)" _hover={{ boxShadow: 'md' }}>
                            <Img maxWidth="60px" maxHeight="90px" src={item.image} alt="img" />
                            <Box>  <Text fontWeight={"400"} w="300px" fontSize="16px"> {item.description}</Text>

                            </Box>
                            <Text fontSize={"14px"} fontWeight={"semibold"}>₹ {item.new_price}</Text>
                            <Text display="flex" fontSize={"14px"} alignItems="center"> <BiRadioCircle color="green" size="16px" />  Delivery Expected By  Nov 20</Text>
                        </Flex>
                    ))}
                </Box>
                {/* mobile mode start  */}
                <Box mt={{ base: "35px", md: "40px", lg: "0" }} w="98%" overflow={"auto"} display={{ base: "block", md: "block", lg: "none" }}>


                    {Order.map((item) => (
                        <Flex fontSize={{ base: "8.5px", md: "15px", lg: "18px" }} h="110px" border={"0.3px solid #DBDBDB"} rounded="5px" p="5px 0px 5px 0px" key={Math.random()} mb="9px" alignItems={"center"} justifyContent={"space-around"} gap="15px" bg="white" boxShadow="0 2px 4px 0 rgb(0 0 0 / 8%)" _hover={{ boxShadow: "2xl" }}>
                            <Img maxWidth="50px" maxHeight="90px" src={item.image} alt="img" />
                            <Box>   <Text fontSize="15px" alignItems="center" display={"flex"} fontWeight={"semibold"}>  Delivery Expected By  Nov 20</Text>
                                <Text pt="15px" w="220px" fontSize="12px" fontWeight={"light"}> {item.description}</Text>


                            </Box>
                            <Text> <AiOutlineRight size={"18px"} /> </Text>

                        </Flex>

                    ))}
                </Box>
                {/* mobile mode end */}

                <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth='1px'>Filters</DrawerHeader>
                        <DrawerBody>
                            <CheckboxGroup colorScheme='blue' >
                                <Text pb="10px"> ORDER STATUS</Text>
                                <Stack spacing={[1, 2]} >
                                    <Checkbox value='ontheway'>On the way</Checkbox>
                                    <Checkbox value='deliverd'>Deliverd</Checkbox>
                                    <Checkbox value='cancelled'>Cancelled</Checkbox>
                                    <Checkbox value='returned'>Returned</Checkbox>
                                </Stack>
                            </CheckboxGroup>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    );
}

export default OrderPage;