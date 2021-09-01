import React from 'react';
import { Box, Text ,HStack, VStack, Button } from "@chakra-ui/react"
import {Timeline, TimelineEvent} from 'react-event-timeline'
var data = [
    {
    "title" : "Review 1",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    "date" : "25/08/2021",
    "time" : "5:00 PM",
    },
    {
    "title" : "Review 2",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    "date" : "26/08/2021",
    "time" : "5:00 PM",
    },
    {
    "title" : "Review 3",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    "date" : "27/08/2021",
    "time" : "5:00 PM",
    },
];

function Dashboard() {
  return (
    <div>
        <Text fontSize="20px" fontWeight="bold" paddingTop="70px" marginLeft="360px">Fire Detection using Deep Learning</Text>
        <Box pos="fixed" h="520px" w="620px" top="110px" left="300px">
        <Timeline
        lineColor = "#44EABB"
        >
        {data.map((info) => {
            return(
            <TimelineEvent
            title={info.title}
            icon={<i />}
            iconColor="black"
            buttons={<i />}
            container="card"
            style={{border: '2px solid #080E2C'}}
            cardHeaderStyle={{backgroundColor: '#080E2C',fontSize:"16px",fontWeight:"bold"}}
            contentStyle ={{backgroundColor: '#D8E8E4',fontWeight:"bold"}}
          >

        {info.summary}
        <HStack paddingTop="10px">
        <img src="https://img.icons8.com/material-sharp/24/000000/planner.png"/>
        
        <HStack>
            <Text marginRight="5rem" fontSize="12" fontWeight="extrabold" textAlign="right" color="#080E2C">{info.date} - {info.time}</Text>
            <Button height="30px" border="1px solid black">Update Marks</Button>
            <Button height="30px" border="1px solid black">Remarks</Button>
        </HStack>

        </HStack>
        </TimelineEvent>
        )})}
        </Timeline>
        </Box>
    </div>
  );
}
export default Dashboard;