import React from 'react';
import Navbar from '../Components/Navbar'
import Nameblock from './Nameblock';
import News from '../Mentor/News';
import Allproj from './Allproj';
function Student() {
  return (
    <div>
        <Navbar/>
        <Nameblock/>
        <News/>
        <Allproj/>
    </div>
  );
}

export default Student;