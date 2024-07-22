import React from 'react';

// @mui material components
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/byanprofilepic.jpg";

function Profile({ nextSectionRef }) {
  // Function to handle scroll
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }} id="Profile">
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Benjamin Yan" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="center" alignItems="center" mb={1}>
                <MKTypography variant="h2">Benjamin Yan</MKTypography>
              </MKBox>
              <MKBox display="flex" justifyContent="center" alignItems="center" mb={3}>
                <MKTypography
                  component="a"
                  href="https://github.com/benjaminyan1"
                  variant="body2"
                  target="_blank"
                  rel="noopener noreferrer"
                  mr={3}
                >
                  <i className="fab fa-github" style={{ color: "#3b4764", fontSize: "1.5rem" }} />
                </MKTypography>
                <MKTypography
                  component="a"
                  href="https://www.linkedin.com/in/benjaminyan1/"
                  variant="body2"
                  color="dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" style={{ color: "#3b4764", fontSize: "1.5rem" }} />
                </MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Hello! I am a sophomore at Duke University double majoring in Computer Science and Statistics and minoring in Finance.
                I am a proactive learner interested in business, machine learning, and tech. With the rapid growth of AI in recent years, I have 
                developed a keen interest in how we can improve AI to solve today's biggest problems. Throughout my first year at Duke, I have created
                various personal projects in machine learning and software development, which are shown below. <br />
                <br />
                I am deeply passionate about creating a positive impact in the community. In high school, I founded and ran an education non-profit and 
                a chess instruction for-profit, both business with social impact goals in mind. <br /> 
                <br />
                Outside of academics, I am a longtime chess competitor with many national and state awards. I also love playing basketball, 
                traveling, cooking, and having fun with friends! Scroll down to learn a bit more about me! <br />
                <br />
                <strong>This website was fully created using the React framework in Javascript</strong> <br />
                <br />
                <br />
                <MKBox display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb={1}>
                  <div onClick={scrollToNextSection} style={{ cursor: 'pointer', textAlign: 'center' }}>
                    <MKTypography variant="h4" sx={{ color: "#3b4764", mb: 1 }}>
                      Learn More About Me!
                    </MKTypography>
                    <ArrowDownwardIcon fontSize="large" sx={{ color: "#3b4764" }} />
                  </div>
                </MKBox>               
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
