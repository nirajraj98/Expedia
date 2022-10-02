import React from 'react'
import { useState,useContext } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

// import { useState } from "react";
import {
Input,
FormControl,
FormLabel,
 Button,
 Heading,
 useMediaQuery,
 Container,
 Box,
 Text,
 Flex,
} from "@chakra-ui/react";


function SignIn() {
  
  const { state } = useContext(AuthContext) ;
  const [email,setemail]= useState("");
  const [password,setPassword]= useState("");
  const navigate= useNavigate();
  function logi(){
          if(state.email===email && state.password===password){
          alert("Login successfully");
          navigate(`/`) ;
         }
         else{
          // alert("Incorrect name and password")
          alert("Login successfully");

          navigate(`/`) ;
         }
     }
 
  

  return (
 <>
  <Flex border="1px solid grey" marginBottom="40px" h="60px">
 <Text>Heading</Text>

 <Container>
 <Box >
   <img  margin="100px" width="30%" src="https://www.expedia.co.in/_dms/interstitial/logo.svg?locale=en_GB&siteid=27"></img>
 </Box>
 </Container>
 </Flex>


{/* //down art */}
 <Container  width="30%">
   
 <FormControl borderRadius="lg" cursor="pointer"mt={5} >
 <FormLabel>Email address</FormLabel>
 <Input type='email' onChange={(e)=>setemail(e.target.value)} placeholder="Enter a Email" size="lg" />

  <FormLabel >Enter password</FormLabel>
 <Input onChange={(e)=>setPassword(e.target.value)} marginBottom="10px" type='password' placeholder="Enter password" size="lg" />
 <Box  marginBottom="10px">
 <input type="checkbox"></input>
 <label>Keep me signed in</label>
 </Box>
 <Box  marginBottom="10px">
   <Text fontSize="13px">
   Selecting this checkbox will keep you signed into your account on 
   this device until you sign out. Do not select this on shared devices.
  </Text>
   </Box>
  
 <Box>
   <label>By creating an account, I agree to the Expedia Terms and Conditions, 
     Privacy Statement and Expedia Rewards Terms and Conditions.</label>
 </Box>
 <Button w="100%" mt={4} onClick={logi} colorScheme="blue" type="submit" size="lg">Submit</Button>

 <Box textAlign="center">
   <label textAlign="center">Don't have an account? <span color="green">Create one</span></label>
   </Box>
 <Box textAlign="center">
   <label>or continue with</label>
 </Box>
 <Box >
 <Flex width="8%" gap="35px"  marginLeft="130px"  >
   <img src="https://a.travel-assets.com/egds/marks/apple.svg"></img>
   <img src="https://a.travel-assets.com/egds/marks/facebook.svg"></img>
   <img src="https://a.travel-assets.com/egds/marks/google.svg"></img>

 </Flex>

 </Box>
</FormControl>
</Container>

 </>
  )
}

export default SignIn
