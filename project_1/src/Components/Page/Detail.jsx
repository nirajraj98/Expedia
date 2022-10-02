import React from 'react'
import {VStack,Input,Text,Flex,Grid,GridItem,Spacer,TabPanel,Stack,Heading} from "@chakra-ui/react"
import {Box,Badge} from "@chakra-ui/react"
import db from "./db.json"
import Navbar from "../Navbar"
import Footer from "../Footer"
import {Link} from "react-router-dom"


function Detail() {
    let dos ={
        // boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
        bg:"white",
        borderRadius:"5px"

    }
  return (
  <>
  <Navbar />
  <Flex width="85%" paddingBottom="20px" margin="auto">
  <Flex gap="10px">
  <Input width="90%"variant='outline' placeholder='Going TO' size="lg" />
  <Input  width="90%"variant='outline' type="date" placeholder='CkeckIn'size="lg" />
  <Input width="90%"variant='outline'type="date" placeholder='Checkout'size="lg" />
  <Input  width="90%"variant='outline' placeholder='Travellers' size="lg" />

</Flex>
  <Box  width="18%" >
    <Input type="submit"bg="blue"  color="white" size="lg" value="Search"></Input>
  </Box>
  
  </Flex> 

  <Box width="85.5%" border="1px solid grey" margin="auto">
  <Flex gap="20px">
    {/* 1 */}
  <Box  bg='rgb(220,220,220)' width="25%">
  <Box  width="100%"  style={dos} bg="white" marginBottom="30px" borderRadius="1px solid grey">
    <img width="100%" src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=&size=600x400&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C21.620812,87.50542%7C21.651731,87.65727%7C21.6488,87.650607%7C21.65256,87.66987%7C21.62791,87.52318%7C21.625631,87.503833%7C21.625551,87.529185%7C21.651601,87.658205%7C21.623419,87.500204%7C21.623936,87.499181&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=FnGBhs-8834HI1AdSW2uUkBLtoo="></img>
     <Text textAlign="center">View in a Map</Text>
    </Box>
  <Box  width="100%"  style={dos} bg="white" marginBottom="30px" padding="20px">
    <Box margin="auto" textAlign="center" gap="10px">
    <label >Search by property name</label>
    <Input width="90%"variant='outline' placeholder='Going TO' size="lg" />

    </Box>

  </Box>
  <Box  width="100%"  style={dos} bg="white" marginBottom="30px">
   <Heading size="30px">Filter By</Heading> 
   <Box padding="19px">
    <label>Popular filters</label>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>Digha Beach</label>
    </Flex>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>Breakfast included</label>
    </Flex>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>Hot tub</label>
    </Flex>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>All-inclusive</label>
    </Flex>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>Spa</label>
    </Flex>
   </Box>

   <Box padding="10px">
    <label>Price per night</label>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>Less than ₹2,000</label>
    </Flex>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>₹2,000 to ₹4,000</label>
    </Flex>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>₹4,000 to ₹8,000</label>
    </Flex>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>₹8,000 to ₹11,000</label>
    </Flex>
    <Flex gap="3px">
    <input type="checkbox" />
    <label>Greater than ₹11,000</label>
    </Flex>
   </Box>
  </Box>
  <Box  width="100%"  style={dos} bg="white" paddingBottom="30px">
  <Box padding="10px">
    <label>Popular locations</label>
    <Flex gap="3px">
    <input type="radio" />
    <label>Amarabati Park</label>
    </Flex>
    <Flex gap="3px">
    <input type="radio" />
    <label>Digha Science Centre</label>
    </Flex>
    <Flex gap="3px">
    <input type="radio" />
    <label>Digha Science Centre</label>
    </Flex>
   </Box>
  </Box>
  {/* <Box  width="100%"  style={dos} bg="white" paddingBottom="30px"></Box> */}
  </Box>
  {/* /2 */}
  <Box p='4' bg='rgb(220,220,220)' width="55%">
  <Box p='4'  width="100%"  style={dos} bg="white" paddingBottom="30px"></Box>
  <Box p='4'  width="100%"  style={dos} bg="white" paddingBottom="30px">
  {
            db.map(Detail=>{
                return (
                  
                  <Flex  gap="30px"width="100%" margin="auto" style={dos} marginBottom="30px" padding="10px" >
                    <Box >
                      <Link to="/payment"><img src={Detail.img}></img>
                      </Link> 
                    </Box>
                    <Box  width="30%">
                        <Box>
                            <Box marginBottom="50%">
                                <Heading size="20px">{Detail.hotel_name}</Heading>
                                <Text>{Detail.location}</Text>
                            </Box>
                            <Box>
                                <Text>{Detail.niraj}</Text>
                                <Text>{Detail.Review}</Text>
                            </Box>
                        </Box>

                    </Box>
                    <Box  width="30%" >
                        <Box margin="auto" marginLeft="80%"
                        paddingBottom="40%"
                        ></Box>
                        <Box>
                        <Stack 
                        marginLeft="6%" 
                        direction='row'
                        >  
                        <Box>
                            <Badge 
                            padding="8px"
                            variant='subtle'
                             colorScheme='green'
                             paddingRight="10px"
                             >{Detail.bagdge}
                             </Badge>
                            <Text>{` $ ${Detail.price}`}</Text>

                        </Box>
                        </Stack>
                        </Box>
                        
                    </Box>
                  </Flex>
                )
            })
        }
  </Box>


  </Box>
  <Spacer />

  {/* 3 */}
  <Box p='4' bg='rgb(220,220,220)' width="15%">
    <img src="https://tpc.googlesyndication.com/simgad/17447823249981941085?"></img>
  </Box>
</Flex>
  </Box>

<Footer />

  </>
      
  )
 }

export default Detail;
