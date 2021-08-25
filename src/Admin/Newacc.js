import React from 'react';
import Sidebar from '../Components/Sidebar'
import Adminnav from '../Components/Admin_nav'
import Sidedesign from '../Components/Sidedesign';
import { Box,HStack ,FormControl,FormLabel,Input,Select,Text,Button,Center} from '@chakra-ui/react';
function Newacc() {
  return (
    <div>
      <Sidedesign/>
      <Adminnav/>       
      <Box pos="fixed" px="100px" py="10px" left="330px" top="30px" height="100vh" w="100%" bg="#F6F3EE">
        
      <HStack p='40px' spacing='150px'>
        <Box w='600px' h='100%' p='20px' border='2px' bgColor='blackAlpha.100'>
        <Box>
        <Text 
        fontSize= '20' 
        fontWeight='bold'
        color='black'
        >ADD NEW ACCOUNT</Text>
        <Box bgColor='black' h='2px' w='100%'/>
        </Box>
        <Box py='30px'>
        <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Email id"/>
        </FormControl>

        <FormControl id="password" isRequired>
        <FormLabel color='#555B53'>Password</FormLabel>
        <Input  placeholder="password"/>
        </FormControl>

        <FormControl id="role">
        <FormLabel>Role</FormLabel>
        <Select placeholder="choose role">
            <option>Mentor</option>
            <option>Student</option>
        </Select>
        </FormControl>

        <FormControl id="id" isRequired>
        <FormLabel color='#555B53'>ID</FormLabel>
        <Input placeholder="ID"/>
        </FormControl>
        <Center>
        <Button bgColor = "#555B53" 
                width='full' 
                color="white"
                mt={4}
                _hover={{
                    bg:"black",
                    color:"white"
                    }}
                >
            ADD USER
        </Button>
        </Center>
        </Box>
        </Box>
        </HStack>
      </Box>
      <Sidebar/> 
    </div>
  );
}

export default Newacc;