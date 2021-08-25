import React from 'react';
import {
    Box,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Portal,
    Text,
    HStack,
    Stack,
} from '@chakra-ui/react'

function Projectbox() {
    return(
        <div>
            <Popover trigger='hover' placement="right">
            <PopoverTrigger>
            <Box
            as="button"
            fontWeight="bold"
            borderRadius="md"
            bgColor = "#555B53"
            shadow="md"
            _hover={{bg:"Black"}}
            h = "100%"
            w = "200px">
            <Box
                mt="1"
                fontWeight="bold"
                fontSize='xl'
                as="h2"
                lineHeight="tight"
                color="white"
                isTruncated
                >
                10890
                </Box>
                <Box
                mt="1"
                as="h5"
                fontSize='sm'
                lineHeight="tight"
                color="#E0DED2"
                isTruncated
                >
                Dept: CSE
                </Box>
                <Box
                mt="1"
                as="h4"
                fontSize='sm'
                lineHeight="tight"
                color="#E0DED2"
                isTruncated
                >
                Area: Machine Learning
                </Box>
                <Box
                mt="1"
                as="h4"
                fontSize='sm'
                lineHeight="tight"
                color="#E0DED2"
                isTruncated
                >
                Year: 2021
                </Box>
            </Box>
            </PopoverTrigger>
            <Portal>
            <PopoverContent bgColor='#555B53'>
              <PopoverArrow />
              <PopoverHeader>
              <Text color='white' fontSize='s' fontWeight='bold'>
              10890
              </Text>
            </PopoverHeader>
              <PopoverBody>
                <Box>
                    <Stack spacing='3px'>
                    <HStack spacing='1px'>
                    <Text color='#E0DED2' fontSize='xs' fontWeight='bold'>DETAILS</Text>
                    <Text color='#E0DED2' fontSize='xs' fontWeight='bold'>: Blah blah</Text>
                    </HStack>
                    </Stack>
                </Box>
              </PopoverBody>
              <PopoverFooter>
              <Text color='white' fontSize='s' fontWeight='bold'>
                  2021-2022
              </Text>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
          </Popover>
        </div>
    );
}

export default Projectbox;