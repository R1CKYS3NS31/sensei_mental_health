import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../components/home/header/Header";
import MainFeaturedPost from "../../components/home/mainFeaturedPost/MainFeaturedPost";
import Disorder from "../../components/home/disorder/Disorder";
import Main from "../../components/home/main/Main";
import Sidebar from "../../components/home/sidebar/Sidebar";
// import Footer from "../../components/home/footer/Footer";


const sections = [
  { title: "Home", url: "/" },
  { title: "About", url: "#" },
  { title: "Service", url: "#" },
  { title: "Our Specialists", url: "/specialists" },
  { title: "Testimonial", url: "#" },
  { title: "Contact", url: "#" },
  { title: "Apointment", url: "#" },
];

// edit this cover
const mainFeaturedPost = {
  title: "Talk To Someone",
  description:
    "A disorder associated with episodes of mood swings ranging from depressive lows to manic highs. The exact cause of bipolar disorder isn't known, but a combination of genetics, environment and altered brain structure and chemistry may play a role.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const theme = createTheme();
export const Home = ({disorders}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="MENTAL HEALTH" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {disorders.map((disorder, i) => (
              <Disorder key={i} disorder={disorder} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main
              title="From the firehose"
              //  posts={posts}
            />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      {/* <Footer
      title="Footer"
      description="Something here to give the footer a purpose!"
    /> */}
    </ThemeProvider>
  );
};
