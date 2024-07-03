import { Flex, Center, Popover, PopoverBody, PopoverContent, List, ListItem, PopoverTrigger } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import React from "react";

export const Categories = () => {

  const [arr, setarr] = React.useState([]);
  const [arra, setarra] = useState([]);
  const [arrb, setarrb] = useState([]);
  const [arrc, setarrc] = useState([]);
  const [arrd, setarrd] = useState([]);
  const [arre, setarre] = useState([]);
  const [arrf, setarrf] = useState([]);
  const [arrg, setarrg] = useState([]);
  const [arrh, setarrh] = useState([]);
  const [arri, setarri] = useState([]);
  const [arrj, setarrj] = useState([]);
  const [arrk, setarrk] = useState([]);
  const [arrl, setarrl] = useState([]);
  const [arrm, setarrm] = useState([]);
  const [arrn, setarrn] = useState([]);
  const [arro, setarro] = useState([]);
  const [arrp, setarrp] = useState([]);
  const [arrq, setarrq] = useState([]);
  const [arrr, setarrr] = useState([]);

  const [isLargerThan670] = useMediaQuery('(min-width: 1000px)');

  useEffect(() => {
    setarr(arr1);
    setarra(arr2);
    setarrb(arr3);
    setarrc(arr4);
    setarrd(arr5);
    setarre(arr6);
    setarrf(arr7);
    setarrg(arr8);
    setarrh(arr9);
    setarri(arr10);
    setarrj(arr11);
    setarrk(arr12);
    setarrl(arr13);
    setarrm(arr14);
    setarrn(arr15);
    setarro(arr16);
    setarrp(arr17);
    setarrq(arr18);
    setarrr(arr19);
  }, [])

  if (isLargerThan670) {
    return (

      <>
        <Flex justifyContent='space-around' className="whole"  bg='#fff' mb='8px' pl='5rem' pr='5rem'>
          <Popover trigger='hover' >
            <PopoverTrigger>
              <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }} className='secnav'>Electronics<ChevronDownIcon _hover={{ transform: "rotate(180deg)" }} /></Center>
            </PopoverTrigger>
            <PopoverContent w='1100px' >



              <PopoverBody display='flex' justifyContent="space-between" >
                <List w='90%' pl='15px'>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Mobile</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Mi</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Realme</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>oppo</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Samsung</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Infinix</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Vivo</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Honor</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Asus</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Iphone SE</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Poco X2</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Motorola</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>IQOO3</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Iphone 13</ListItem>

                </List>
                <List w='100%' bg='dadada' pl='15px'>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Mobile Accesories</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Cover</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Power Bank</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Mobile case</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Headphones</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Screenguards</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Memory Cards</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Mobile Cables</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Mobile Holders</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Smart Wearable Tech</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Smart Watches</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Smart Glasses</ListItem>
                </List>
                <List w='100%' pl='15px'>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Laptop</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Gaming Laptop</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Destop PCs</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Notebook</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Gaming & Accessories</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>External Hard Disks</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Pendrives</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Laptop Skins & Decals</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Laptop Bags</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Mouse</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Computer Peripherals</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Printers & Ink Cartridges</ListItem>
                </List>
                <List w="100%" pl='15px' bg='dadada'>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Television</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Speaker</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'> Home Audio System</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Soundbars</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Bluetooth Speakers</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>DTH Set Top Box</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Smart Home Automation</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Google Nest</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Camera</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>DSLR & Mirrorless</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Compact & Bridge Cameras</ListItem>
                  <ListItem fontSize='14px' pb='10px' cursor='pointer'>Sports & Action</ListItem>
                </List>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* =========================================tv Appliances==== */}
          <Popover trigger='hover' >
            <PopoverTrigger>
              <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }} className='secnav'>TVs & Appliances<ChevronDownIcon _hover={{ transform: "rotate(180deg)" }} /></Center>
            </PopoverTrigger>
            <PopoverContent w='1200px'  >



              <PopoverBody display='flex' justifyContent="space-between">
                <List w='100%' pl='15px'>

                  {arra.map((el) => (
                    <ListItem fontSize='14px' pb='10px' cursor='pointer' key={el}>{el}</ListItem>
                  ))}

                </List>
                <List w='100%' bg='dadada' pl='15px' >

                  {arrb.map(el => (
                    <ListItem fontSize='14px' pb='10px' cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List>
                <List w='100%' pl='15px'>

                  {arrc.map(el => (
                    <ListItem fontSize='14px' pb='10px' cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List><List w='100%' pl='15px'>

                  {arrd.map(el => (
                    <ListItem fontSize='14px' pb='10px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List>

                <List w="100%" pl='15px'>
                  {arre.map(el => (
                    <ListItem fontSize='14px' pb='10px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List>

              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* ======================men will be men=============== */}
          <Popover trigger='hover' >
            <PopoverTrigger>
              <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }}>Men <ChevronDownIcon _hover={{ transform: "rotate(180deg)" }} /></Center>
            </PopoverTrigger>
            <PopoverContent w='1100px'  >



              <PopoverBody display='flex' justifyContent="space-between">
                <List w='100%' >

                  {arrf.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}


                </List>
                <List w='100%' bg='dadada' pl='15px'>

                  {arrg.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List>
                <List w='100%'>
                  {arrh.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List><List w='100%' bg='#f9f9f' >
                  {arri.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}

                </List>
                <List w='100%' bg='#f9f9f' >
                  {arrj.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}

                </List>

              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* ===================================womem=====     */}
          <Popover trigger='hover' >
            <PopoverTrigger>
              <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }} className='secnav'>Women <ChevronDownIcon _hover={{ transform: "rotate(180deg)" }} /></Center>
            </PopoverTrigger>
            <PopoverContent w='1100px' >



              <PopoverBody display='flex' justifyContent="space-between">
                <List w='100%' >
                  {arrk.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}

                </List>
                <List w='100%' bg='dadada' pl='15px'>
                  {arrl.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List>
                <List w='100%' >
                  {arrm.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}

                </List><List w='100%' bg='dadada' >
                  {arrn.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }} className='secnav'>Baby & Kids </Center>

          {/* ================================home &furniyure================ */}
          <Popover trigger='hover' >
            <PopoverTrigger>
              <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }} className='secnav'>Home & Furniture <ChevronDownIcon _hover={{ transform: "rotate(180deg)" }} /></Center>
            </PopoverTrigger>
            <PopoverContent w='1100px'  >



              <PopoverBody display='flex' justifyContent="space-between">
                <List w='100%' >
                  {arro.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}

                </List>
                <List w='100%' bg='dadada' >
                  {arrp.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List>
                <List w='100%' >
                  {arrq.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List><List w='100%' bg='dadada'>
                  {arrr.map(el => (
                    <ListItem fontSize='14px' pb='10px' pl='15px' bg="dadada" cursor='pointer' key={el}>{el}</ListItem>
                  ))}
                </List>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }} className='secnav'>Sports,Books & more</Center>
          <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }} className='secnav'>Flight</Center>
          <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }} className='secnav'>OfferZone</Center>
          <Center fontWeight={'600'} _hover={{ color: "#2874f0", cursor: "pointer" }} className='secnav'>Grocery</Center>
        </Flex>

      </>
    )
  }
}


var arr1 = ['Xiaomi', 'Samsung', 'Vivo', 'Oppo', 'Apple', 'Realme', 'OnePlus', 'Poco', 'Nokia'
]


var arr2 = [
  'Television', 'New Launches',
  'Smart & Ultra HD', 'Top Brands',
  'Mi', 'vu',
  'Thomson', 'Samsung',
  'iFFALCON by TCL', 'Nokia',
  'realme', 'Motorola',
  'Shop by Screen Size', '24 & below',
  '28-32', '39 - 43',
  '48 - 55', '60 & above'
]


var arr3 = [
  'Washing Machine',
  'Fully Automatic Front Load',
  'Semi Automatic Top Load',
  'Fully Automatic Top Load',
  'Air Conditioners',
  'Inverter AC',
  'split ACs',
  'Window ACS',
  'Shop By Brand',
  'Hitachi',
  'Carrier',
  'Refrigerators',
  'Single Door',
  'Double Door',
  'Triple door',
  'Side by Side',
  'Convertible'
]

var arr4 = [
  'Kitchen Appliances',
  'Microwave Ovens',
  'Oven Toaster Grills (OTG)',
  'Juicer/Mixer/Grinder',
  'Electric Kettle',
  'Induction Cooktops',
  'Chimneys',
  'Hand Blenders',
  'Sandwich Makers',
  'Pop Up Toasters',
  'Electric Cookers',
  'Wet Grinders',
  'Food Processors',
  'Coffee Makers',
  'Dishwashers',
  'Healthy Living Appliances'
]

var arr5 = [
  'Small Home Appliances', 'Irons',
  'Water Purifiers', 'Fans',
  'Air Coolers', 'Inverters',
  'Vacuum Cleaners', 'Sewing Machines',
  'Voltage Stabilizers', 'Water Geysers',
  'Immersion Rods', 'Top Brands',
  'Livpure', 'Philips',
  'Bajaj', 'IFB',
  'Eureka Forbes', 'Kaff'
]

var arr6 = [
  'Buying Guides',
  'Televisions',
  'Washing Machines',
  'Refrigerators',
  'Air Conditioners',
  'Water Purifiers',
  'Air Purifiers',
  'Chimneys',
  'Water Geysers',
  'New Launches',
  'Coocaa Smart TVs',
  'Nokia (55) 4K Android TV',
  'Mi (32) 4A Pro Android TV',
  'MarQ (43) FHD smart TV',
  'LG Refrigerators',
  'Thomson (40) 4K Smart TV',
  'Whirlpool Refrigerators',
  'Kodak (22) | (32) LED TVs'
]

var arr7 = [
  'Footwear',
  'Sports Shoes',
  'Casual Shoes',
  'Formal Shoes',
  'Sandals & Floaters',
  'Flip- Flops',
  'Loafers',
  'Boots',
  'Running Shoes',
  'Sneakers',
  "Men's Grooming",
  'Deodorants',
  'Perfumes',
  'Beard Care & Grooming',
  'Shaving & Aftershave',
  'Sexual Wellness'
]

var arr8 = [
  'Clothing', 'Top wear',
  'T-Shirts', 'Formal Shirts',
  'Casual Shirts', 'Bottom wear',
  'Jeans', 'Casual Trousers',
  'Formal Trousers', 'Track pants',
  'Shorts', 'Cargos',
  'Three Fourths', 'Suits',
  ' Blazers & Waistcoats', 'Ties',
  ' Socks', ' Caps & More',
  'Fabrics'
]

var arr9 = [
  'Winter Wear',
  'Sweatshirts',
  'Jackets',
  'Sweater',
  'Tracksuits',
  'Ethnic wear',
  'Kurta',
  'Ethnic Sets',
  'Sherwanis',
  'Ethnic Pyjama',
  'Dhoti',
  'Lungi',
  'Innerwear & Loungewear',
  'Briefs & Trunks',
  'Vests',
  'Boxers',
  'Pyjamas and Lounge Pants',
  'Thermals',
  'Night Suits',
  'Raincoats & Windcheaters'
]

var arr10 = [
  'Watches',
  'Fastrack',
  'Casio',
  'Titan',
  'Fossil',
  'Sonata',
  'Accessories',
  'Backpacks',
  'Wallets',
  'Belts',
  'Sunglasses',
  'Luggage & Travel',
  'Frames',
  'Jewellery',
  'Sports & Fitness Store'
]

var arr11 = [
  'Smart Watches',
  'Smart Bands',
  'Personal Care Appliances',
  'Trimmers',
  'Shavers',
  'Grooming Kits',
  'Featured',
  'Watches Store',
  'Footwear Club',
  'Bags & Wallet',
  'T-Shirt Store',
  'Adidas',
  'Beardo',
  'Reebok',
  'Skechers',
  'Nike'
]

var arr12 = [
  'Clothing',
  'Women Western & Maternity Wear',
  'Topwear',
  'Dresses',
  'Jeans',
  'Shorts',
  'Skirts',
  'Jeggings & Tights',
  'Trousers & Capris',
  'Lingerie & Sleepwear',
  'Bras',
  'Panties',
  'Lingerie Sets',
  'Night Dresses & Nighties',
  'Shapewear',
  'Camisoles & Slips',
  'Swim & Beachwear',
  'Party Dresses',
  'Sports Wear',
  'Winter Wear'
]
var arr13 = [
  'Clothing', 'Top wear',
  'T-shirts', 'Formal Shirts',
  'Casual Shirts', 'Bottom wear',
  'Jeans', 'Casual Trousers',
  'Formal Trousers', 'Track pants',
  'Shorts', 'Cargos',
  'Three Fourths', 'Suits',
  ' Blazers & Waistcoats', 'Ties',
  ' Socks', ' Caps & More',
  'Fabrics'
]

var arr14 = [
  'Footwear',
  'Sandals',
  'Flats',
  'Heels',
  'Wedges',
  'Shoes',
  'Sports Shoes',
  'Casual Shoes',
  'Boots',
  'Ballerinas',
  "Slippers & Flip- Flop's",
  'Watches',
  'Smart Watches',
  'Personal Care Appliances',
  'Hair Straightners',
  'Hair Dryers',
  'Epilators'
]

var arr15 = [
  'Featured', 'Forever 21',
  'Accessorize',
  'Pantaloons', 'Chemistry',
  'Lakme', 'Nivea',
  'Catwalk', 'Titan-Raga',
  'Fastrack', 'Divastri',
  'Rare Roots', 'Anmi',
  'Coins & Bars', 'Crocs',
  'Trending today!', 'Ruffles & Frills',
  'Pastel Kurtas & Kurtis', 'Designer Net Sarees'
]

var arr16 = [
  'Kitchen', ' Cookware & Serveware',
  'Pans', 'Tawas',
  'Pressure Cookers', 'Kitchen tools',
  'Gas Stoves', 'Tableware & Dinnerware',
  'Coffee Mugs', 'Dinner Set',
  'Barware', 'Kitchen Storage',
  'Water Bottles', 'Lunch Boxes',
  'Flasks', 'Casseroles',
  'Kitchen Containers', 'Cleaning Supplies'
]

var arr17 = ['Furniture Top Offers', 'Bed Room Furniture', 'Beds', 'Mattresses', 'Wardrobes', 'Living Room Furniture', 'Sofa', 'Sofa Beds', 'TV Units', 'Dining Tables & Chairs', 'Coffee Tables', 'Shoe Racks', 'Office & Study Furniture', 'Kids Room Furniture', 'DIY Furniture', 'Bean Bags', 'Collapsible Wardrobes']

var arr18 = [
  'Furnishing',
  'Bedsheets',
  'Curtains',
  'Cushions & Pillows',
  'Blankets',
  'Bath Towels',
  'Kitchen & Table Linen',
  'Floor Coverings',
  'Smart Home Automation',
  'Smart Security System',
  'Smart Door Locks',
  'Home Improvement',
  'Tools & Measuring Equipments',
  'Home Utilities & Organizers',
  'Lawn & Gardening',
  'Bathroom & Kitchen Fittings'
]
var arr19 = [
  'Home Decor',
  'Paintings',
  'Clocks',
  'Wall Shelves',
  'Stickers',
  'Showpieces & Figurines',
  'Home Lighting',
  'Bulbs',
  'Wall Lamp',
  'Table Lamp',
  'Ceiling Lamp',
  'Emergency Lights',
  'Festive Decor & Gifts',
  'Pet Supplies',
  'Dogs',
  'Cats',
  'Fish & Aquatics'
]