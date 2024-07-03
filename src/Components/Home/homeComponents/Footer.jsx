import { GridItem, Grid, Text, Box, Img } from '@chakra-ui/react';
import React from 'react';

function Footer() {
    return (
        <div>
            <Box  >
                <Box display={"flex"} bg="rgb(22,34,55)"  borderBottom="1px solid grey" >
                    <Box w="55%" >
                        <Grid templateColumns='repeat(4, 1fr)' bg="rgb(22,34,55)" color="white" padding={{ base: '20px', md: '30px', lg: '40px' }} fontSize={{ base: '7px', md: '10px', lg: '13px' }} gap="15px">

                            <GridItem>
                                <Text color={"#878787"} fontWeight="500"> ABOUT</Text>
                                <Text pt="8px" pb="4px">Contact Us </Text>
                                <Text pt="4px" pb="4px"> About Us</Text>
                                <Text pt="4px" pb="4px">  Careers</Text>
                                <Text pt="4px" pb="4px">Flipkart Stories</Text>
                                <Text pt="4px" pb="4px">Press </Text>
                                <Text pt="4px" pb="4px"> Flipkart Wholesale</Text>
                                <Text pt="4px" pb="4px"> Corporate Information </Text>

                            </GridItem>
                            <GridItem>
                                <Text color={"#878787"} fontWeight="500"> HELP</Text>
                                <Text pt="4px" pb="4px">Payments</Text>
                                <Text pt="4px" pb="4px"> Shipping</Text>
                                <Text pt="4px" pb="4px"> Cancellation & Returns</Text>
                                <Text pt="4px" pb="4px">FAQ</Text>
                                <Text pt="4px" pb="4px">Report </Text>
                                <Text pt="4px" pb="4px"> Infringement</Text>

                            </GridItem>
                            <GridItem>
                                <Text color={"#878787"} fontWeight="500"> POLICY</Text>
                                <Text pt="4px" pb="4px">Return Policy </Text>
                                <Text pt="4px" pb="4px"> Security</Text>
                                <Text pt="4px" pb="4px">  Privacy</Text>
                                <Text pt="4px" pb="4px">Sitemap</Text>
                                <Text pt="4px" pb="4px"> EPR </Text>
                                <Text pt="4px" pb="4px"> Flipkart Wholesale</Text>
                                <Text pt="4px" pb="4px"> Corporate Information </Text>

                            </GridItem>
                            <GridItem>
                                <Text color={"#878787"} fontWeight="500"> SOCIAL</Text>
                                <Text cursor={"pointer"}  pt="4px" pb="4px">Facebook  </Text>
                                <Text cursor={"pointer"}  pt="4px" pb="4px">  Twitter</Text>
                                <Text cursor={"pointer"}  pt="4px" pb="4px">  YouTube</Text>


                            </GridItem>

                        </Grid>
                    </Box>
                    <Box w="45%">
                        <Grid templateColumns='repeat(2, 1fr)' gap="15px"  color="white" padding={{ base: '20px', md: '30px', lg: '40px' }} fontSize={{ base: '7px', md: '10px', lg: '13px' }}>
                            <GridItem>
                                <Text color={"#878787"} fontWeight="500"> Mail Us:</Text>
                                <Text>Flipkart Internet Private Limited, </Text>
                                <Text> Buildings Alyssa, Begonia &</Text>
                                <Text>  Clove Embassy Tech Village,</Text>
                                <Text>Outer Ring Road, Devarabeesanahalli Village,</Text>
                                <Text>Bengaluru, 560103, </Text>
                                <Text> Karnataka, India</Text>

                            </GridItem>
                            <GridItem>
                                <Text color={"#878787"} fontWeight="500"> Registered Office Address:</Text>
                                <Text>Flipkart Internet Private Limited,</Text>
                                <Text> Buildings Alyssa, Begonia &</Text>
                                <Text>  Clove Embassy Tech Village,</Text>
                                <Text>Outer Ring Road, Devarabeesanahalli Village,</Text>
                                <Text>Bengaluru, 560103, </Text>
                                <Text>Karnataka, India</Text>
                                <Text> CIN : U51109KA2012PTC066107 </Text>
                                <Text display={"flex"} > Telephone : <Text pl="5px" color='blue'> 044-45614700</Text></Text>

                            </GridItem>
                        </Grid>
                    </Box>
                </Box>

            
                <Box x p="20px" bg="rgb(22,34,55)" display={"flex"} alignItems="center">
                    <Box w="73%">
                        <Grid  templateColumns='repeat(5, 1fr)' color={"white"} fontSize={{ base: '7px', md: '10px', lg: '13px' }}>
                            <GridItem  cursor={"pointer"}  display={"flex"} alignItems="center"> <Img width={{ base: '7px', md: '12px', lg: '15px' }} h="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K" alt="icon" /> <Text ml="5px"> Become a Seller</Text></GridItem>
                            <GridItem  cursor={"pointer"} display={"flex"} alignItems="center"> <Img width={{ base: '7px', md: '12px', lg: '15px' }} h="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="icon" /> <Text ml="5px" > Advertise</Text> </GridItem>
                            <GridItem cursor={"pointer"}  display={"flex"} alignItems="center"> <Img width={{ base: '7px', md: '12px', lg: '15px' }} h="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="logo" />  <Text ml="5"> Gift Cards</Text>  </GridItem>
                            <GridItem  cursor={"pointer"} display={"flex"} alignItems="center"> <Img width={{ base: '7px', md: '12px', lg: '15px' }} h="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="icon" /><Text ml="5px"> Help Center</Text>  </GridItem>
                            <GridItem cursor={"pointer"} > 2007-2022 Flipkart.com</GridItem>
                        </Grid>
                    </Box>
                    <Box w="28%">
                        <Img ml="5px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" />

                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Footer;