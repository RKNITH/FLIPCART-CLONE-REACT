import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';

const ProductItem = (props) => {
    const { property, i } = props;
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)')

    return (
        <NavLink to={`/products/view/${property.item_id}`}>
            <Box key={i} className='my-box' border={!isLargerThan720?'0.1px solid #B0B0B0':""}>
            <Box overflow='hidden' m={isLargerThan720? '0px 8px':""} pos={'relative'}
                _hover={{ boxShadow: "0 3px 16px 0 rgb(0 0 0 / 11%)" }}
                transition='box-shadow .2s ease-in-out;'
                h={'100%'}
                >
                {/* imgage link box  */}
                <Flex position={'relative'} display='block' justifyContent={'center'} alignItems='center' mb={'5px'} cursor='pointer'>
                    {/* imgage box  */}
                    <Box >
                        <Box>
                            <Box w={'100%'} minH='280px' pos={''}
                                pt='' display={'flex'} justifyContent='center' alignItems={'center'}
                            >
                                <Flex pos={''} top='0' left={'0'} w={'100%'} overflow='hidden'
                                    align={'center'} justify='center'
                                >
                                    <Image pos={'relative'} top='0' left='0' buttom='0' right='0'
                                        maxW='100%' maxH={'260px'}
                                        transition='opacity .5s linear' opacity={'1'} m={'auto'} pl='30px' pr={'30px'}
                                        src={property.image}
                                        alt={'pic'} />
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                    {/* whishlist icon */}
                    <Box  pos={'absolute'} display='inline-block' top={'12px'} right={isLargerThan720?'12px':"5px"} cursor='pointer'>
                        <Box pos={'relative'} display='inline-flex' bg={'#fff'} borderRadius='50%' p='5px' boxShadow={'md'}>
                            <svg width="28" height="28" viewBox="0 0 20 16">
                                <path
                                    d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                                    fill="#000" stroke="#FFF" opacity=".2"
                                >
                                </path>
                            </svg>
                        </Box>
                    </Box>
                </Flex>

                {/* description box  */}
                {/* <Box pos={'relative'} border={'1px solid gray'} w='100%' h={'150px'  _hover={{ fontWeight: 'semibold', height:'140px',zIndex:'10' }} transform= "translate3d(0px, -36.5938px, 0px)"}> transition= 'transform .35s cubic-bezier(.17,.67,.21,1),-webkit-transform .35s cubic-bezier(.17,.67,.21,1)' */}
                <Box bg={'#fff'} h='130px' p='5px 16px 0px' pos={'relative'} zIndex='10' >
                    <Box pos='absolute' zIndex='100' pt={'40px'} _hover={{ fontWeight: '' }}
                        sx={{
                            '.my-box:hover &': {
                                pt: '0',
                            },
                        }}>
                        <Box
                            color={'#878787'}
                            fontWeight='bold'
                            fontSize='14px'
                            textAlign={'left'}
                            textTransform='uppercase'
                        >
                            {property.category_name}
                        </Box>
                        <Box
                            fontSize={'14px'}
                            fontWeight='500'
                            lineHeight='tight'
                            noOfLines={1}
                            cursor='pointer'
                        >
                            {property.description}
                        </Box>
                        <Flex gap={3} mt={1} alignItems='center' cursor='pointer'>
                            <Text color={'#212121'} fontWeight={'600'} fontSize='16px'>₹{property.new_price}</Text>
                            <Text textDecoration='line-through'>₹{property.old_price}</Text>
                            <Text color={'#388e3c'} fontWeight='bold' fontSize={'13px'}>{property.discount}%off</Text>
                        </Flex>
                        <Flex mt={3} alignItems='center' gap={2}>
                            <Text color={'#878787'} fontWeight={'600'} fontSize='14px'>Size</Text>
                            <Text>{property.size}</Text>
                        </Flex>
                    </Box>
                </Box>
                {/* </Box> */}
            </Box>
        </Box>
        </NavLink>
    )
}

export default ProductItem