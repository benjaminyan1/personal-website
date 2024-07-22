import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import gh from "assets/images/education/greenhope.png";
import duke from "assets/images/education/duke.png";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

export default function CustomizedTimeline() {
  return (
    <MKBox 
      component="section" 
      py={2} 
      id="Education"
      
    >
      <Container>
        <Grid container item xs={12} justifyContent="center">
          <MKTypography variant="h2" mb={1} align="center" sx={{ color: 'black' }}>
            Education Timeline
          </MKTypography>
        </Grid>
        <Timeline position="alternate" sx={{ py: 4 }}>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', py: 4, color: 'black' }} // Set text color to black
              align="right"
              variant="h6"
            >
              GPA: 3.97/4.00 <br />
              Summa Cum Laude
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'black' }} />
              <TimelineDot>
                <Avatar src={gh} sx={{ width: 50, height: 50 }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'black' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: 4, px: 2, color: 'black' }}> {/* Set text color to black */}
              <Typography variant="h5" component="span" sx={{ color: 'black' }}>
                Green Hope High School
              </Typography>
              <Typography variant="h6" sx={{ color: 'black' }}>2018 - 2022</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', py: 4, color: 'black' }} // Set text color to black
              variant="body2"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'black' }} />
              <TimelineDot>
                <Avatar src="/path/to/your/image2.jpg" sx={{ width: 50, height: 50 }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'black' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: 4, px: 2, color: 'black' }}> {/* Set text color to black */}
              <Typography variant="h5" component="span" sx={{ color: 'black' }}>
                Gap Year
              </Typography>
              <Typography variant="h6" sx={{ color: 'black' }}>2022-2023</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', py: 4, color: 'black' }} // Set text color to black
              align="right"
              variant="h6"
            >
              B.S. in CS & Minor in Finance <br />
              GPA: 3.96/4.00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'black' }} />
              <TimelineDot>
                <Avatar src={duke} sx={{ width: 50, height: 50 }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'black' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: 4, px: 2, color: 'black' }}> {/* Set text color to black */}
              <Typography variant="h5" component="span" sx={{ color: 'black' }}>
                Duke University
              </Typography>
              <Typography variant="h6" sx={{ color: 'black' }}>2023 - Present</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </MKBox>
  );
}
