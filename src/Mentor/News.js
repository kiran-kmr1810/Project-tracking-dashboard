import { useState } from 'react';
import { Box, HStack, Stack, Text, Button, VStack } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons';
import Modal from 'react-modal';

import './News.css'
import Newsblock from './Newsblock';

function News() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
    <div>
        <Box pos="fixed" top="70px" 
        overflowY="auto" right ="20px" h="250px" w="350px" 
        bg="#F3FDFB" borderColor="#080E2C" border="2px"
        css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: "#080E2C",
              borderRadius: '24px',
            },
          }}>
            <Stack>
                <Box h="27.25px" w="100%" bg="#080E2C" paddingLeft="5px">
                  <HStack float="left" paddingLeft="5px">
                  <img src="https://img.icons8.com/fluency-systems-filled/20/ffffff/news.png"/>
                  <Text fontWeight="bold" color="white"> NEWS </Text>
                  </HStack>
                  <Button float="right" onClick={() => setModalIsOpen(true)} h="25px" marginRight="2" fontWeight="normal" color="black" size="md" colorScheme="teal" backgroundColor="#44EABB"> Broadcast Info </Button>
                </Box>
                <Newsblock/>
            </Stack>
        </Box>

        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalIsOpen(false)}
            style={
                {
                    overlay: {
                        position: 'fixed',
                        margin: 0,
                        backgroundColor: 'rgba(255,255,255,0.75)'
                    },
                    content: {
                        top: '50%',
                        bottom: 'auto',
                        left: '50%',
                        right: '50%',
                        minWidth: '25rem',
                        borderRadius: '20px',
                        backgroundColor: "#080E2C",
                        transform: 'translate(-50%, -50%)',
                        padding: '40px'
                    }
                }
            }
            >
            <Stack>
                    <Box>
                        <Text float="left" fontSize="27px" color="white"> Broadcast Information </Text>
                        <CloseIcon float="right" marginTop="15px" color="white" onClick={() => setModalIsOpen(false)}>Close</CloseIcon>
                    </Box>
                    <form>
                        <input className="title" type="text" placeholder="Title"></input>
                        <textarea className="text-area" rows="5"></textarea>
                        <select className="team">
                            <option value="Team-21">Team-21</option>
                            <option value="Team-40">Team-40</option>
                            <option value="Both">All</option>
                        </select>

                        <Button marginLeft="100" fontWeight="normal" color="black" size="md" colorScheme="teal" backgroundColor="#44EABB"> Broadcast </Button>
                    </form>
                </Stack>
        </Modal>
    </div>
  );
}

export default News;