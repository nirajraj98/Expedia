import {
    Container,
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Input,
    InputGroup,
    InputLeftAddon,
    VStack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
    useMediaQuery,
    Flex,
    Text,
    useCounter,
    HStack,
    Spinner,
    Heading,
    Image
   
  } from "@chakra-ui/react";
  import Footer from "./Footer"
  import Navbar from "./Navbar"
  import Search from "./Search"

  import { useState, useEffect } from "react";
  import { Link, useNavigate } from "react-router-dom";
  // import { BoxShadow, hoverColor } from "../Variables";
  
  function Main() {
    const dan={
        width: "970px",
        height: "90px",
        marginBottom: "40px"
      }
    return(
    <>
    <Navbar />
 

     <Search />
    
     <Flex width="85.5%"
     margin="auto"
     border="1px solid grey"
     textAlign="center"
   
     >
        {/* //1st */}
        <Box width="35%">
            <img    src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg"></img>
        </Box>
      
        <Box width="45%">
            <Box paddingBottom="20px">
                <Heading>Our app takes you further</Heading>
                <Container>When you book on the app you can save even more — up to 20% on select hotels while earning double the points with every booking. With these 
                    app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</Container>
            </Box>
            <Box>
                <Heading  paddingBottom="30px"  size="30px">Text yourself a download link for easy access</Heading>
                <Box>
                <Flex gap="5px" width="90%" margin="auto">
                
                <Input type="tel" placeholder="Country Code"size='lg'></Input >
                <Input type="tel" placeholder="Enter Number" size='lg'></Input>
                <Input type="submit"  size='lg' bg="blue" color="white"></Input>
                </Flex>
                    <p>
                  By providing your number, you agree to receive a one-time automated text message with a link to
                   get the app. Standard text message rates may apply.
                    </p>
                </Box>

                
                        
                
            </Box>
        </Box>
        {/* //3rd */}
        <Box width="20%"  >
            <img  width="70%" margin="auto" paddingLeft="50px"src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_BNA_HP.png"></img>
            <Text >Scan QR Code</Text>
        </Box>

    </Flex>
   


     

     <VStack >
       {/* 3 */}
          <Container
            // boxShadow={BoxShadow}
            maxW="container.xl"
            mt="50px"
            borderRadius="10px"
            bgImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            padding="30px"
            marginBottom="50px"
            

          >
            <Flex
              h="400px"
              direction="column"
              gap={10}
              justify="center"
              align="center"
              p={5}
              textAlign="center"
              color="white"
              textShadow="0 0 20px black"
              fontWeight="bold"
              width="30%"
            >
              <Box>
                <Heading as="h1" color="white">
                  Save instantly with Expedia Rewards
                </Heading>
              </Box>
               <Box>
                <Text color="white" fontSize="xl">
                  You can enjoy access to perks like Member Prices, saving you
                  10% or more on select hotels. Terms may apply.
                </Text>
              </Box>
              
               <Box>
                <Button
                    mb="5%"
                    mt="2%"
                    w="200px"
                    colorScheme="blue"
                    size="lg"
                  >
                    See Member Prices
                  </Button>
               </Box>  
            </Flex>
          </Container>
          {/* 3 */}
         
            <Box >
                <Image style={dan}  src='https://tpc.googlesyndication.com/simgad/4477719789317755579?' alt='Dan Abramov' />
            </Box>
       
          {/* 4 */}
          <Container
            // boxShadow={BoxShadow}
            marginBottom="30px"
            maxW="container.xl"
            borderRadius="10px"
            bgImage="url('https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            mt={"50px"}
            h={"300px"}
          >
            <Flex
              h="400px"
              direction="column"
              justify="center"
              align="center"
              p={5}
              textAlign="center"
              color="white"
              textShadow="0 0 20px black"
              fontWeight="bold"
              gap={"30px"}
            >
              <Box><Heading as="h3" color="white" fontSize="20px">Plan ahead and save</Heading></Box>
              <Box><Heading as="h3" color="white" fontSize="20px">Book 60 days in advance for 20% off seletct stays.</Heading> </Box>
            </Flex>
          </Container>
          {/* //6 */}
          <Container >
            <Heading fontSize="15px"textAlign="center">Explore a world of travel with Expedia</Heading>
            <Text textAlign="center" fontSize="13px" margin="auto" >Discover new places and experinces</Text>
          </Container>
          <div>
           <Footer />
          </div>


        

</VStack>
          

     </>
    )
   
  };
  
  
  export default Main;
  