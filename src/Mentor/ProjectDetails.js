import { Box,Text } from "@chakra-ui/react"

var info = 
[
{
    "proj" : "Fire detection using DL",
},
{
    "proj" : "Key frame in video analytics",
}
];

function ProjectDetails() {
    return (
    <div>
        <Box pos="fixed" top="195px" left="20px" bg="#080E2C" h="130px" w="230px" borderRadius="15" 
         borderWidth ="2px" paddingTop="10px" borderColor="#44EABB" borderWidth ="2px">
            <stack>
            <Text paddingBottom="10px" fontSize="16" fontWeight="bold" textAlign="center" color="#FFFFFF">
            PROJECT DETAILS
            </Text>
            <Box h="2px" w="100%" bg="#44EABB"/>
            {info.map((data) => {
                return(
                <Box>
                <Box paddingLeft="5px" py="5px" h="100%" w="100%" bg="#080E2C">
                    <Text fontSize="14" fontWeight="bold" textAlign="Left" color="white">
                    {data.proj}
                    </Text>
                </Box>
                <Box h="2px" w="100%" bg="#44EABB"/>
                </Box>
            )})}
            </stack>
        </Box>
    </div>
  );
}

export default ProjectDetails;