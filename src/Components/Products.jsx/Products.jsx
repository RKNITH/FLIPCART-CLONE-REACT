import React, { useState } from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Radio, RadioGroup, SimpleGrid, Skeleton, Spinner, Stack, Tab, TabList, Tabs, Text, useCheckboxGroup, useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'
import ProductItem from './ProductItem'
import LeftSidebar from './LeftSidebar'
import MiniFilter from './Filter/MiniFilter'
import { Categories } from '../Navbar/Categries'
import { useDispatch, useSelector } from 'react-redux'
import { getProductError, getProductLoading, getProductsSuccess } from '../../Redux/Products/action'
import { useParams } from 'react-router'
import InfiniteScroll from 'react-infinite-scroll-component'

const url = `https://flipkart-data.onrender.com`
// https://flipkart-data.onrender.com

const Products = () => {
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
    // const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const perPagelimitProduct = 16;
    const [total, setTotal] = useState(0);
    
    const { category_name } = useParams()
    console.log(category_name, " category_name");

    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state)=>state)

    console.log(products, " products ", loading, error );

    const [priceRange, setPriceRange] = useState([]);
    // console.log(priceRange, " priceRange ");
    const priceRangeurl = priceRange[0] > 0 || priceRange[1] < 100 ?
        `&new_price_gte=${priceRange[0] * 10}${priceRange[1] < 100 ? `&new_price_lte=${priceRange[1] * 10}` : ""}` : ""

     // for mobile sort price
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState("")
    
    const [sortprice, setPriceSort] = useState("");
    // console.log(sortprice);
    let pricesorturl = isLargerThan720?
    sortprice === ""? "" : `&_sort=new_price&_order=${sortprice}`:
    placement==="" ?"": `&_sort=new_price&_order=${placement}`

    const { value, getCheckboxProps } = useCheckboxGroup()

    // console.log(value, " val of checkbox ");
    // console.log(data, " all data");

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchData()
        // eslint-disable-next-line
    }, [page, sortprice, priceRangeurl, value, placement])

    const fetchData = () => {
        dispatch(getProductLoading())
        let tempUrl = ""
        const categoryCheckArrurl = ['fashion', 'mobiles', "top_offers", "grocery", "electronics", "home", "appliances"]
        const discountCheckArrurl = ["30", "40", "50", "60", "70"]
        value.forEach((el) => {
            if (categoryCheckArrurl.includes(el)) {
                tempUrl += `&category_name=${el}`
            }
            if (el === "3" || el === "4") {
                tempUrl += `&hidden_stars_gte=${el}`
            }
            if (discountCheckArrurl.includes(el)) {
                tempUrl += `&discount_gte=${el}`
            }
        })

        // console.log(tempUrl);
        let homepagecategory_nameurl = ""
        if(categoryCheckArrurl.includes(category_name)){
            homepagecategory_nameurl = `category_name=${category_name}`
        }
        
        fetch(`${url}/all?${homepagecategory_nameurl}&_limit=${perPagelimitProduct}&_page=${page}${pricesorturl}${priceRangeurl}${tempUrl}`)
            .then((res) => {
                const total = res.headers.get('X-Total-Count')
                setTotal(total);
                return res.json()
            })
            .then((res) => {
                // setData(res)
                dispatch(getProductsSuccess(res))
            })
            .catch(()=>dispatch(getProductError()))
    }

    const handlepagination = (curr) => {
        if (curr <= Math.ceil(total / perPagelimitProduct)) {
            setPage(curr)
        }
    }

    const range = (start, stop) => Array.from({ length: (stop - start) }, (_, i) => start + (i))
    let arrpage = range(page - 4, page + 6);
    let ll = Math.ceil(total/perPagelimitProduct)-10;
    let lastpaginationArray = [ll,ll+1,ll+2,ll+3,ll+4,ll+5,ll+6,ll+7,ll+8,ll+9,ll+10]

    
    // if(error){
    //     return <><Alert status='error' w="100%" m="auto" textAlign={"center"}>
    //     <AlertIcon />
    //     <AlertTitle>Opps!</AlertTitle>
    //     <AlertDescription>Please Refresh and try again.</AlertDescription>
    // </Alert>
    // </>
    // }

    
    const getScrollProducts = async() => {
        try {
          const res = await fetch(`${url}/all?_limit=8&_page=${page}`);
            const data = await res.json();
            dispatch(getProductsSuccess(data))
        } catch (error) {
          console.log(error);
        }
        finally{
        }
      };

    const getMoreProducts = () => {
        setTimeout(() => {
          setPage(page + 1);
          getScrollProducts();
        }, 500);
      };
    
      useEffect(() => {
        if(isLargerThan720){
            setPage(1);
            // getFirstProducts();
        }
      }, []);
    return (
        <Box bg='#f1f3f6' border='1px solid #f1f3f6' fontFamily='Roboto,Arial,sans-serif'>
            <Categories/>
            <Flex pos={'relative'} spacing='10px' m={isLargerThan720?"8px":""} flexDir={isLargerThan720?"":"column"} >
                <Box mr={3}>
                    {/* sidebar */}
                    {
                        isLargerThan720 ? <LeftSidebar
                        getCheckboxProps={getCheckboxProps}
                        setPriceRange={setPriceRange}
                        priceRange={priceRange}
                        value={value}
                    />: ""
                    }
                    {
                        isLargerThan720?"":
                        <Box mb={'0px'} mt='0'>
                            <Flex mt='0' justify={'space-between'} align='center' fontSize={'15px'} fontWeight='600' 
                                position={'sticky'} 
                                top='0'
                                // border={'1px solid red'}
                                mb={'0px'}  w="100vw" boxShadow='Base'
                                bg='rgb(255,255,255,1);' 
                                // borderBottom='1px solid #B0B0B0'
                                >
                                {/* <Box> */}
                                    <Flex justify={'center'} align='center' borderRight='0.5px solid #B0B0B0'
                                        bg='rgb(255,255,255,1);' w="50%" 
                                        p='12px' gap={2}
                                        onClick={onOpen}
                                        >
                                            <Image width={'24px'} height='24px' src='https://rukminim1.flixcart.com/www/80/80/promos/10/04/2019/d775ea02-5588-4cda-95ad-1ae03bb67e17.png?q=100'/>
                                            <Text>Sort</Text>
                                    </Flex>
                                        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                                            <DrawerOverlay />
                                            <DrawerContent>
                                            <DrawerHeader borderBottomWidth='1px' fontSize={'15px'} color='rgba(135,135,135,1.00)'>SORT BY</DrawerHeader>
                                            <DrawerBody>
                                                <RadioGroup onChange={setPlacement}>
                                                    <Stack direction='column' mb='4'>
                                                        <Radio fontWeight='900' value='pop'>Popularity</Radio>
                                                        <Radio fontWeight='900' value='asc'>Price -- Low to High</Radio>
                                                        <Radio fontWeight='900' value='desc'>Price -- High to Low</Radio>
                                                    </Stack>
                                                </RadioGroup>
                                            </DrawerBody>
                                            </DrawerContent>
                                        </Drawer>
                                {/* </Box> */}
                                <MiniFilter getCheckboxProps={getCheckboxProps} value={value}/>
                        </Flex>
                        </Box>
                    }
                </Box>
                <Box w={isLargerThan720?"90vw":""} bg='#fff'>
                    <Box>
                        {
                            isLargerThan720 ?
                                <Box p={'12px 16px 0'} fontSize={'12px'} borderBottom='1px solid #f0f0f0' >
                                    <Box color='#878787'>
                                        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href='#'>Products</BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </Breadcrumb>
                                    </Box>
                                    <Box lineHeight={'1.45'} fontSize={'12px'} p='10px 5px 4px 0'>
                                        <Text color={'#878787'}><b>T-shirts</b> have become one of the most common yet stylish choices of clothing for teenagers. As tees are simple to wear, comfortable, and easy to wash, they have become a popular option. You can pair a tee with pants, like chinos, track pants, joggers, jeans, shorts, etc. Wearing appropriate accessories with a half sleeve tee will certainly amp up your style factor. Pick a polo tee with striped details and stylise with a leather strap watch for the best results. You can even find polo tees with solid colours or prints online. Choose boxy, loose, or regular fit tees to stay comfortable during summer, or choose hooded long-sleeve options to stay trendy during winters. You can even choose your preferred sleeve length while shopping online. Explore tees with exciting prints that would certainly impress your peers. Finding a size that would fit you won’t be a hassle online as there are plenty of size options available. Find brands like Adidas, Adrenex, Billion, Nike, Reebok, and many more while shopping for the best t-shirts online. You do not have to get up from your couch to order a t-shirt for yourself. Get them delivered to a preferred location without any hassles. The information you are reading has been last updatad on 09-Oct-22</Text>
                                    </Box>
                                    <Flex alignItems='center' p='5px 0px 0px 0' gap='2'>
                                        <Text fontSize={'16px'} fontWeight={'bold'} letterSpacing='1px'>Products View</Text>
                                        <Text fontSize={'12px'} color={'#878787'}>
                                            (Showing {total>0?(page * perPagelimitProduct) - (perPagelimitProduct - 1):0} – {total>perPagelimitProduct?page * perPagelimitProduct:total}
                                            {" "}products of {total} products)</Text>
                                    </Flex>
                                    <Tabs>
                                        <TabList borderBottom={0}>
                                            <Tab _selected={{ cursor: 'text' }} p={'8px 0 4px'} mr={'10px'} fontWeight={'600'} fontSize={'14px'} color='black'>Sort By</Tab>
                                            <Tab _selected={{ fontWeight: '600', color: '#2874f0', borderBottom: '2px solid #2874f0' }} p={'8px 0 4px'} m={'0 10px'} fontSize={'14px'} color='black'>Popularity</Tab>
                                            <Tab _selected={{ fontWeight: '600', color: '#2874f0', borderBottom: '2px solid #2874f0' }} p={'8px 0 4px'} m={'0 10px'} fontSize={'14px'} color='black' onClick={() => setPriceSort("asc")}>Price - Low to High</Tab>
                                            <Tab _selected={{ fontWeight: '600', color: '#2874f0', borderBottom: '2px solid #2874f0' }} p={'8px 0 4px'} m={'0 10px'} fontSize={'14px'} color='black' onClick={() => setPriceSort("desc")} >Price - High to Low</Tab>
                                            {/* <Tab _selected={{ fontWeight: '600', color: '#2874f0', borderBottom: '2px solid #2874f0' }} p={'8px 0 4px'} m={'0 10px'} fontSize={'14px'} color='black'>Newest First</Tab> */}
                                        </TabList>
                                    </Tabs>
                                </Box>
                                : ""}
                    </Box>
                    <Box mt={0}>
                        {
                            error?<><Alert status='error' m='auto' w="100%" textAlign={"center"}>
                            <AlertIcon />
                            <AlertTitle>Opps!</AlertTitle>
                            <AlertDescription>Please Refresh and try again.</AlertDescription>
                        </Alert>
                        </>:
                            loading?
                            <SimpleGrid columns={1} minChildWidth={isLargerThan720?'220px':""} 
                            spacing={isLargerThan720?'10px':""} pt={0}
                            pl='1.2rem'
                            >
                                {
                                    Array.from({ length: 16 }, (v, i) => i).map((item, i)=>(
                                        <Skeleton key={i} height='320px' w='230px' />
                                    ))
                                }
                            </SimpleGrid>
                            // :
                            // !isLargerThan720?
                            // <Box>
                            //     <InfiniteScroll
                            //         style={{ overflowY: "hidden" }}
                            //         dataLength={products.length}
                            //         next={getMoreProducts}
                            //         hasMore={total >= products.length}
                            //         loader={
                            //         <Center>
                            //             <Spinner />
                            //         </Center>
                            //         }
                            //         scrollThreshold="100%"
                            //     >
                            // <SimpleGrid columns={2} minChildWidth={isLargerThan720?'220px':""} 
                            // spacing={isLargerThan720?'10px':""} pt={0}
                            // >
                            //     {
                            //         products.map((property, i) => (
                            //             <ProductItem key={i} property={property} />
                            //         ))
                            //     }
                            // </SimpleGrid>
                            // </InfiniteScroll>
                            // {total !== products.length ? (
                            //     <Center>
                            //       <Button bg="#42A8D6" colorScheme="white" mt={5}>
                            //         Show More Results
                            //       </Button>
                            //     </Center>
                            //   ) : null}
                            // </Box>
                            :
                            <SimpleGrid columns={2} minChildWidth={isLargerThan720?'220px':""} 
                            spacing={isLargerThan720?'10px':""} pt={0}
                            >
                                {
                                    products.map((property, i) => (
                                        <ProductItem key={i} property={property} />
                                    ))
                                }
                            </SimpleGrid>
                        }
                    </Box>
                    {
                        isLargerThan720
                        ? 
                        <Flex borderTop={'1px solid #e0e0e0'} justify='space-between' align={'center'}
                        p='10px' lineHeight={'32px'}>
                        <Text ml={5}>Page {page} of {Math.ceil(total / perPagelimitProduct)}</Text>
                        <Tabs p={'10px'}>
                            <TabList borderBottom={0}>
                                {
                                    page > 1 ? <Text color={'#2874f0'} fontWeight='800' lineHeight='32px' p='0 25px'
                                    cursor={'pointer'}
                                    onClick={()=>setPage(page-1)}
                                    >PREVIOUS</Text> : ""
                                }
                                {
                                    Math.ceil(total/perPagelimitProduct)<=10?
                                    Array.from({ length: Math.ceil(total/perPagelimitProduct) }, (v, i) => i).map((item, i) => {
                                        return <Tab key={i} cursor='pointer' fontSize={'15px'}
                                            _selected={{ bg: '', color: '' }}
                                            bg={page===(i+1)?"#2874f0":""}
                                            color={page===(i+1)?"#fff":""}
                                            height={'32px'} w='32px' borderRadius={'50%'}
                                            onClick={() => setPage(item + 1)}
                                            fontWeight='800'
                                        >
                                            {item + 1}
                                        </Tab>
                                    })
                                    :
                                    page <= 5 ?
                                        Array.from({ length: 10 }, (v, i) => i).map((item, i) => {
                                            return <Tab key={i} cursor='pointer' fontSize={'15px'}
                                                _selected={{ bg: '', color: '' }}
                                                bg={page===(i+1)?"#2874f0":""}
                                                color={page===(i+1)?"#fff":""}
                                                height={'32px'} w='32px' borderRadius={'50%'}
                                                onClick={() => setPage(item + 1)}
                                                fontWeight='800'
                                            >
                                                {item + 1}
                                            </Tab>
                                        })
                                        :
                                        page<=total/perPagelimitProduct-5?
                                        arrpage.map((ele, i) => (
                                            <Tab key={i} cursor='pointer' fontSize={'15px'}
                                                bg={i === 4 ? '#2874f0' : "#fff"} color={i === 4 ? '#fff' : "black"}
                                                _selected={{ bg: '', color: '' }}
                                                h={'32px'} w='32px' borderRadius={'50%'}
                                                onClick={() => handlepagination(ele)}
                                                fontWeight='800'
                                            >
                                                {ele}
                                            </Tab>
                                        )):
                                        lastpaginationArray.map((item, i) => {
                                            return <Tab key={i} cursor='pointer' fontSize={'15px'}
                                                _selected={{ bg: '', color: '' }}
                                                bg={page===(item)?"#2874f0":""}
                                                color={page===(item)?"#fff":""}
                                                height={'32px'} w='32px' borderRadius={'50%'}
                                                onClick={() => setPage(item)}
                                                fontWeight='800'
                                            >
                                                {item}
                                            </Tab>
                                        })
                                }
                                {
                                    page<=total/perPagelimitProduct?
                                    <Text color={'#2874f0'} fontWeight='800' lineHeight='32px' p='0 25px'
                                        cursor={'pointer'}
                                        onClick={()=>setPage(page+1)}
                                        >NEXT</Text>
                                        :""
                                }
                            </TabList>
                        </Tabs>
                        <Text as='span'></Text>
                    </Flex>:""
                    }
                    <Box bg={'#f1f3f6'} p='10px 0'>
                        <Flex gap={5} bg={'#fff'} justify='flex-start' align={'center'}
                            p='10px' lineHeight={'32px'}>
                            <Text ml={5} color={'#212121'} fontWeight={'600'} lineHeight='1.2' fontSize='16px'>Did you find what you were looking for?</Text>
                            <Flex gap={3} p='4px 0px' textAlign={'center'} justify='center' align={'center'}
                            flexDir={isLargerThan720?"":"column"}
                            >
                                <Text bg='#fff' border={'1px solid #d7d7d7'} borderRadius='2px' p='1px 28px' fontSize={'14px'}>Yes</Text>
                                <Text bg='#fff' border={'1px solid #d7d7d7'} borderRadius='2px' p='1px 28px' fontSize={'14px'}>No</Text>
                            </Flex>
                            <Text></Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Products
