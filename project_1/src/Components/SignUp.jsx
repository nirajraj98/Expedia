 import React,{useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { AuthContext } from '../Context/AuthContext';

 import { useState } from "react";
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


 
 function Signup() {
    const [email,setemail]= useState("");
    const [password,setPassword]= useState("");
    const [ Surname,setSurname]= useState("");
    const [firstname,setfirstname]= useState("");

    const { handleSignUp } = useContext(AuthContext) ;
    const navigate= useNavigate();
    function signup(){
      alert("Please Login ")
      handleSignUp(email,password,Surname,firstname) ;
      navigate(`/SignIn`) ;
             
          
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
  <Container >
    <Heading >Create an account</Heading>
  <FormControl borderRadius="lg" cursor="pointer"mt={5}>
  <FormLabel>Email address</FormLabel>
  <Input type='email' onChange={(e)=>setemail(e.target.value)} value={email} id="email" placeholder="Enter a Email" size="lg" />
  <FormLabel>Enter Firstname</FormLabel>
  <Input type='text' onChange={(e)=>setfirstname(e.target.value)}   value={firstname} id="firsname" placeholder="Enter a first name" size="lg" /> 
  <FormLabel>Surname</FormLabel>
  <Input type='text'  onChange={(e)=>setSurname(e.target.value)} id="surname" value={Surname}placeholder="Enter a surname" size="lg" />
   <FormLabel >Enter password</FormLabel>
  <Input  marginBottom="10px" onChange={(e)=>setPassword(e.target.value)} type='password' id="password"   value={password}placeholder="Enter password" size="lg"/>
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
    <Box marginBottom="10px">
  <input type="checkbox"></input>
  <label >I'd like to receive travel deals, special offers and other information from Expedia via email.</label>
  </Box>
  <Box>
    <label>By creating an account, I agree to the Expedia Terms and Conditions, 
      Privacy Statement and Expedia Rewards Terms and Conditions.</label>
  </Box>
  <Button onClick={signup}w="100%"  colorScheme="blue" type="submit" size="lg">Submit</Button>

  <Box textAlign="center">
    <label textAlign="center">Already have an account? <span color="green"> Sign in</span></label>
    </Box>
  <Box textAlign="center">
    <label>or continue with</label>
  </Box>
  <Box >
  <Flex width="8%" gap="35px"  marginLeft="160px" >
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
 
 export default Signup
 
