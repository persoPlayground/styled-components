import almond from "../images/almond.jpg";
import berryCake from "../images/berry-cake.jpg";
import birthdayCake from "../images/birthday-cake.jpg";
import brownie from "../images/brownie.jpg";
import cake1 from "../images/cake1.jpg";
import coffe from "../images/coffe.jpg";
import confectionCookie from "../images/confection-cookie.jpg";
import delicious from "../images/delicious.jpg";

const Data = [
  {
    name: "almond",
    img: almond,
    section: "Dessert"
  },
  {
    name: "berryCake",
    img: berryCake,
    section: "Cake"
  },
  {
    name: "birthdayCake",
    img: birthdayCake,
    section: "Cake"
  },
  {
    name: "brownie",
    img: brownie,
    section: "Dessert"
  },
  {
    name: "cake1",
    img: cake1,
    section: "Cake"
  },
  {
    name: "coffe",
    img: coffe,
    section: "Cake"
  },
  {
    name: "confectionCookie",
    img: confectionCookie,
    section: "Cookie"
  },
  {
    name: "delicious",
    img: delicious,
    section: "Cookie"
  }
];

export default Data.reduce((res, item) => {
  if (!res[item.section]) {
    res[item.section] = [];
  }
  res[item.section].push(item);
  return res;
}, {});
