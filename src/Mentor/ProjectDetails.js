import { Box,stack, Text } from "@chakra-ui/react"

var info = 
{
    "proj1" : "Fire detection using DL",
    "proj2" : "Key frame in video analytics"
};

function ProjectDetails() {
    return (
    <div>
        <Box pos="fixed" top="195px" left="20px" bg="#080E2C" h="170px" w="230px" 
         borderWidth ="2px" borderColor="#44EABB" paddingTop="10px" borderRadius="15">
            <stack>
            <Text paddingBottom="10px" fontSize="16" fontWeight="bold" textAlign="center" color="#FFFFFF">
            PROJECT DETAILS
            </Text>
            <Box h="2px" w="100%" bg="#44EABB"/>
            <Text paddingTop="15px" paddingLeft="20px" fontSize="16" fontWeight="normal" color="#FFFFFF">
            {info.proj1}
            </Text>
            <Text paddingTop="15px" paddingLeft="20px" fontSize="16" fontWeight="normal" color="#FFFFFF">
            {info.proj2}
            </Text>
            </stack>
        </Box>
    </div>
  );
}

export default ProjectDetails;