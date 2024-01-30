import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import productImg from "../assets/product-img.jpeg";

const drawerWidth = 360;

const data = [
  {
    id: 1,
    title: "Tax Liability Insurance",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi id aspernatur dolores molestiae minus nostrum at exercitationem ullam distinctio animi!",
  },
  {
    id: 2,
    title: "Non-payment Insurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididjynt ut labore et dolore magna aliquanulla pariatur. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 3,
    title: "Contingent Risk Insurance",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi id aspernatur dolores molestiae minus nostrum at exercitationem ullam distinctio animi!",
  },
  {
    id: 4,
    title: "Wage & Hour Insurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididjynt ut labore et dolore magna aliquanulla pariatur. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 5,
    title: "Representation & Warranty Insurance",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi id aspernatur dolores molestiae minus nostrum at exercitationem ullam distinctio animi!",
  },
  {
    id: 6,
    title: "Intellectual Property Insurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididjynt ut labore et dolore magna aliquanulla pariatur. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 7,
    title: "Crisis Management Insurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididjynt ut labore et dolore magna aliquanulla pariatur. Duis aute irure dolor in reprehenderit.",
  },
];

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [currentProduct, setCurrentProduct] = React.useState(data[0]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleFilter = (id) => {
    const filterData = data.find((item) => item.id === id);
    setCurrentProduct(filterData);
  };

  const drawer = (
    <div className=" flex flex-col gap-5 h-full py-4 pl-6 pr-9">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between items-center text-[18px] cursor-pointer py-2 
          ${
            currentProduct.id === item.id &&
            "border-t border-b border-[#0000001f]"
          }
           `}
          onClick={() => handleFilter(item.id)}
        >
          <p
            className={`w-[80%] ${
              currentProduct.id === item.id ? " font-semibold" : " font-medium "
            }`}
          >
            {item.title}
          </p>
          {currentProduct.id === item.id && <ArrowForwardIcon />}
        </div>
      ))}
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#fff",
          color: "black",
          boxShadow: "none",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
            justifyContent: "flex-start",
            px: 6,
          }}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
          pl: { xs: 3, sm: 6 },
          pr: { xs: 3, sm: 10 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <>
          <div className=" flex flex-col justify-start gap-3 items-start h-full">
            <img
              src={productImg}
              alt="productImg"
              className=" h-[75%] w-full mb-5"
            />
            <p className="text-[18px] font-medium">
              {currentProduct.description}
            </p>
            <button className=" text-[16px] font-semibold">Learn More</button>
          </div>
        </>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
