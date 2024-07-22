/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useRef } from 'react';

import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import NavBar from "pages/LandingPages/Author/sections/NavBar";

// Author page sections
import Skills from "pages/LandingPages/Author/sections/Skills";
import Education from "pages/LandingPages/Author/sections/Education"; 
import Chess from "pages/LandingPages/Author/sections/Chess";
import Profile from "pages/LandingPages/Author/sections/Profile";
import Projects from "pages/LandingPages/Author/sections/Projects";
import Contact from "pages/LandingPages/Author/sections/Contact";
import Footer from "pages/LandingPages/Author/sections/Footer";

// Routes

// Images
import bgImage from "assets/images/dukebanner.jpeg";
import { FormatAlignJustify } from '@mui/icons-material';

function Author() {
  const projectsRef = useRef(null);
  return (
    <>
      <NavBar/>
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.5),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile nextSectionRef={projectsRef} />
          
          
          
        </Card>
        
        <div ref={projectsRef}>
            <Education />
            <Projects />
            <Skills sx={{ mb: 8 }}/>
          </div>
          
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: 4,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            borderRadius: '16px', // Rounded corners
            border: '2px solid lightgrey', // Light grey border
          }}
        >
          <Chess />
        </Card>
          
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default Author;
