import { Box, Button, HStack, Image, Input, Spacer, Text, Textarea } from "@chakra-ui/react";
import { CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { MdSecurity } from "react-icons/md";
import { Navigate } from "react-router-dom";




function DeliveryPage(){



    const { cartData } = useContext(CartContext);

    let sellingPrice= 0;
    let discount=0;
    let totalAmount= 0;

       cartData.map((data)=>{
        sellingPrice+= data.old_price * data.quantity ;
        discount+= data.discount;
        totalAmount+= data.new_price* data.quantity;  
      })
      discount = Math.floor(((discount/cartData.length)* sellingPrice)/100);
      console.log(sellingPrice, "SP");
      console.log(discount, "DIS");
      console.log(totalAmount, "TOTAL");

      console.log(cartData);


    const [allFilled, setAllFilled] = useState(true);

    const [ forward, setForward ]  = useState(false);

    const { globalAddress, setGlobalAddress } = useContext(CartContext);

    const [address, setAddress] = useState({Name:'', Number:'', Pincode:'',Email:'',Address:'',City:'',State:''})
    const {Name, Number, Pincode, Email, Address, City, State } = address;


    // console.log(address.Name);
    const handelChange= (e)=>{
        // const { name , value } = e.target;
        // setAddress(e.target)
        // console.log(address);
        const {value,  name } = e.target;
    setAddress({...address, [name] : value})
    setGlobalAddress( {...globalAddress, [name] : value} )
    }

    console.log(globalAddress, "GLOBAL");

    if(cartData.length === 0 ){
    //    return  <Navigate to='/cart'/>
    }


    const handelCheckAddress= ()=>{
        setAllFilled(true);
        if(address.Name != "" && address.Number != "" && address.Pincode != "" && address.Email != "" && address.Address != "" && address.City != "" && address.State != "" ){
            console.log("yes its working");

            fetch(`https://flipkart-data.onrender.com/address`,{
                method : 'POST',
                body: JSON.stringify(address),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })

            setForward(true);

            // return <Navigate to='/summary' />

        }else{
            console.log("Wrong");
            setAllFilled(false)
        }
    }

    if(forward){
        return <Navigate to='/summary' />
    }
 
    return (


        <Box w='100%'  pt='20' bg='#f1f3f6' >

            <HStack
             w="82%"
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

                 {/* Top Box 2 */}

                 <Box 
                 w='100%'
                 h='7vh'
                 bg='#2874f0'
                 mt='4'
                 display='flex'

                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='white' pl='2' pr='2' color='blue' mr='4' borderRadius='2'>2</Box>
                        <Text fontWeight='500' color='white' >DELIVERY ADDRESS</Text> 
                    </Box>
                </Box>                 

                {/* Top Box 3 FORM */}


                <Box  
                w='100%'
                h='70vh'
                bg='#f5faff'
                display='block'
                shadow='md'
                pl='10'
                pt='5'
                >
                    <Box display='flex' >
                    <InfoOutlineIcon mr='4' color='blue'  />
                    <Text  color='blue' fontWeight='500' mt='-1' > ADD A NEW ADDRESS </Text>
                    </Box >
                    <Box display='flex' justifyContent='space-evenly' mt='8'w='80%' >
                        <Input value={Name}  onChange={handelChange} name="Name" placeholder='Name' w='45%' border='2px solid ' bg='white' p='6' />
                        <Input value={Number}  onChange={handelChange} type="number" name="Number"  placeholder='Mobile Number' w='45%' border='2px solid ' bg='white' p='6' />
                    </Box>

                    <Box display='flex' justifyContent='space-evenly' mt='4'w='80%' >
                        <Input value={Email}  onChange={handelChange} name="Email" type={"email"}  placeholder='Email' w='45%' border='2px solid ' bg='white' p='6' />
                        <Input value={Pincode}  onChange={handelChange} name="Pincode"  type={"number"} placeholder='Pincode' w='45%' border='2px solid ' bg='white' p='6' />
                    </Box>
                    <Box display='flex' justifyContent='space-evenly' mt='4'w='80%' >
                        {/* <Input  placeholder='Address' w='93.5%' border='2px solid ' bg='white' p='6' /> */}
                        <Textarea value={Address}  onChange={handelChange} type="text" name="Address" placeholder='Address' w='93.5%' border='2px solid ' bg='white' pl='6' resize='none' h='20' />
                        </Box>
                    <Box display='flex' justifyContent='space-evenly' mt='4'w='80%' >
                        <Input  value={City}  onChange={handelChange} name="City"   placeholder='City/District/Town' w='45%' border='2px solid ' bg='white' p='6' />
                        <Input value={State}  onChange={handelChange} name="State"  placeholder='State' w='45%' border='2px solid ' bg='white' p='6' />
                    </Box>
                    <Box display='grid' ml='5' mt={allFilled? '4' : '1'} w='80%' >
                    <Text display={ allFilled? 'none' : 'flex' }  mb='2'  color='red' fontSize='16px' pl='1'  >Please fill all the details</Text>
                    <Button  color='white'onClick={handelCheckAddress}  bg='#fb641b' w='45%' borderRadius='0' mr='10' pl='10' pr='10' pt='7' pb='7' >SAVE AND DELIVER HERE</Button>
                    </Box>
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
                        <Box bg='#f1f3f6' pl='2' pr='2' color='blue' mr='4' borderRadius='2' >3</Box>
                        <Text fontWeight='500' color='grey' >ORDER SUMMARY</Text>
                    </Box>
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
             h='80vh'
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


export default DeliveryPage;