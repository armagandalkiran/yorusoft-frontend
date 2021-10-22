import temaFabric from "../src/svgs/temafabric.svg";
import eliteParke from "../src/svgs/eliteparke.svg";
import altinYaprak from "../src/svgs/altinyaprak.svg";
import payment from "../src/svgs/payment.svg";
import extension from "../src/svgs/extension.svg";
import code from "../src/svgs/code.svg";
import check from "../src/svgs/check.svg";
import clear from "../src/svgs/clear.svg";

export const sliderItems = [
  {
    id: 1,
    img: temaFabric,
    alt: "temafabric",
  },
  {
    id: 2,
    img: eliteParke,
    alt: "eliteparke",
  },
  {
    id: 3,
    img: altinYaprak,
    alt: "altinyaprak",
  },
];

export const DescCardItems = [
  {
    id: 1,
    title: "Design Phase",
    desc: "Wonder twenty hunted and put income set desire expect. Am cottage calling.",
    color: "#FFE598",
    img: extension,
    right:true,
  },
  {
    id: 2,
    title: "Coding Phase",
    desc: "Wonder twenty hunted and put income set desire expect. Am cottage calling.",
    color: "#1EA5FC",
    img: code,
    left:true,
    right:true,
  },
  {
    id: 3,
    title: "Payment Phase",
    desc: "Wonder twenty hunted and put income set desire expect. Am cottage calling.",
    color: "#5668D1",
    img: payment,
    left:true,
  },
];

export const PricingCardItems = [
  {
    id: 1,
    title: "Basic",
    price: 50,
    desc: "GREAT FOR STARTERS",
    features: [
      {
        feature: "1 - 2 Page",
        img: check,
        color: "#696969",
      },
      {
        feature: "1 Revision",
        img: check,
        color: "#696969",
      },
      {
        feature: "Custom Design",
        img: clear,
        color: "#C2BFBF",
      },
      {
        feature: "Admin Panel",
        img: clear,
        color: "#C2BFBF",
      },
    ],
    color: "linear-gradient(90deg, #E5E5E5 0%, #C4C4C4 100%)",
  },
  {
    id: 2,
    title: "Standard",
    price: 120,
    desc: "FOR PLANNED PROJECTS",
    features: [
      {
        feature: "3 - 5 Page",
        img: check,
        color: "#696969",
      },
      {
        feature: "2 Revision",
        img: check,
        color: "#696969",
      },
      {
        feature: "Custom Design",
        img: check,
        color: "#696969",
      },
      {
        feature: "Admin Panel",
        img: clear,
        color: "#C2BFBF",
      },
    ],
    color: "linear-gradient(90deg, #95A4FF 1.52%, #1EA5FC 100%)",
  },
  {
    id: 3,
    title: "Premium",
    price: 300,
    desc: "FOR PROFESSIONAL USE",
    features: [
      {
        feature: "5 - 10 Page",
        img: check,
        color: "#696969",
      },
      {
        feature: "3 Revision",
        img: check,
        color: "#696969",
      },
      {
        feature: "Custom Design",
        img: check,
        color: "#696969",
      },
      {
        feature: "Admin Panel",
        img: check,
        color: "#696969",
      },
    ],
    color: "linear-gradient(90deg, #C5B0FF 0%, #D772D3 100%)",
  },
];
