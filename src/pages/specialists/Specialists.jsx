import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../components/home/header/Header";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Grid} from "@mui/material";

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
  // {
  //   img: "https://images.unsplash.com/photo-1592947945242-69312358628b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hpYXRyaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   title: "John Akiro",
  //   author: "@bkristastucchio",
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
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
export const Specialists = ({psychiatrists}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="MENTAL HEALTH" sections={sections} />
        {/* specialists */}
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">
            <h1>Our Specialists</h1>
          </ListSubheader>
        </ImageListItem>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {psychiatrists.map((item, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={index}
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  ...theme.typography.body2,
                  padding: theme.spacing(2),
                  textAlign: "center",
                  color: theme.palette.text.secondary,
                }}
              >
                <ImageListItem key={item.id} col={3}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={item.specialization}
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
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {/* <Footer
      title="Footer"
      description="Something here to give the footer a purpose!"
    /> */}
    </ThemeProvider>
  );
};
