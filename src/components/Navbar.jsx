import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
import logo from "../utils/yt2logo.png"
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} objectfit="cover" mix-blend-mode="multiply"/>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
