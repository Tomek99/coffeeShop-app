import { GoMail } from "react-icons/go";
import { SlCreditCard } from "react-icons/sl";
import { RiShoppingBagFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill, BsPerson } from "react-icons/bs";

const dataContact = [
  {
    headline: "Coffee Shop",
    line_one: {
      icon: <BsFillTelephoneFill size={20} />,
      textOne: "242 242 242",
    },
    line_two: {
      icon: <GoMail size={20} />,
      textTwo: "test@coffeshop.com",
    },
    line_three: {
      icon: <ImLocation2 size={20} />,
      textThree: "Litewska 24 | 24-242 Warsaw",
    },
  },
  {
    headline: "Warehouse",
    line_one: {
      icon: <BsFillTelephoneFill size={20} />,
      textOne: "242 242 242",
    },
    line_two: {
      icon: <GoMail size={20} />,
      textTwo: "warehouse@coffeshop.com",
    },
  },
  {
    headline: "Driver",
    line_one: {
      icon: <BsFillTelephoneFill size={20} />,
      textOne: "242 242 242",
    },
    line_two: { icon: <GoMail size={20} />, textTwo: "test@coffeshop.com" },
  },
  {
    headline: "Company details",
    line_one: {
      icon: <BsPerson size={20} />,
      textOne: "Coffee Shop Tomasz Skupien",
    },
    line_two: {
      icon: <ImLocation2 size={20} />,
      textTwo: "Litewska 24 | 24-242 Warsaw",
    },
    line_three: {
      icon: <RiShoppingBagFill size={20} />,
      textThree: "NIP 2424242424 | BDO 242424242",
    },
  },
  {
    headline: "Bank account",
    line_one: {
      icon: <SlCreditCard />,
      textOne: "24 2424 2424 2424 2424 2424 2424",
    },
  },
];

export default dataContact;
