import React from 'react'
import { Flex,Spacer,Box,Button,VStack} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel,Grid } from '@chakra-ui/react'
import {Link} from "react-router-dom"

function Navbar() {
  const tabs={
    color:"#343B53",
    fontSize:"0.875rem",
    fontWeight:" 500",
    lineHeight:"1.125rem",
  }
const sec={
 
    display:"none",
    position:"absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    // zIndex: 1,
  
  
}
  return (
    <>
    <VStack border="1px solid grey" width="100%" marginBottom="40px">
   <Flex width="90%" margin="auto" >
   <Box p='4' >
    <Flex gap="27px">
    <img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"></img>
    <select margin="440px">
       <option margin="440px">More Travel</option>
       <option>Stays</option>
       <option>Flights</option>
       <option>Cars</option>
       <option>Packages</option>
       <option>Holiydays Activity</option>
    </select>

    </Flex>
   </Box>
    <Spacer />

    {/* //2nd */}
  <Box p='4'> 
  
  <Tabs>
  <TabList gap="20px">
    <Tab style={tabs}>English</Tab>
    <Tab  style={tabs}>Support</Tab>
    <Tab  style={tabs}>Trips</Tab>
    <Tab  style={tabs}>Bell</Tab>
    <Tab  style={tabs}>Sign in</Tab>
  </TabList>
  <TabPanels>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel> 
    <TabPanel>
    <div className="dropdown-content">
      <Grid  width="30%">
        <h1>Save an average</h1>
        <Link  to='/' end></Link>
        <Link to='/signin'>Login</Link>
        <Link to='/signup'>Create a account</Link>

      </Grid>
    </div>
    </TabPanel>
  </TabPanels>


</Tabs>
  </Box>
   </Flex>
   </VStack>

    </>
  )
}

export default Navbar

 