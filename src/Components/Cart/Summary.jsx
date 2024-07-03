import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, ButtonGroup, HStack, Image, Input, Spacer, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import { CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { useContext, useRef, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { MdSecurity } from "react-icons/md";
import { json, Link, Navigate } from "react-router-dom";




function Summary(){


    
    const { cartData } = useContext(CartContext);

    let sellingPrice= 0;
    let discount=0;
    let totalAmount= 10;

       cartData.map((data)=>{
        sellingPrice+= data.old_price * data.quantity ;
        discount+= data.discount;
        totalAmount+= data.new_price* data.quantity;  
              

      })
      localStorage.setItem("Total", JSON.stringify(totalAmount) );
      discount = Math.floor(((discount/cartData.length)* sellingPrice)/100);
      console.log(sellingPrice, "SP");
      console.log(discount, "DIS");
      console.log(totalAmount, "TOTAL");

      console.log(cartData);


    const { globalAddress } = useContext(CartContext);


  
    const [addQuantityState, setAddQuantityState] = useState(0);
    const [lessQuantityState, setLessQuantityState] = useState(0);
  

  const handelPatchLess = (id, quantity) => {
    fetch(`https://flipkart-data.onrender.com/products/${id}`, {
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
    fetch(`https://flipkart-data.onrender.com/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...quantity, quantity: quantity + 1 }),
    });
    // setCount(count + 1);
    setAddQuantityState(addQuantityState + 1);
  };




    console.log(globalAddress, "GLOBAL");

    if(cartData.length === 0 ){
       return  <Navigate to='/cart'/>
    }
 
    return (


        <Box w='100%'  pt='20' bg='#f1f3f6' >

            <HStack
             w="90%"
            //  h='50vh'
            //  bg="pink"
             margin="auto"
             display="flex"
             alignItems="start"
             justifyContent='space-between' 
            >
             {/*LEFT BOX  */}
             <Box 
             w='69%'
            //  h='40vh'
             bg='#f1f3f6'
             >
                 {/* Left top 1 */}
                 <Box 
                 w='100%'
                 h='10vh'
                 bg='white'
                 display='flex'
                 justifyContent='space-between'
                 alignItems='center'
                 shadow='md'
                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='#f1f3f6' pl='2' pr='2' color='blue' mr='4' borderRadius='2' > 1</Box>
                        <Text fontWeight='500' color='grey' >LOGIN</Text> 
                        <CheckIcon ml='3' color='blue.600' />
                    </Box>
                    <Box>
                        <Button mr='6' colorScheme='blue' variant='outline' borderRadius='0' border='1px solid blue' > 
                        CHANGE
                        </Button>
                    </Box>
                    
                 </Box>
                 {/* Left top 1 */}
                 <Box 
                 w='100%'
                 h='10vh'
                 bg='white'
                 display='flex'
                 justifyContent='space-between'
                 alignItems='center'
                 shadow='md'
                 mt='4'
                 >
                    <Box>
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='#f1f3f6' pl='2' pr='2' color='blue' mr='4' borderRadius='2' > 2</Box>
                        <Text fontWeight='500' color='grey' >DELIVERY ADDRESS</Text> 
                        <CheckIcon ml='3' color='blue.600' />
                    </Box>
                    <Box display='flex'>
                    <Text ml='66px' fontWeight='500' mr='2' >{globalAddress.Name}   </Text>
                    <Text mr='2' >  {globalAddress.Address} </Text>
                    <Text mr='2' >{globalAddress.City} -</Text>
                    <Text>{globalAddress.Pincode}</Text>

                    </Box>
                    
                    </Box>
                    <Box>
                        <Button mr='6' colorScheme='blue' variant='outline' borderRadius='0' border='1px solid blue' > 
                        <Link to='/delivery' >CHANGE</Link>
                        </Button>
                    </Box>
                    
                 </Box>

                 {/* Top Box 3 */}

                 <Box 
                 w='100%'
                 h='7vh'
                 bg='#2874f0'
                 mt='4'
                 display='flex'

                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='white' pl='2' pr='2' color='blue' mr='4' borderRadius='2'>3</Box>
                        <Text fontWeight='500' color='white' >ORDER SUMMARY</Text> 
                    </Box>
                </Box>                 


                {/* Top Box 3 FORM */}

                <Box  
                w='100%'
                bg='white'
                display='block'
                shadow='md'
                pl='10'
                pt='5'
                >
                    {cartData.map((data) => {
              return (
                <Box
                  key={data.id}
                  display="flex"
                  justifyContent="start"
                  w="700px"
                  m=""
                  p="5"
                  borderBottom='1px solid grey'
                 
                >
                  <Box display="flex" w="200px" h="150px"  alignItems={'center'} justifyContent={"center"}>
                    <Image src={data.image} mw="130px" maxHeight="140px" />
                    {/* <ButtonGroup
                      display="flex"
                      justifyContent="flex-start"
                      mt="3"
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
                    </ButtonGroup> */}
                  </Box>
                          {/* <hr/> */}
                  <Box w="600px" ml="10">
                    <Text
                      fontSize="17px"
                      fontWeight="500"
                      display="flex"
                      justifyContent="start"
                      mt="3"
                      variant="list"
                    >
                      {data.description}
                    </Text>
                    <Text
                      fontSize="17px"
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
                    <Box display="flex" alignItems="center" mt="5">
                      <Text
                        color="grey"
                        fontSize="18px"
                        fontWeight="400"
                        display="flex"
                        as="del"
                        justifyContent="start"
                      >
                        ₹{data.quantity * data.old_price}
                      </Text>
                      <Text
                        color="black"
                        fontSize="20px"
                        fontWeight="500"
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

                    

                    
                  </Box>
                </Box>
              );
            })}
                </Box>



                <Box 
                 w='100%'
                 h='8vh'
                 bg='white'
                 mt='5'
                 display='flex'
                 justifyContent='space-between'
                 alignItems='center'
                 shadow='md'
                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        {/* <Box bg='#f1f3f6' pl='2' pr='2' color='blue' mr='4' borderRadius='2' >3</Box> */}
                        <Text fontWeight='400' color='black' > Order Confirmation email will be sent to     </Text>
                        <Text fontWeight='500' color='black' ml='2' > { globalAddress.Email }  </Text>
                    </Box>
                    <Button color='white' bg='#fb641b' mr='3' borderRadius='0' >
                         <Link to='/payment' >CONTINUE</Link>
                        </Button>
                    {/* <Box>  </Box> */}
                 </Box>
                <Box 
                 w='100%'
                 h='8vh'
                 bg='white'
                 mt='5'
                 mb='20'
                 display='flex'
                 justifyContent='space-between'
                 alignItems='center'
                 shadow='md'
                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='#f1f3f6' pl='2' pr='2' color='blue' mr='4' borderRadius='2' >4</Box>
                        <Text fontWeight='500' color='grey' >PAYMENT OPTIONS</Text>
                    </Box>
                 </Box>

             </Box>

             {/* Right BOX */}
             <Box 
             w='29.5%'
             h='75vh'
             bg="white" 
             position="sticky"
             top="0"
             shadow='sm'
             >
                <Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' w='100%' h='12' >
            <Text ml='5' fontWeight='500' color='grey' >PRICE DETAILS</Text>
          </Box>
            <hr style={{color:'black'}} />
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
            <Text ml='5' mt='5' fontWeight='400' fontSize='18px' color='black' >Price ({cartData.length} items) </Text>
            <Spacer/>
            <Text mr='5' mt='5' fontWeight='400' fontSize='18px' color='black' >₹{totalAmount}</Text>
          </Box>
          {/* < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
            <Text ml='5' mt='4' fontWeight='400' fontSize='18px' color='black' >Discount </Text>
            <Spacer/>
            <Text mr='5' mt='4' fontWeight='400' fontSize='18px' color='green' >- ₹{discount}</Text>
          </Box> */}
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
            <Text ml='5' mt='4' mb='5' fontWeight='500' fontSize='17px' color='green' > Your Total Savings on this order ₹{discount}</Text>
          </Box>
          < Box display='flex'justifyContent='flex-start' mt='5' alignItems='center' shadow='sm' bg='white' >
            <Image w='45%' src='https://assets.mspimages.in/wp-content/uploads/2021/01/Flipkart-SuperCoin.png' />
            <Box display='grid' >
            <Text mt='3' ml='-4' fontWeight='700' fontSize='15px'   >For every 100 spent, </Text>
            <br />
            <Text mt='-7' fontWeight='700' fontSize='15px' >you earn 2 SuperCoins </Text>
            <br />
            <Text mt='-7' mb='2' ml='-6' fontSize='13px' color='grey'  >Max 50 coins per order</Text>
            </Box>
          </Box>
          <Box mt='5'    p='5'  display='grid' justifyContent='flex-start' alignItems='center'  >
          <MdSecurity fill="grey"   />
          <Text mt='-5' ml='5' w='100%' textTransform='full-width' fontWeight='500' > Safe and Secure Payments.Easy returns.{<br/>}100% Authentic products.</Text>
          </Box>
             </Box>


            </HStack>

        </Box>


    )


}


export default Summary;