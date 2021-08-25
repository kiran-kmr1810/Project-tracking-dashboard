import React from 'react';
import Sidebar from '../Components/Sidebar'
import Adminnav from '../Components/Admin_nav'
import Sidedesign from '../Components/Sidedesign';
import Projectbox from '../Components/projectbox';
import { Box } from '@chakra-ui/react';
import Newacc from './Newacc';
function Admin() {
  return (
    <div>
      <Sidedesign/>
      <Adminnav/>   
      {/*<Newacc/>*/} 
      <Box pos="fixed" p="50px" left="330px" top="50px" height="100vh" w="100%" bg="#F6F3EE">
          <Projectbox/>
      </Box>
      <Sidebar/> 
    </div>
  );
}

export default Admin;