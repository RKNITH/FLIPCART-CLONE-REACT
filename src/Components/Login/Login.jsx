import React, { useContext } from 'react'
import { Signup } from './SignUp'
import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Image,
  FormControl,
  Input,
  FormLabel,
  useMediaQuery,
} from '@chakra-ui/react'
import { Authcontext } from '../Context/Authcontext'
import { ChevronDownIcon } from '@chakra-ui/icons'

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const initialvalues = { email: '', password: '' }
  const [inputValues, setInputValues] = useState(initialvalues)
  const [error, setError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [isAuth, setIsAuth] = useState()
  const [isCheck, setIsCheck] = useState(false)
  const [incorrect, setIncorrect] = useState(0)
  // const [correct, setCorrect] = useState(0)
  const {correct, setCorrect} = useContext(Authcontext)
  console.log(correct," check correct in login ");
  // const [otpvalue, setOtpValue] = useState(false)
  let loginsetName = JSON.parse(localStorage.getItem("loginsetName")) || "Login"
  const [name, setName] = useState(loginsetName)
  localStorage.setItem("loginsetName", JSON.stringify(name));

  let otp
  let raj = 0
  const generateOtp = () => {
    otp = ''

    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10)
    }
    localStorage.setItem('otp', JSON.stringify(otp))
    return Number(otp)
  }

  let checkOtp = (e) => {
    setIsAuth(e.target.value)
  }
  console.log(isAuth)
  const handleChange = (inp) => {
    const { name, value } = inp.target
    setInputValues({ ...inputValues, [name]: value })
    // console.log(inputValues)
  }

  const handlelogin = (inputValues) => {
    fetch(`https://flipkart-data.onrender.com/Userdetails`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, " check res in 67");
        let test2  = res.filter((el) => {
          return el.email === inputValues.email &&
            el.password === inputValues.password
        })
        if(test2.length===1){
          // setCorrect(true)
          notify()
          setName(test2[0].email.slice(0,5))
        }else{
          setIncorrect(true)
          check()
        }
        console.log(res, test2, " check res in 74");
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const notify = () => {
    setCorrect(true)
    setIncorrect(false)
    toast('login SuccesFully', {
      position: 'top-center',
    })
    setIsAuth('')
    onClose()
  }

  const check = () => {
    toast('Incorrect Details', {
      position: 'top-center',
    })
    setIncorrect(false)
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
    }
  }, [error, correct])

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (values.email === '') {
      errors.email = 'email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid email'
    }
    if (values.password === '') {
      errors.password = 'password is required'
    } else if (values.password.length < 6) {
      errors.password = 'password must not be less than 6 character'
    }
    return errors
  }
  const getOtp = () => {
    toast(otp, {
      position: 'top-center',
    })
  }
  const OTPVALUES = () => {
    toast('WRONG OTP', {
      position: 'top-center',
    })
    setIsAuth('')
  }
  const Otp = () => {
    setIsCheck(true)
    generateOtp()
    getOtp()
  }

  const Pass = () => {
    setIsCheck(false)
  }

  let popotp = JSON.parse(localStorage.getItem('otp'))

  const sukantaotp = () => {
    if (isAuth === popotp) {
      notify()
    } else {
      OTPVALUES()
    }
  }

  const SubmitOtp = (e) => {
    e.preventDefault()
    sukantaotp()
  }

  const handleSubmit = (e) => {
    handlelogin(inputValues)
    e.preventDefault()
    setError(validate(inputValues))
    setIsSubmit(true)
    setInputValues(initialvalues)
  }

  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')

  return (
    <>
      {
        correct?
        <Text 
              p='4px 30px' bg='#2874f0' color={'#fff'} border='0' textAlign="center" fontSize={'15px'}
                fontWeight="700"
                ml="19px"
                cursor="pointer"
              > {name}
              {" "}
              <ChevronDownIcon/>
              </Text>
        :
        !isLargerThan720?
        <Text p='4px' bg='#2874f0' color={'#fff'} border='0' textAlign="center" fontSize={'15px'}
                fontWeight="700"
                cursor="pointer"
              >Login</Text>
        :
        <Text p='4px 30px' _hover={{bg:""}} textAlign="center" fontSize={'15px'} onClick={onOpen}
        bg="white"
                // h="31px"
                // w="9.5%"
                // p='0px 20px'
                fontWeight="700"
                color="#2874f0"
                ml="19px"
                // pt="2px"
                borderRadius="2px"
                cursor="pointer"
                // border={'1px solid #dbdbdb'}

        >Login</Text>
      }
      <Modal
        loginRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        padding="0px"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalBody padding="-1.5">
            <ToastContainer />
            <ModalCloseButton
              size="lg"
              color="white"
              marginRight="-3.5rem"
              marginTop="-4"
            />
            <div style={{ display: 'flex' }}>
              <Box height="32rem" bg="#2874f0" width="16rem" padding="35px">
                <Text fontWeight="500" color="white" fontSize="3xl">
                  Login
                </Text>
                <Text
                  fontWeight="500"
                  marginTop="15px"
                  color="#Dbdbdb"
                  fontSize="1xl"
                >
                  Get access to your <br /> Orders, Wishlist and Recommendations
                </Text>
                <Image
                  marginTop="10rem"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  aend="image"
                />
              </Box>
              <Box height="32rem" padding="35" width="24rem" color="#878787">
                <FormControl>
                  {!isCheck ? (
                    <>
                      {' '}
                      <FormLabel>Email address</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="email"
                        variant="flushed"
                        placeholder="Enter Email"
                        value={inputValues.email}
                        onChange={handleChange}
                        required
                      />
                      <Text color="red" fontSize="xs">
                        {error.email}
                      </Text>
                    </>
                  ) : (
                    ''
                  )}

                  {isCheck ? (
                    <>
                      {' '}
                      <FormLabel marginTop="5">Enter your OTP</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="password"
                        type="number"
                        variant="flushed"
                        placeholder="Enter OTP"
                        value={isAuth}
                        onChange={checkOtp}
                        required
                      />
                    </>
                  ) : (
                    <>
                      {' '}
                      <FormLabel marginTop="5">Password</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="password"
                        type="password"
                        variant="flushed"
                        placeholder="Enter Password"
                        value={inputValues.password}
                        onChange={handleChange}
                        required
                      />
                      <Text color="red" fontSize="xs">
                        {error.password}
                      </Text>
                    </>
                  )}

                  <Text marginTop="5" fontSize="xs">
                    By continuing, you agree to Flipkart's{' '}
                    <Link color="#2f74f0" href="">
                      Terms of Use{' '}
                    </Link>
                    and{' '}
                    <Link color="#2f74f0" href="">
                      Privacy Policy.
                    </Link>
                  </Text>

                  {!isCheck ? (
                    <Button
                      onClick={handleSubmit}
                      borderRadius="0.5"
                      marginTop="4"
                      padding="6"
                      color="white"
                      bg="#fb641b"
                      width="19.7rem"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      onClick={SubmitOtp}
                      borderRadius="0.5"
                      marginTop="4"
                      padding="6"
                      color="white"
                      bg="#fb641b"
                      width="19.7rem"
                      required
                    >
                      Submit OTP
                    </Button>
                  )}
                  <Text marginTop="2" marginBottom="2" textAlign="center">
                    OR
                  </Text>
                  {!isCheck ? (
                    <>
                      {' '}
                      <Button
                        onClick={Otp}
                        boxShadow="md"
                        p="6"
                        rounded="md"
                        borderRadius="0.5"
                        padding="6"
                        color="#2f74f0"
                        bg="white"
                        width="19.7rem"
                      >
                        Request OTP
                      </Button>
                    </>
                  ) : (
                    <>
                      {' '}
                      <Button
                        onClick={Pass}
                        boxShadow="md"
                        p="6"
                        rounded="md"
                        borderRadius="0.5"
                        padding="6"
                        color="#2f74f0"
                        bg="white"
                        width="19.7rem"
                      >
                        Request Password
                      </Button>
                    </>
                  )}
                  <Link>
                    <Text
                      marginTop="2"
                      bg="white"
                      textAlign="center"
                      color="#2f74f0"
                    >
                      New to Flipkart? {<Signup onClose={onClose} />}{' '}
                    </Text>{' '}
                  </Link>
                </FormControl>
              </Box>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
