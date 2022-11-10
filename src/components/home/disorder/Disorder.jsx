import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Avatar,
  CardActions,
  Collapse,
  IconButton,
  styled,
} from "@mui/material";
import { ExpandMoreOutlined, PsychologyAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Disorder(props) {
  const { disorder } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="div">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {disorder.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {disorder.relations}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {disorder.desc}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <CardActions disableSpacing>
                <IconButton aria-label="get help">
                  <Link to={"/gethelp"} className={"link"}>
                    Get help... <PsychologyAlt />
                  </Link>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreOutlined />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    <h2>Symptoms & Signs</h2>
                  </Typography>
                  <Typography paragraph>{disorder.symptom}</Typography>
                  <Typography paragraph>
                    <h2>Treatment</h2>
                  </Typography>
                  <Typography paragraph>{disorder.treatment}</Typography>
                </CardContent>
                {/* specialists */}
                <h3>Specailized Psychiatrist</h3>
                <IconButton aria-label="settings">
                  <Avatar />
                </IconButton>
                <IconButton aria-label="settings">
                  <Avatar />
                </IconButton>
                <IconButton aria-label="settings">
                  <Avatar />
                </IconButton>
              </Collapse>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={disorder.image}
            alt={disorder.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Disorder.propTypes = {
  disorder: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    symptom: PropTypes.string.isRequired,
  }).isRequired,
};

export default Disorder;
