import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const frontendSkills = [
  "JavaScript",
  "React",
  "CSS",
  "HTML",
];

const mlSkills = [
  "Pytorch",
  "scikit-learn",
  "Pandas",
  "Numpy"
];

const languages = [
  "Python",
  "Java",
  "C",
  "MIPS",
];

function renderSkills(title, skills) {
  return (
    <>
      <Grid item xs={12} mt={2}>
        <MKTypography variant="h4" mb={1}>
          {title}
        </MKTypography>
      </Grid>
      {skills.map((skill, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <MKBox
            color="white"
            bgColor="info"
            variant="gradient"
            borderRadius="lg"
            shadow="lg"
            opacity={1}
            p={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minWidth="100px"
            minHeight="50px"
            textAlign="center"
          >
            {skill}
          </MKBox>
        </Grid>
      ))}
    </>
  );
}

function Skills() {
  return (
    <MKBox component="section" py={2} id = "Skills">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MKTypography variant="h2" mb={2}>
              Skills
            </MKTypography>
          </Grid>
          {renderSkills("Front-end", frontendSkills)}
          <Grid item xs={12} mt={1} />
          {renderSkills("Machine Learning", mlSkills)}
          <Grid item xs={12} mt={1} />
          {renderSkills("Programming Languages", languages)}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Skills;
