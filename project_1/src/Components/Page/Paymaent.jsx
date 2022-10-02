import React from 'react';
import { useNavigate } from 'react-router-dom';
import {VStack,Flex,Heading,Text,Input,Box,label,Spacer,Button} from "@chakra-ui/react"
import Footer from "../Footer"
import Navbar from "../Navbar"



function Paymaent() {
  const navigate=useNavigate()
    let dos ={
        boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
        bg:"white",
        borderRadius:"5px"

    }
    const handlePayment=()=>{
      alert("Payment SucessFull")
      
      navigate("/")
    }
   
    return (
      <>
      <Navbar/>
      <VStack bg="rgb(240, 240, 240)" width="100%">
          <Box> <Heading>Review and book</Heading></Box>
          <label color="green">You've picked a winner! This hotel is rated 4.2/5</label>

       <Flex width="85%"  gap="10px" padding="30px">
        
         <VStack width="70%">
         <Box p='4'  width="100%" style={dos} bg="white" paddingBottom="30px">
         Room:2 Adults 1, Double Bed and 1 Twin Bed, Non-smoking ,Free parking , Free WiFi
    

    <Flex>
      <Box>
      <label>First name*</label>
       <Input width="90%"variant='outline' placeholder='(e.g.Jhon)' size="md" />
       
       </Box>

       <Box>
      <label>First name*</label>
       <Input width="90%"variant='outline' placeholder='(e.g.Smith' size="md" />
       </Box>
      </Flex>
      
      <Flex>
      <Box>
      <label>Mobile phone number*</label>
       <Input width="90%"variant='outline' placeholder='(e.g.Jhon)' size="md" />
       </Box>

       <Box>
      <label><br/></label>
       <Input width="90%"variant='outline' placeholder='So the Property CAN RAECH' size="md" />
       </Box>
      </Flex>
      <Text>Receive text alerts about this trip (free of charge).</Text>
  </Box>
  
  
<Box p='4'  width="100%" style={dos} bg="white" paddingBottom="30px">
  <Text paddingBottom="20px">₹0.00 due now. Payment information is only needed to hold your reservation.</Text>
    <Box>
      <Flex gap="10px" paddingBottom="20px">
      <img width="5%" src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"></img>
      <img  width="5%"src="https://a.travel-assets.com/egds/marks/payment__visa.svg"></img>
     </Flex>
     <Box paddingBottom="20px">
     <label>Name on Card*</label>
     <Input width="70%"></Input>
     </Box>
     <Box>
     <label>Debit/Credit card number*</label>
     <Input width="40%" paddingBottom="20px"></Input>
     </Box>
     <Flex gap="20px" paddingBottom="20px">
      <Box>

     <select>
        <option>Month</option>
        <option>jan</option>
        <option>Feb</option>
        <option>March</option>
        <option></option>
        <option></option>
        <option></option>

     </select>
      </Box>

      <Box>

<select>
   <option>Year</option>
   <option>2022</option>
   <option>2021</option>
   <option>2020</option>
   <option></option>
   <option></option>
   <option></option>

</select>
 </Box>


     </Flex>
     <Box>
     <label>Security code*</label>
     <Input width="15%" paddingBottom="20px"></Input>
     </Box>
    </Box>
</Box>border
         <Box p='4'  width="100%" style={dos} bg="white" paddingBottom="30px">
          <Heading>Important information about your booking</Heading>
          <ul>
            <li>Cancellations or changes made after 18:00 (property local time) on 12 Oct 2022 or no-shows are subject to a property fee equal to 100% of the total amount paid for the reservation.</li>
            <li>To make arrangements for check-in please contact the property ahead of time using the information on the booking confirmation. If you are planning to arrive after noon please contact the property in advance using the information on the 
              booking confirmation. Guests must contact the property in advance for check-in instructions. Front desk staff will greet guests on 
              arrival.
            </li>
            <li>
            Please note that BEX Travel Asia Pte Ltd will not issue a tax invoice. You will receive a commercial receipt for the purpose of the transaction. Upon
             request, a tax invoice would be issued by the hotel.
            </li>
            
          </ul>
          
          <Button onClick={handlePayment}width="29%" bg="yellow">Complete Booking</Button>



         </Box>
  
        
          
         </VStack>
  
        
  
          
        <Spacer />
          <Box p='4'  width="30%" >
         <Box p='4'  width="100%"  style={dos} bg="white" paddingBottom="30px">
           
           <Heading  maxW="container.xl"
            mt="50px"
            borderRadius="10px"
            bgImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            padding="30px"
            marginBottom="50px"
            color="white"
            textAlign="center"
            >hotel</Heading>
             <Heading paddingBottom="30px">
              Price Detail
             </Heading>
             <Flex paddingBottom="20px">
              <Text paddingBottom="20px">Pay at Property</Text>
              <Text >$ 931</Text>

             </Flex>
         </Box>
         <Box p='4'  width="100%"  style={dos} bg="white" paddingBottom="30px"></Box>

          
          </Box>
  
          </Flex>
  
       </VStack>
       <Footer />
   </>
  
   
  )
}

export default Paymaent
