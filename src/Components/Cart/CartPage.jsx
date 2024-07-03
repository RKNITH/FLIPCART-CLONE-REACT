import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  ButtonGroup,
  HStack,
  Image,
  Img,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  SkeletonText,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { MdSecurity } from 'react-icons/md'
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";


function CartPage() {
  let sellingPrice= 0;
  let discount=0;
  let totalAmount= 0;
  const [count, setCount] = useState(0);
  const [addQuantityState, setAddQuantityState] = useState(0);
  const [lessQuantityState, setLessQuantityState] = useState(0);
  const [Deleteid, setDeleteId] = useState(0);

  const [address, setAddress]  = useState({})

  function getAddress(){

    fetch (`https://flipkart-data.onrender.com/address`)
    .then((res)=>res.json())
    .then((res)=>setAddress(res));
  }

  console.log(address);
  
  console.log( address.Name === undefined ? "working" : "it's wrong" );
  console.log( address.Name );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  // const [cartData, SetCartData] = useState([]);
  const { cartData, SetCartData, getData, loading, setLoading, carturl } = useContext(CartContext);
  
  // const [ loading, setLoading ] = useState(false);

  const initialFocusRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0)
    getData()
    getAddress();
  }, [count , addQuantityState , lessQuantityState ]);

  console.log(cartData);

  const handelDeleteCart = () => {
    onClose();
    fetch(`${carturl}/${Deleteid}`, {
      method: "DELETE",
    });
    setCount(count - 1);
  };
  
  const handelID = (id) => {
    onOpen();
    console.log(id);
    setDeleteId(id);
  };

  const handelPatchLess = (id, quantity) => {
    fetch(`${carturl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...quantity, quantity: quantity - 1 }),
    });
    console.log(id);
    // setCount(count - 1);
    setLessQuantityState( lessQuantityState - 1 );
  };

  const handelPatchAdd = (id, quantity) => {
    fetch(`${carturl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...quantity, quantity: quantity + 1 }),
    });
    // setCount(count + 1);
    setAddQuantityState(addQuantityState + 1);
  };

      const handelDeleteAddress= ()=>{

        const useradd = {
          "Deleted": "ADD NEW ADDRESS"
        }

        fetch (`https://flipkart-data.onrender.com/address`,{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(useradd)
        })
        setCount(count+1);
      }
   


  cartData.map((data)=>{
    sellingPrice+= data.old_price * data.quantity ;
    discount+= data.discount;
    totalAmount+= data.new_price* data.quantity;  
  })
  discount = Math.floor(((discount/cartData.length)* sellingPrice)/100); 
  console.log(sellingPrice);
  console.log(discount);




  if(loading){
    return (
      <Box display='flex' w='100%' h='100vh' justifyContent='center' alignItems='center' >
        <Box padding='6' boxShadow='lg' w='80%' bg='white'>
        {/* <SkeletonCircle size='10' /> */}
        <SkeletonText noOfLines={15} w='100%' spacing='4' />
        </Box>
      </Box>
    )
  }



  if(cartData.length===0){
    return (
      <Box w="100%" bg="#f1f3f6" h="150vh" pt="100px"  >
        <Box w="78%" h='60.3vh' margin='auto' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} >

        
        <Box
        w="100%"
        bg="white"
        h="9vh"
        margin="auto"
        display="flex"
        alignItems="center"
        justifyContent='center'
        ><Text color="blue" fontSize="20" fontWeight="400"> Flipkart </Text>
      </Box>
      <Box display='block' > 
        <Box
        w="100%"
        bg="white"
        h="50vh"
        margin="auto"
        mt='2'
        display="flex"
        alignItems="start"
        justifyContent='center'
        >
          <Image src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' 
          w='20%'
          mt='5'
           />
      </Box>
      <Box w="200px" m="auto" textAlign={"center"}> 
           <Text mt='-36' fontWeight='400' fontSize='18px' >Your cart is empty!</Text>
           <Text  fontWeight='400' fontSize='13px' >Add items to it now.</Text>
        <NavLink to="/"  > <Button  color='white' bg='#2874f0' borderRadius='0' mt='4' pl='16' pr='16' >
              Shop now
            </Button> </NavLink>
            </Box>

      </Box>
      </Box>
      </Box>  
    )
  }

  return (
    <Box w="100%" bg="#f1f3f6" minH='100vh' maxH='-webkit-fit-content'  pt="20px">
      <HStack
        w="90%"
        bg="f1f3f6"
        margin="auto"
        display="flex"
        alignItems="start"
        gap={2}
      >
        <Box shadow="md" bg="f1f3f6" w="69%" position='relative' top='0'   >
          <Box
            w="100%"
            bg="white"
            h="8.5vh"
            borderRadius="5"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="blue" fontSize="20" fontWeight="400">
              Flipkart ({cartData.length})
            </Text>
          </Box>
          <Box
            w="100%"
            bg="white"
            mt="3"
            h="8.5vh"
            borderRadius="5"
            display="flex"
            alignItems="center"
          >
            <Text ml="5" fontSize="18" fontWeight="400">
              From Saved Adress
            </Text>
            <Spacer />
            <Popover
              initialFocusRef={initialFocusRef}
              placement="bottom"
              closeOnBlur={false}
              border="none"
            >
              <PopoverTrigger>
                <Button mr="5">Saved Adress</Button>
              </PopoverTrigger>
              <PopoverContent color="white" bg="white" borderColor="blue.800">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody color="black">

                  <Text display={ address.Name !== undefined? 'none' : 'flex'  } justifyContent='center' >OOPS!! <br /> You Don't Have Any Saved Adress </Text>

                  <Text display={ address.Name === undefined? 'none' : 'grid' } justifyContent='start'  >
                    <Box  textAlign='left' bg='white' >
                     {address.Name} <br />     
                     {/* {address.Number} <br/> */}
                     {address.Address} , {address.City}
                    </Box>
                    {/* <br/> */}
                    <Button w='20%' h='30px' mt='1' mb='-5' bg='red' colorScheme='red'fontSize="10px" color='white' onClick={handelDeleteAddress} >Delete</Button>
                     </Text>
                  {/* OOPS!! <br />
                  You Don't Have Any Saved Adress */}
                </PopoverBody>
                <PopoverFooter
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                ></PopoverFooter>
              </PopoverContent>
            </Popover>
          </Box>
          <Box
            w="100%"
            bg="white"
            mt="4"
            borderRadius="5"
            display="grid"
            justifyContent="start"
            alignItems="center"
          >
            {cartData.map((data) => {
              return (
                <Box
                  key={data.id}
                  display="flex"
                  justifyContent="start"
                  w="800px"
                  m=""
                  p="2"
                  borderTop={"1px solid #F0F0F5"}
                >
                  <Box display="block"  >
                    <Box w="200px" h="150px" display="flex" alignItems={'center'} justifyContent={"center"}> 
                    <Image src={data.image} mw="120px" maxHeight="110px"  /> </Box>
                 <Box textAlign={'center'}> 
                    <ButtonGroup
                      // display="flex"
                      // justifyContent="flex-start"
                      // mt="3"
                    >
                      <Button
                        disabled={data.quantity === 1}
                        onClick={() => handelPatchLess(data.id, data.quantity)}
                      >
                        -
                      </Button>
                      <Button>{data.quantity}</Button>
                      <Button
                        onClick={() => handelPatchAdd(data.id, data.quantity)}
                      >
                        +
                      </Button>
                    </ButtonGroup> </Box>
                  </Box>
                  <Box w="600px" ml="10" >
                    <Text
                      fontSize="17px"
                      fontWeight="semibold"
                      display="flex"
                      w='100%'
                      justifyContent="start"
                      mt="3"
                      variant="list"
                    >
                      {data.description}
                    </Text>
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      display="flex"
                      mt="1"
                      color="grey"
                      justifyContent="start"
                    >
                      Category: {data.category_name}
                    </Text>
                    <Box display="flex" alignItems="center" mt="1">
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        display="flex"
                        color="grey"
                        justifyContent="start"
                      >
                        Ratings: {data.hidden_stars} ★
                      </Text>
                      <Image
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                        ml="4"
                        alt="assured"
                        w="14"
                        h="5"
                      />
                    </Box>
                    <Box display="flex" alignItems="center" mt="3">
                      <Text
                        color="grey"
                        fontSize="17px"
                        fontWeight="400"
                        display="flex"
                        as="del"
                        justifyContent="start"
                      >
                        ₹{data.quantity * data.old_price}
                      </Text>
                      <Text
                        color="black"
                        fontSize="19px"
                        fontWeight="semibold"
                        display="flex"
                        justifyContent="start"
                        ml="2"
                      >
                        ₹{data.quantity * data.new_price}
                      </Text>
                      <Text
                        fontSize="16px"
                        fontWeight="500"
                        display="flex"
                        color="green"
                        justifyContent="start"
                        ml="2"
                      >
                        {data.discount}% Off {data.offer} Applied
                      </Text>
                    </Box>

                    <Button
                      display="flex"
                      size="md"
                      mt="4"
                      colorScheme="blue"
                      bg="none"
                      color
                      onClick={() => {
                        handelID(data.id);
                      }}
                    >
                      REMOVE
                    </Button>

                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Remove Item
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure you want to remove this item?
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              CANCEL
                            </Button>
                            <Button
                              colorScheme="blue"
                              onClick={() => {
                                handelDeleteCart();
                              }}
                              ml={3}
                            >
                              REMOVE
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
        
            position="sticky"
            bottom="0"
            bg="white"
            w="100%"
            h="70px"
            style={{ boxShadow: "rgba(1.15, 0, 0, 0.15) 0px 1px 8px" }}
            display='flex'
            justifyContent='flex-end' alignItems='center'
          >
            <Button  color='white' bg='#fb641b' borderRadius='0' mr='10' pl='10' pr='10' >
              
              <Link to='/delivery' >PLACE ORDER</Link>
            </Button>
          </Box>
        </Box>

        <Box bg="white" position="sticky" top="0" mt='10' shadow="md" h="70vh" w="31%"    >
          
          <Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' w='100%' h='12' >
            <Text ml='5' fontWeight='500' color='grey' >PRICE DETAILS</Text>
          </Box>
            <hr style={{color:'black'}} />
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
            <Text ml='5' mt='5' fontWeight='400' fontSize='18px' color='black' >Price ({cartData.length} items) </Text>
            <Spacer/>
            <Text mr='5' mt='5' fontWeight='400' fontSize='18px' color='black' >₹{sellingPrice}</Text>
          </Box>
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
            <Text ml='5' mt='4' fontWeight='400' fontSize='18px' color='black' >Discount </Text>
            <Spacer/>
            <Text mr='5' mt='4' fontWeight='400' fontSize='18px' color='green' >- ₹{discount}</Text>
          </Box>
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' borderBottom='1px dashed grey'  >
            <Text ml='5' mt='4' mb='5' fontWeight='400' fontSize='18px' color='black' >Delivery Charges </Text>
            <Spacer/>
            <Text mr='5' mt='4' mb='5' fontWeight='400' fontSize='18px' color='green' >FREE</Text>
          </Box>
            {/* <hr style={{ color:'black'  }} /> */}
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' borderBottom='1px dashed grey' >
            <Text ml='5' mt='4' mb='5' fontWeight='500' fontSize='19px' color='black' >Total Amount </Text>
            <Spacer/>
            <Text mr='5' mt='4' mb='5' fontWeight='500' fontSize='19px' color='black' >₹ {totalAmount}</Text>
          </Box>
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
            <Text ml='5' mt='4' mb='5' fontWeight='500' fontSize='17px' color='green' >You will save ₹{discount} on this order </Text>
          </Box>
          <Box mt='5' p='5' display='flex' justifyContent='' alignItems='center' gap={1} >
            <Img h='31px' w='38px' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg'/>
            <Text color={'#878787'} w='100%' fontWeight='600' > Safe and Secure Payments.Easy returns.{<br/>}100% Authentic products.</Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

export default CartPage;
