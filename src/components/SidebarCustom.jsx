import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import productImg from "../assets/product-img.jpeg";

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

const drawerWidth = 360;

const SidebarCustom = () => {
  const [currentProduct, setCurrentProduct] = React.useState(data[0]);
  const handleFilter = (id) => {
    const filterData = data.find((item) => item.id === id);
    setCurrentProduct(filterData);
  };
  return (
    <div className=" flex justify-center items-center px-36">
      <div className=" flex flex-col gap-4 w-[36%] h-full py-4 pl-6 pr-9 border-r border-[#0000001f]">
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
                currentProduct.id === item.id
                  ? " font-semibold"
                  : " font-medium "
              }`}
            >
              {item.title}
            </p>
            {currentProduct.id === item.id && <ArrowForwardIcon />}
          </div>
        ))}
      </div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
          px: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <>
          <div className=" flex flex-col justify-start gap-3 items-start h-full">
            <img
              src={productImg}
              alt="productImg"
              className=" h-80 w-full mb-5"
            />
            <p className="text-[17px] font-normal">
              {currentProduct.description}
            </p>
            <button className=" text-[16px] font-semibold">Learn More</button>
          </div>
        </>
      </Box>
    </div>
  );
};

export default SidebarCustom;
