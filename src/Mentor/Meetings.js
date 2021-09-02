import { useState } from 'react';
import { Box, HStack, Stack, Text, Button, VStack } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons';
import Modal from 'react-modal';

import Meetingblock from './Meetingblock';
import './Meetings.css'

function Meetings() {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return (
        <div>
            <Box pos="fixed" top="340px" right ="20px" 
            h="250px" w="350px" bg="#F3FDFB" borderColor="#080E2C" border="2px"
            overflowY="auto"
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
                    <Box h="27.25px" w="100%" bg="#080E2C">
                        <HStack float="left" paddingLeft="5px" paddingTop="3px">
                        <img src="https://img.icons8.com/ios-filled/20/ffffff/meeting-room.png"/>
                        <Text textAlign="center" fontSize="12px" fontWeight="bold" color="white"> UPCOMING MEETINGS </Text>
                        </HStack>
                        <Button float="right" 
                        top="2px" onClick={() => setModalIsOpen(true)} h="20px" 
                        marginRight="2" fontWeight="normal" color="black" 
                        backgroundColor="#44EABB" fontWeight="bold"
                        fontSize="12px" textAlign="center" > 
                        SCHEDULE MEETING </Button>
                    </Box>
                    <Meetingblock/>
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
                        <Text float="left" fontSize="27px" color="white"> Schedule a meeting </Text>
                        <CloseIcon float="right" marginTop="15px" color="white" onClick={() => setModalIsOpen(false)}>Close</CloseIcon>
                    </Box>
                    <form>
                        <input className="title" type="text" placeholder="Title"></input>
                        <label className="date-label" for="date">Date</label><br/>
                        <input className="date" type="date"></input>
                        <VStack float="left">
                            <label className="start-time-label" for="start-time">Start Time</label>
                            <input className="start-time" type="time"></input>
                        </VStack>
                        <VStack float="right">
                            <label className="end-time-label" for="end-time">End Time</label>
                            <input className="end-time" type="time"></input>
                        </VStack>
                        <select className="team">
                            <option value="Team-21">Team-21</option>
                            <option value="Team-40">Team-40</option>
                        </select>

                        <Button marginLeft="100" fontWeight="normal" color="black" size="md" colorScheme="teal" backgroundColor="#44EABB"> Schedule </Button>
                    </form>
                </Stack>
            </Modal>
        </div>
      );
}

export default Meetings;