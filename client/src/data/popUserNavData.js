import { BsHeart, BsTruck } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const navList = [
  { name: "Account", path: "account", element: <FaRegUser size={20} /> },
  {
    name: "Orders",
    path: "purchased-products",
    element: <RiFileList3Line size={20} />,
  },
  { name: "Wish list", path: "wish-list", element: <BsHeart size={20} /> },
  {
    name: "Reviews",
    path: "user-reviews",
    element: <MdOutlineReviews size={20} />,
  },
  {
    name: "Address",
    path: "address",
    element: <BsTruck size={20} />,
  },
  {
    name: "Profile seetings",
    path: "settings",
    element: <FiSettings size={20} />,
  },
];
export default navList;
