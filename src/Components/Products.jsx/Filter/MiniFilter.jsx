import { Box, Button, Checkbox, CheckboxGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const MiniFilter = ({ getCheckboxProps, value }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    return (
        <div>
            <Flex justify='center' align={'center'}
                w='50%' position={'relative'}
                p='12px'
                gap={2}
                onClick={onOpen}
            >
                <Image position={'relative'} width={'24px'} height='24px' src='https://rukminim1.flixcart.com/www/80/80/promos/10/04/2019/62f36a1e-caf6-4433-a848-2adb7e164a4d.png?q=90' />
                {
                    value.length>0?<Flex ml='-15px' mt='-10px' zIndex={5} bg={'rgb(221, 83, 84)'} fontSize='10px' p='6px' borderRadius={'50%'} w='15px' h='15px' align={'center'} justify='center' color='#fff'>{value.length}</Flex>:""
                }
                <Text>Filter</Text>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
                size={'full'}
                >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={'white'} />
                    <DrawerHeader borderBottomWidth='1px' color={'#fff'} bg={'rgb(40, 116, 240)'}>
                        Filter
                    </DrawerHeader>
                    <DrawerBody p='0' textAlign='left'>
                        <Tabs display='flex' textAlign='left'>
                            <TabList ml='0' display='block' w='50%' bg='rgb(241, 243, 246)'>
                                <Tab p={'15px'} m='0px 0' w='100%' fontWeight={'500'}  _selected={{ color:"rgb(40, 116, 240)",  bg: '#fff' }}>Gender</Tab>
                                <Tab p={'15px'} m='10px 0' w='100%' fontWeight={'500'}  _selected={{ color:"rgb(40, 116, 240)", bg: '#fff' }}>Discount</Tab>
                                <Tab p={'15px'} m='10px 0' w='100%' fontWeight={'500'}  _selected={{ color:"rgb(40, 116, 240)", bg: '#fff' }}>Rating</Tab>
                                <Tab p={'15px'} m='10px 0' w='100%' fontWeight={'500'}  _selected={{ color:"rgb(40, 116, 240)", bg: '#fff' }}>Brand</Tab>
                                <Tab p={'15px'} m='10px 0' w='100%' fontWeight={'500'}  _selected={{ color:"rgb(40, 116, 240)", bg: '#fff' }}>Price</Tab>
                                <Tab p={'15px'} m='10px 0' w='100%' fontWeight={'500'}  _selected={{ color:"rgb(40, 116, 240)", bg: '#fff' }}>Availability</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <CheckboxGroup defaultValue={['']} >
                                        <Stack spacing={[5]} direction={['column']} >
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: 'men' })} ><Text>Men</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: 'women' })}><Text >Women</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: "unisex" })} ><Text>Unisex</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </TabPanel>
                                <TabPanel>
                                    <CheckboxGroup defaultValue={['']} >
                                        <Stack spacing={[5]} direction={['column']} >
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '30' })} ><Text>30% or more</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '40' })}><Text >40% or more</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: "50" })} ><Text>50% or more</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '60' })} ><Text>60% or more</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '70' })} ><Text>70% or more</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </TabPanel>
                                <TabPanel>
                                    <CheckboxGroup defaultValue={['']} >
                                        <Stack spacing={[5]} direction={['column']} >
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '4' })} ><Text>4★ & above</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '3' })}><Text >3★ & above</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: "2" })} ><Text>2★ & above</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '1' })} ><Text>1★ & above</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </TabPanel>
                                <TabPanel>
                                    <CheckboxGroup defaultValue={['']} >
                                        <Stack spacing={[5]} direction={['column']} >
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: 'appliances' })} ><Text>Appliances</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: 'electronics' })}><Text >Electronics</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: "fashion" })} ><Text>Faishon</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: 'grocery' })} ><Text>Groceries</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: 'mobiles' })} ><Text>Mobiles</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: 'home' })} ><Text>Home</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: 'top_offers' })} ><Text>TopOffers</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </TabPanel>
                                <TabPanel>
                                    <CheckboxGroup defaultValue={['']} >
                                        <Stack spacing={[5]} direction={['column']} >
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '199' })} ><Text>Rs. 199 and below</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '299' })}><Text >Rs. 200 - Rs. 299</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: "499" })} ><Text>Rs. 300 - Rs. 499</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '699' })} ><Text>Rs. 500 - Rs. 699</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '999' })} ><Text>Rs. 700 - Rs. 999</Text></Checkbox>
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: '1000' })} ><Text>Rs. 1000 and above</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </TabPanel>
                                <TabPanel>
                                    <CheckboxGroup defaultValue={['']} >
                                        <Stack spacing={[5]} direction={['column']} >
                                            <Checkbox spacing='1.2rem' {...getCheckboxProps({ value: 'AVAILABILITY' })} ><Text>Include Out of Stock</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </DrawerBody>
                    <DrawerFooter borderTopWidth='1px'>
                        {/* <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button> */}
                        <Button colorScheme='rgb(255, 88, 0)' bg={'rgb(255, 88, 0)'}
                        onClick={onClose}
                        >Apply</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default MiniFilter