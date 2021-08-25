import React from 'react';
import { Box, Text } from "@chakra-ui/react"
import {Timeline, TimelineEvent} from 'react-event-timeline'
var data = [
    {
    "title" : "Review 0",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    "date" : "25/08/2021",
    "time" : "5:00",
    },
    {
    "title" : "Review 1",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    "date" : "26/08/2021",
    "time" : "5:00",
    },
    {
    "title" : "Review 2",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    "date" : "27/08/2021",
    "time" : "5:00",
    },
];

function Dashboard() {
  return (
    <div>
        <Box pos="fixed" h="520px" w="620px" top="70px" left="250px">
        <Timeline
        lineColor = "#44EABB"
        >
        {data.map((info) => {
            return(
            <TimelineEvent
            title={info.title}
            createdAt={info.date}
            icon={<i />}
            iconColor="black"
            buttons={<i />}
            container="card"
            style={{border: '1px solid #44EABB'}}
            cardHeaderStyle={{backgroundColor: '#080E2C',}}
            contentStyle ={{backgroundColor: '#D8E8E4'}}
          >
        {info.summary}
        </TimelineEvent>
        )})}
        </Timeline>
        </Box>
    </div>
  );
}
export default Dashboard;