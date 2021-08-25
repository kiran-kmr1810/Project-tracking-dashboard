import React from 'react';
import { Box, VStack ,Text, Button, HStack, Center } from "@chakra-ui/react"

function Sidebar() {
  return (
    <div>
    <Box pos="fixed" left="0" bg= "#555B53" top="0px" w="350px" h="100vh" borderRadius="3xl">
        <Text pos="fixed" top="20px" left="25px" fontSize="30" fontWeight="bold"
                fontFamily="heading" color="#f0f5f9">
        ADMIN DASHBOARD
        </Text>
        <Box 
        pos="fixed" top="100px" borderRadius="2xl" w="250px" 
        left="50px" h="300px" bg="#BDBBAD" py="40px">
            <VStack spacing="50px">
                <HStack>
                <img alt="icon" src="https://img.icons8.com/windows/32/000000/create-new.png"/>
                <Button  bg="#BDBBAD" w="170px" _hover={{color:"#555B53"}} 
                fontSize="20" fontWeight="bold" alignContent="flex-start"
                fontFamily="heading" color="black">
                    Create New Project
                </Button>
                </HStack>
                <HStack>
                <img alt="icon" src="https://img.icons8.com/material-outlined/24/000000/add.png"/>
                <Button bg="#BDBBAD" w="170px" _hover={{color:"#555B53"}} 
                fontSize="20" fontWeight="bold" 
                fontFamily="heading" color="black">
                    Add New Account
                </Button>
                </HStack>
                <HStack>
                <img alt="icon" src="https://img.icons8.com/material-outlined/24/000000/megaphone.png"/>
                <Button bg="#BDBBAD" w="170px" maxH="40px" _hover={{color:"#555B53"}}
                fontSize="20" fontWeight="bold" alignItems="center"
                fontFamily="heading" color="black">
                    Broadcast An Info
                </Button>
                </HStack>
                

            </VStack>
        </Box>
        <Box pos="fixed" py="30px" top="450px" borderRadius="2xl" w="250px" left="50px" h="150px" bg="#BDBBAD">
        <Center>
        <img alt="icon" src="https://img.icons8.com/color/96/000000/rebalance-portfolio--v1.png"/>
        </Center>
        </Box>
    </Box>
    </div>
  );
}

export default Sidebar;