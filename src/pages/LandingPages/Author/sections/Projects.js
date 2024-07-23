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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";


// Images
import corn from "assets/images/illustrations/corndisease.jpeg";
import govn from "assets/images/illustrations/cabinet.jpg";
import fball from "assets/images/illustrations/nfl.jpeg";


function Places() {
  const posts = [
    {
      image: corn,
      title: "Modeling Corn Diseases using Computer Vision",
      description: "Used Pytorch and OpenCV to design Convolutional Neural Networks (CNN) identifying 4 different corn diseases in corn leaf pictures",
      route: "https://github.com/Sam-B-Y/AI-Corn-Disease-Detection",
    },
    {
      image: govn,
      title: "Modeling Proportion of Cabinet Ministries",
      description: "Used Pandas and scikit-learn to build linear regression, decision tree, and lasso models to predict the proportion of cabinet ministries awarded to parties in a coalition government",
      route: "https://github.com/benjaminyan1/ML-Coalition-Gov-t",
    },
    {
      image: fball,
      title: "Predicting Fantasy Football Stats",
      description: "Used Pandas and scikit-learn to create lasso, linear regression, and decision tree models to predict each NFL player’s 2021 fantasy football points based on stats from 2020 and 2019 using Principal Component Analysis (PCA)",
      route: "https://github.com/benjaminyan1/ML-Fantasy-Football",
    },
  ];

  const getGridSize = () => {
    const numPosts = posts.length;
    if (numPosts === 1) return 12;
    if (numPosts === 2) return 6;
    if (numPosts === 3) return 4;
    return 3; // Default for 4 or more posts
  };

  const gridSize = getGridSize();

  return (
    <MKBox 
      component="section" 
      py={2} 
      id="Projects"
      sx={{
        border: '2px solid #ccc', // Add a border
        borderRadius: '16px', // Rounded corners
        padding: '24px', // Additional padding
        margin: '24px auto', // Center the box and add margin
        maxWidth: '1200px', // Limit the width of the box
      }}
    >
      <Container>
        <Grid container item xs={12} justifyContent="center">
          <MKTypography variant="h2" mb={6} align="center">
            Check Out my Personal Projects
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {posts.map((post, index) => (
            <Grid item xs={12} sm={6} md={gridSize} key={index}>
              <TransparentBlogCard
                image={post.image}
                title={post.title}
                description={post.description}
                action={{
                  type: "internal",
                  route: post.route,
                  color: "info",
                  label: "read more",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
