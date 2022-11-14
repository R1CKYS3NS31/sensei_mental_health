import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { auth } from "../../../utils/firebase";

function Header(props) {
  const { sections, title,user } = props;

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Your Are Not Alone</Button>
        <Typography
          component="h2"
          variant="h2"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        ><b>{title}</b>
          
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <Link to="/signin" className="link">
          <Button variant="outlined" size="small" onClick={handleAuth}>
              {user ? "Sign Out" : "Sign In"}
          </Button>
        </Link>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Button>
            <Link
              className="link"
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              to={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
