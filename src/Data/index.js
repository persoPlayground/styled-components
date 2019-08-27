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
    section: "Dessert",
    price: 2.4
  },
  {
    name: "berryCake",
    img: berryCake,
    section: "Cake",
    price: 3.2
  },
  {
    name: "birthdayCake",
    img: birthdayCake,
    section: "Cake",
    price: 1.5
  },
  {
    name: "brownie",
    img: brownie,
    section: "Dessert",
    price: 3
  },
  {
    name: "cake1",
    img: cake1,
    section: "Cake",
    price: 5
  },
  {
    name: "coffe",
    img: coffe,
    section: "Cake",
    price: 2.5
  },
  {
    name: "confectionCookie",
    img: confectionCookie,
    section: "Cookie",
    price: 3.5
  },
  {
    name: "delicious",
    img: delicious,
    section: "Cookie",
    price: 3
  }
];

export default Data.reduce((res, item) => {
  if (!res[item.section]) {
    res[item.section] = [];
  }
  res[item.section].push(item);
  return res;
}, {});
