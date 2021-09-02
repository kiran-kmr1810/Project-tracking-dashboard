import React, { useState } from "react";
import { Box, Text, HStack, VStack, Button, Stack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Modal from "react-modal";

import './Dashboard.css';
var data = [
  {
    title: "Review 1",
    summary:
      "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    date: "25/08/2021",
    time: "5:00 PM",
  },
  {
    title: "Review 2",
    summary:
      "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    date: "26/08/2021",
    time: "5:00 PM",
  },
  {
    title: "Review 3",
    summary:
      "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    date: "27/08/2021",
    time: "5:00 PM",
  },
];

function Dashboard() {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  return (
    <div>
      <Text
        fontSize="20px"
        fontWeight="bold"
        paddingTop="70px"
        marginLeft="360px"
      >
        Fire Detection using Deep Learning
      </Text>
      <Box pos="fixed" h="520px" w="620px" top="110px" left="300px">
        <Timeline lineColor="#44EABB">
          {data.map((info) => {
            return (
              <TimelineEvent
                title={info.title}
                icon={<i />}
                iconColor="black"
                buttons={<i />}
                container="card"
                style={{ border: "2px solid #080E2C" }}
                cardHeaderStyle={{
                  backgroundColor: "#080E2C",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                contentStyle={{
                  backgroundColor: "#D8E8E4",
                  fontWeight: "bold",
                }}
              >
                {info.summary}
                <HStack paddingTop="10px">
                  <img src="https://img.icons8.com/material-sharp/24/000000/planner.png" />

                  <HStack>
                    <Text
                      marginRight="5rem"
                      fontSize="12"
                      fontWeight="extrabold"
                      textAlign="right"
                      color="#080E2C"
                    >
                      {info.date} - {info.time}
                    </Text>

                    <Button
                      height="30px"
                      border="1px solid black"
                      onClick={() => setModal1IsOpen(true)}
                    >
                      Update Marks
                    </Button>
                    <Button
                      height="30px"
                      border="1px solid black"
                      onClick={() => setModal2IsOpen(true)}
                    >
                      Remarks
                    </Button>
                  </HStack>
                </HStack>
              </TimelineEvent>
            );
          })}
        </Timeline>
      </Box>

      <Modal
        isOpen={modal1IsOpen}
        onRequestClose={() => setModal1IsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            margin: 0,
            backgroundColor: "rgba(255,255,255,0.75)",
          },
          content: {
            top: "50%",
            bottom: "auto",
            left: "50%",
            right: "50%",
            minWidth: "25rem",
            borderRadius: "20px",
            backgroundColor: "#080E2C",
            transform: "translate(-50%, -50%)",
            padding: "40px",
          },
        }}
      >
        <Stack>
          <Box>
            <Text float="left" fontSize="27px" color="white">
              Update Marks
            </Text>
            <CloseIcon
              float="right"
              marginTop="15px"
              color="white"
              onClick={() => setModal1IsOpen(false)}
            >
              Close
            </CloseIcon>
          </Box>
          <form>
            <Box>
              <div className="divide"></div>
              <div className="member-name">Harikrishna</div>
              <input className="member-marks" type="text" placeholder='80'></input>
              <div className="member-name">Swapnika</div>
              <input className="member-marks" type="text" placeholder='80'></input>
           
              <div className="member-name">Kirankumar</div>
              <input className="member-marks" type="text" placeholder='80'></input>
            
              <div className="member-name">Ragul</div>
              <input className="member-marks" type="text" placeholder='80'></input>
           
              <div className="member-name">Saiteja</div>
              <input className="member-marks" type="text" placeholder='80'></input>
            </Box>
            <Button
              marginLeft="100"
              marginTop="1rem"
              fontWeight="normal"
              color="black"
              size="md"
              colorScheme="teal"
              backgroundColor="#44EABB"
            >
              {" "}
              Submit{" "}
            </Button>
          </form>
        </Stack>
      </Modal>

      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={() => setModal2IsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            margin: 0,
            backgroundColor: "rgba(255,255,255,0.75)",
          },
          content: {
            top: "50%",
            bottom: "auto",
            left: "50%",
            right: "50%",
            minWidth: "25rem",
            borderRadius: "20px",
            backgroundColor: "#080E2C",
            transform: "translate(-50%, -50%)",
            padding: "40px",
          },
        }}
      >
        <Stack>
          <Box>
            <Text float="left" fontSize="27px" color="white">
              {" "}
              Report{" "}
            </Text>
            <CloseIcon
              float="right"
              marginTop="15px"
              color="white"
              onClick={() => setModal2IsOpen(false)}
            >
              Close
            </CloseIcon>
          </Box>
          <form>
            <input className="title" type="text" placeholder="Title"></input>
            <textarea className="text-area" rows="7"></textarea>

            <Button
              marginLeft="100"
              marginTop="1rem"
              fontWeight="normal"
              color="black"
              size="md"
              colorScheme="teal"
              backgroundColor="#44EABB"
            >
              {" "}
              Submit{" "}
            </Button>
          </form>
        </Stack>
      </Modal>
    </div>
  );
}
export default Dashboard;
