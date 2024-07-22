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
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import Pagination from '@mui/material/Pagination';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import one from "assets/images/chesspics/mechess.jpeg";
import three from "assets/images/chesspics/three.jpg";
import five from "assets/images/chesspics/CharlotteOpen2023Day1-17.jpg";

const images = [
  {
    label: 'The Beginnings',
    description: `I got introduced to the game of chess at 9 in my elementary school chess club. 
    Soon enough, I was hooked and I started receiving coaching and playing serious tournamnets.`,
    image: one,
  },
  {
    label: 'Middle School - Getting Serious',
    description: `Throughout elementary and middle school, I continued to play chess and began achieving top placements in state championships.
     This success fueled my passion, prompting me to dedicate even more time to the game. By middle school, I consistently ranked among the top
      three players in my grade statewide and quickly advanced to expert level. Together with my highly ranked middle school teammates, we won 
      the state championship nearly every year and ultimately secured the national 8th grade championship in 2017.`,
    image: one,
  },
  {
    label: 'Early High School - Plateau',
    description: `As high school demands and academic responsibilities increased, I found it challenging to dedicate sufficient time to studying and
     playing chess. Despite my strong ambition to become a National Master—a title awarded to players who achieve a 2200 Elo rating in the US—
     I participated in tournaments for many years without showing signs of improvement.`,
    image: three,
  },
  {
    label: 'COVID - Giving Back by Coaching',
    description: `
At the start of high school, I began coaching at Triangle Chess, where I had trained as a child. Inspired by the opportunity to teach young 
players, I grew passionate about coaching. In March 2020, amid COVID shutdowns, I launched a virtual coaching initiative, donating $1,050 
in proceeds for food and masks. This effort led to the creation of my own coaching company, Pizzazz Chess, where I managed a team of five 
coaches, offered public lessons and camps, and expanded my student base to 30. Through this experience, I honed my communication, management,
 and organizational skills while fostering a lasting positive impact on the community.`,
    image: three,
  },
  {
    label: 'Gap Year - Breakthrough',
    description: `During my gap year, I was determined to achieve the National Master title. I trained rigorously, traveling nationwide 
    for high-level tournaments and competing against top players. In January 2023, I had a breakthrough, gaining 73 rating points and earning 
    the National Master title. The next month, I performed at a Grandmaster level and attained an International Master norm. After reflecting upon
    my journey to National Master, I realized the importance of staying persistance and showing relentless drive towards any goal. 
`,
    image: five,
  },
  {
    label: 'Duke - The Chess Team',
    description: `At Duke, I currently hold the treasurer position at the chess club and am the captain of the competitive chess team. In fall
    of 2023, I led our team to win the Collegiate Chess League Division III championship, winning us a $1,500 prize. 
    In January 2024, I captained our team in the Pan-American Intercollegiate Chess Championships in McAllen, Texas. In the future, I hope to 
    expand the chess club by hosting more tournaments, attracting more sponsors, and supporting more of our members to play tournaments.`,
    image: five,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <MKBox component="section" py={2} id="Chess">
      <Container>
        <Grid container item xs={12} lg={12}>
          <MKTypography variant="h2" mb={6}>
            My Chess Career
          </MKTypography>
        </Grid>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label} style={{ display: 'flex', justifyContent: 'center' }}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: '33vh', // Make the image 1/3 of the screen height
                      maxHeight: '33vh',
                      display: 'block',
                      maxWidth: '100%',
                      overflow: 'hidden',
                    }}
                    src={step.image}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body1">{images[activeStep].description}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={maxSteps}
            page={activeStep + 1}
            onChange={(event, value) => setActiveStep(value - 1)}
            color="info"
            variant="outlined"
            shape="rounded"
            sx={{
              '& .MuiPaginationItem-root': {
                '&.Mui-selected': {
                  backgroundColor: '#ffffff', // Highlighted color
                  color: 'white',
                },
              },
            }}
          />
        </Box>
      </Container>
    </MKBox>
  );
}

export default SwipeableTextMobileStepper;
