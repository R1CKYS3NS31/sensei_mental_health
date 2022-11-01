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
import FeaturedPost from "../../components/home/featuredPost/FeaturedPost";
import Main from "../../components/home/main/Main";
import Sidebar from "../../components/home/sidebar/Sidebar";
import Disorder from "../../components/disorder/Disorder";
// import Footer from "../../components/home/footer/Footer";

// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const sections = [
  { title: "Home", url: "/" },
  { title: "About", url: "#" },
  { title: "Service", url: "#" },
  { title: "Our Specialists", url: "/specialists" },
  { title: "Testimonial", url: "#" },
  { title: "Contact", url: "#" },
  { title: "Apointment", url: "#" },
];

const mainFeaturedPost = {
  title: "Bipolar Disorder",
  description:
    "A disorder associated with episodes of mood swings ranging from depressive lows to manic highs. The exact cause of bipolar disorder isn't known, but a combination of genetics, environment and altered brain structure and chemistry may play a role.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Clinical Depression",
    date: "depressed mood",
    description:
    "Also called major depression. A mental health disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Anxiety Disorder",
    date: "panic attacks, obsessive-compulsive disorder and post-traumatic stress disorder.",
    description:
    "A mental health disorder characterized by feelings of worry, anxiety or fear that are strong enough to interfere with one's daily activities.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Dimentia",
    date: "anxiety, loneliness, mood swings, or nervousness, depression, hallucination, or paranoia",
    description:
    "A group of thinking and social symptoms that interferes with daily functioning. Not a specific disease, dementia is a group of conditions characterized by impairment of at least two brain functions, such as memory loss and judgement.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Anxiety Disorder",
    date: "Nov 11",
    description:
    "A mental health disorder characterized by feelings of worry, anxiety or fear that are strong enough to interfere with one's daily activities.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

// const posts = [post1, post2, post3];

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
export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="MENTAL HEALTH" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post,i) => (
              <FeaturedPost key={i} post={post} />
              // <Disorder key={i} post={post}/>
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
