import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../components/home/header/Header";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const sections = [
  { title: "Home", url: "/" },
  { title: "About", url: "#" },
  { title: "Service", url: "#" },
  { title: "Our Specialists", url: "/specialists" },
  { title: "Testimonial", url: "#" },
  { title: "Contact", url: "#" },
  { title: "Apointment", url: "#" },
];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1592947945242-69312358628b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hpYXRyaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "John Akiro",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHN5Y2hpYXRyaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Jane Kelly",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBzeWNoaWF0cmlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "George Patrick",
    author: "@helloimnik",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661320847584-032675bb9377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzeWNoaWF0cmlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Mercy Elline",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1572985025600-43351572529e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBzeWNoaWF0cmlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Harry Kane",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1629904869742-6e8ccbd0f78b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHN5Y2hpYXRyaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Adnrew Mathews",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHN5Y2hpYXRyaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Scott Oliver",
    author: "@tjdragotta",
    rows: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1629904869742-6e8ccbd0f78b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHN5Y2hpYXRyaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Adnrew Mathews",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },

];

const theme = createTheme();
export const Specialists = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="MENTAL HEALTH" sections={sections} />
        {/* specialists */}
        <ImageList sx={{ width: "100%" }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">
              <h1>Our Specialists</h1>
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      {/* <Footer
      title="Footer"
      description="Something here to give the footer a purpose!"
    /> */}
    </ThemeProvider>
  );
};
