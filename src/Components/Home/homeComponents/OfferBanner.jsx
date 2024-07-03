import { Box, Img } from '@chakra-ui/react';
import React from 'react';

function OfferBanner() {
    return (
        <div>
            <Box p='6' boxShadow='xs' rounded='md' bg='white' display={{base:"none", md:"block", lg:"block"}} >

                <Img h={{ base: '40px', md: '70px', lg: '110px' }} w="96%" m="auto" mt="-20px" mb="-20px" src="https://rukminim1.flixcart.com/fk-p-flap/2666/230/image/dc6c21381925668e.jpg?q=50" alt="offerBanner" />
            </Box>
        </div>
    );
}

export default OfferBanner;