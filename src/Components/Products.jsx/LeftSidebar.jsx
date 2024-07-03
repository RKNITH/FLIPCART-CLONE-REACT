import { Box, Flex, Tag, TagCloseButton, TagLabel, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter/AllFilter'

const LeftSidebar = (props) => {
    const {value, getCheckboxProps, setPriceRange, priceRange} = props;
    return (
        <Box w={"17rem"} bg='#fff' flexDirection='0 0 280px'>
                        <VStack boxShadow={'6px 1px 8px 0 rgb(0 0 0 / 6%)'}
                            align='stretch'
                            >
                            <Box pl={'20px'} pr='20px' mt={'10px'} fontWeight='bold' fontSize='large'>
                                <Flex align='center' justify='space-between'>
                                    <Text>Filters</Text>
                                    {/* <Text onClick={()=>window. location. reload()} cursor='pointer' color='#2874F0' fontSize='12px'>{value.length>0?"CLEAR ALL":""}</Text> */}
                                </Flex>
                                <Wrap spacing={1} mt='10px'>
                                {value.map((size, i) => (
                                    <WrapItem  key={i}>
                                    <Tag
                                    padding='5px 10px'
                                    size='sm'
                                    bg='#e0e0e0'
                                    >
                                    {/* <TagCloseButton mr={1}/> */}
                                    <TagLabel >{size}</TagLabel>
                                    </Tag>
                                    </WrapItem>
                                ))}
                                </Wrap>
                            </Box>
                            <Filter getCheckboxProps={getCheckboxProps} 
                                    setPriceRange={setPriceRange} 
                                    priceRange={priceRange}
                                />
                        </VStack>
                    </Box>
    )
}

export default LeftSidebar