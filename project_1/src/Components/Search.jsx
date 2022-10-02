import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { VStack,Tabs, TabList, TabPanels, 
  Tab, TabPanel ,Stack,Input,
  Flex,
  Box
} from '@chakra-ui/react'

function Search() {
  const navigate=useNavigate()
  const tabs={
    color:"#343B53",
    fontSize:"0.875rem",
    fontWeight:" 500",
    lineHeight:"1.125rem",
  }
  const searc=()=>{
    navigate("/detail")

  }
  return (
    <>
    <VStack width="85%" border="1px solid grey" margin="auto" 
    borderRadius="10px"
    padding="40px"
    marginBottom="30px"
    >
    <Tabs>
  <TabList gap="33px">
    <Tab style={tabs}>Stays</Tab>
    <Tab style={tabs}>Flight</Tab>
    <Tab style={tabs}>Car</Tab>
    <Tab style={tabs}>Packages</Tab>
    <Tab style={tabs}>Things To Do</Tab>

    
  </TabList>


  <TabPanels>
{/* next */}

    <TabPanel>
  <Stack spacing={3}>
  <Flex gap="10px">
  <Input width="90%"variant='outline' placeholder='Going TO' size="lg" />
  <Input  width="25%"variant='outline' type="date" placeholder='CkeckIn'size="lg" />
  <Input width="25%"variant='outline'type="date" placeholder='Checkout'size="lg" />
  <Input  width="50%"variant='outline' placeholder='Travellers' size="lg" />

</Flex>
  <Box  width="30%" marginLeft="auto" >
    <Input type="submit"bg="blue"  onClick={searc}  color="white" size="lg" value="Search"></Input>
  </Box>
</Stack> 
    </TabPanel>
{/* next */}
    <TabPanel>
    <Stack spacing={3}>
  <Flex gap="10px">
  <Input width="90%"variant='outline' placeholder='Going TO' size="lg" />
  <Input  width="25%"variant='outline' type="date" placeholder='CkeckIn'size="lg" />
  <Input width="25%"variant='outline'type="date" placeholder='Checkout'size="lg" />
  <Input  width="50%"variant='outline' placeholder='Travellers' size="lg" />

</Flex>
  <Box  width="30%" marginLeft="auto" >
    <Input type="submit"bg="blue" onClick={searc} color="white" size="lg" value="Search"></Input>
  </Box>
</Stack> 
    </TabPanel>

{/* next */}
  
    <TabPanel>
    <Stack spacing={3}>
  <Flex gap="10px">
  <Input width="90%"variant='outline' placeholder='Going TO' size="lg" />
  <Input  width="25%"variant='outline' type="date" placeholder='CkeckIn'size="lg" />
  <Input width="25%"variant='outline'type="date" placeholder='Checkout'size="lg" />
  <Input  width="50%"variant='outline' placeholder='Travellers' size="lg" />

</Flex>
  <Box  width="30%" marginLeft="auto" >
    <Input type="submit"  onClick={searc}bg="blue"  color="white" size="lg" value="Search"></Input>
  </Box>
</Stack> 
    </TabPanel>
{/* next */}
  
    <TabPanel>
    <Stack spacing={3}>
  <Flex gap="10px">
  <Input width="90%"variant='outline' placeholder='Going TO' size="lg" />
  <Input  width="25%"variant='outline' type="date" placeholder='CkeckIn'size="lg" />
  <Input width="25%"variant='outline'type="date" placeholder='Checkout'size="lg" />
  <Input  width="50%"variant='outline' placeholder='Travellers' size="lg" />

</Flex>
  <Box  width="30%" marginLeft="auto" >
    <Input  onClick={searc} type="submit"bg="blue"  color="white" size="lg" value="Search"></Input>
  </Box>
</Stack> 
</TabPanel>
{/* next */}

  <TabPanel>
  <Stack spacing={3}>
  <Flex gap="10px">
  <Input width="90%"variant='outline' placeholder='Going TO' size="lg" />
  <Input  width="25%"variant='outline' type="date" placeholder='CkeckIn'size="lg" />
  <Input width="25%"variant='outline'type="date" placeholder='Checkout'size="lg" />
  <Input  width="50%"variant='outline' placeholder='Travellers' size="lg" />

</Flex>
  <Box  width="30%" marginLeft="auto" >
   <Link to="/detal">
    <Input onClick={searc}type="submit"bg="blue"  color="white" size="lg" value="Search"></Input>
   </Link>
  </Box>
</Stack> 
  </TabPanel>
  </TabPanels>
</Tabs>
</VStack>
    </>
  )
}

export default Search
