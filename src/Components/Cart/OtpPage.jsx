import { InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, HStack, PinInput, PinInputField, Text, useToast } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function OtpPgae() {

const [realOtp, setRealOtp] = useState('');
const [state, setState] = useState(0);
const [forwardCongo, setForwardCongo] = useState(false);

const { cartData, SetCartData, getData, setOrderpageData, orderpageData } = useContext(CartContext);
    
    const toast = useToast()
    
    let value = Math.floor((Math.random()*10)+1000);
    
    useEffect(()=>{
      window.scrollTo(0, 0)
      
        setState(value);
        toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='blue.500' mt="100px">
                Your OTP is {value}
              </Box>
            ),
          })
          console.log(cartData, "lets see cart data")
    }, []);

    const orderPageProducts = ()=>{
      // for(var i=0; i<cartData.length;i++){
      //   fetch(`https://flipkart-data.onrender.com/orderedProducts`, {
      //     method: "POST",
      //     body: JSON.stringify({...cartData[i]}),
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   })
      //   .then((res)=>res.json())
      //   .then((res)=>{
      //     console.log(res,  " orderpage page products" );
      //   })
      // }
      
      setOrderpageData([...orderpageData, ...cartData, ])

      for(let i=0; i<cartData.length; i++){
      fetch(`https://flipkart-data.onrender.com/products/${cartData[i].id}`,{
          method:"DELETE"
      })
      .then(response =>{
          return response.json( )
      })
      .then(data =>{
        getData()
          console.log(data, " test after delete data ")
      })
      }
    }

    console.log(value, "default");
    console.log(state);


const handelgetOtp=(e)=>{

    setRealOtp(realOtp+ e.target.value);
}
console.log(realOtp);


const handelSubmitOtp= ()=>{
    if(realOtp == state){
        setForwardCongo(true);
        orderPageProducts()
        // alert("yes true did it");
    }else{
        // alert("Wr");
        toast({
            position: 'top',
            render: () => (
              <Box color='white' rounded={'10'} p={3} bg='red' display={'flex'} alignItems='center' >
                <InfoIcon/>
                <Text  ml='2' fontWeight={'bold'} color='white'  >Enter Correct Otp</Text>
              </Box>
            ),
          })
        console.log(realOtp);
        console.log(value, "RANDOM");
    }
    
}

  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      w="100%"
      h="100vh"
      bg="#f1f3f6"
    >
      <Box h="40vh" w="25%" bg="white" display='grid' justifyContent={'center'} alignItems='center'  shadow={"sm"} borderRadius={"4"}>
        <Heading>ENTER OTP</Heading>
        <HStack  mt='-10'   >
          <PinInput placeholder="-"  >
            <PinInputField onChange={handelgetOtp}/>
            <PinInputField onChange={handelgetOtp}/>
            <PinInputField onChange={handelgetOtp}/>
            <PinInputField onChange={handelgetOtp}/>
          </PinInput>
        </HStack>
        <Button mt='-10' onClick={handelSubmitOtp} >
            <Link to={ forwardCongo? '/congo' : '' } >Submit</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default OtpPgae;
