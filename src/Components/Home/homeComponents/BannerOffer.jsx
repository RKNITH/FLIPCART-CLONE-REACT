import { Box, Grid, GridItem, Img, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

function BannerOffer() {
    return (
        <div>
            <Box m="15px"> 
                <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
                    <Box>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/38fb516019105ea8.jpg?q=50"/>
                    </Box>
                    <Box>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/b32634ad7381ce10.jpg?q=50" alt="offerBaner"/>
                    </Box>
                    <Box>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/8c204afadfc6ce5e.jpg?q=50" />
                    </Box>
                </SimpleGrid>
            </Box>
        </div>
    );
}

export default BannerOffer;