import ProductItem from "./ProductItem";
import imageWaffleThumbnail from "../assets/image-waffle-thumbnail.jpg";
import imageWaffleMobile from "../assets/image-waffle-mobile.jpg";
import imageWaffleTablet from "../assets/image-waffle-tablet.jpg";
import imageWaffleDesktop from "../assets/image-waffle-desktop.jpg";

import imageCremeBruleeThumbnail from "../assets/image-creme-brulee-thumbnail.jpg";
import imageCremeBruleeMobile from "../assets/image-creme-brulee-mobile.jpg";
import imageCremeBruleeTablet from "../assets/image-creme-brulee-tablet.jpg";
import imageCremeBruleeDesktop from "../assets/image-creme-brulee-desktop.jpg";

import imageMacaronThumbnail from "../assets/image-macaron-thumbnail.jpg";
import imageMacaronMobile from "../assets/image-macaron-mobile.jpg";
import imageMacaronTablet from "../assets/image-macaron-tablet.jpg";
import imageMacaronDesktop from "../assets/image-macaron-desktop.jpg";

import imageTiramisuThumbnail from "../assets/image-tiramisu-thumbnail.jpg";
import imageTiramisuMobile from "../assets/image-tiramisu-mobile.jpg";
import imageTiramisuTablet from "../assets/image-tiramisu-tablet.jpg";
import imageTiramisuDesktop from "../assets/image-tiramisu-desktop.jpg";

import imageBaklavaThumbnail from "../assets/image-baklava-thumbnail.jpg";
import imageBaklavaMobile from "../assets/image-baklava-mobile.jpg";
import imageBaklavaTablet from "../assets/image-baklava-tablet.jpg";
import imageBaklavaDesktop from "../assets/image-baklava-desktop.jpg";

import imageMeringueThumbnail from "../assets/image-meringue-thumbnail.jpg";
import imageMeringueMobile from "../assets/image-meringue-mobile.jpg";
import imageMeringueTablet from "../assets/image-meringue-tablet.jpg";
import imageMeringueDesktop from "../assets/image-meringue-desktop.jpg";

import imageCakeThumbnail from "../assets/image-cake-thumbnail.jpg";
import imageCakeMobile from "../assets/image-cake-mobile.jpg";
import imageCakeTablet from "../assets/image-cake-tablet.jpg";
import imageCakeDesktop from "../assets/image-cake-desktop.jpg";

import imageBrownieThumbnail from "../assets/image-brownie-thumbnail.jpg";
import imageBrownieMobile from "../assets/image-brownie-mobile.jpg";
import imageBrownieTablet from "../assets/image-brownie-tablet.jpg";
import imageBrownieDesktop from "../assets/image-brownie-desktop.jpg";

import imagePannaCottaThumbnail from "../assets/image-panna-cotta-thumbnail.jpg";
import imagePannaCottaMobile from "../assets/image-panna-cotta-mobile.jpg";
import imagePannaCottaTablet from "../assets/image-panna-cotta-tablet.jpg";
import imagePannaCottaDesktop from "../assets/image-panna-cotta-desktop.jpg";

const products = [
  {
    image: {
      thumbnail: imageWaffleThumbnail,
      mobile: imageWaffleMobile,
      tablet: imageWaffleTablet,
      desktop: imageWaffleDesktop,
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: imageCremeBruleeThumbnail,
      mobile: imageCremeBruleeMobile,
      tablet: imageCremeBruleeTablet,
      desktop: imageCremeBruleeDesktop,
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: imageMacaronThumbnail,
      mobile: imageMacaronMobile,
      tablet: imageMacaronTablet,
      desktop: imageMacaronDesktop,
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: imageTiramisuThumbnail,
      mobile: imageTiramisuMobile,
      tablet: imageTiramisuTablet,
      desktop: imageTiramisuDesktop,
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: imageBaklavaThumbnail,
      mobile: imageBaklavaMobile,
      tablet: imageBaklavaTablet,
      desktop: imageBaklavaDesktop,
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: imageMeringueThumbnail,
      mobile: imageMeringueMobile,
      tablet: imageMeringueTablet,
      desktop: imageMeringueDesktop,
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: imageCakeThumbnail,
      mobile: imageCakeMobile,
      tablet: imageCakeTablet,
      desktop: imageCakeDesktop,
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: imageBrownieThumbnail,
      mobile: imageBrownieMobile,
      tablet: imageBrownieTablet,
      desktop: imageBrownieDesktop,
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: imagePannaCottaThumbnail,
      mobile: imagePannaCottaMobile,
      tablet: imagePannaCottaTablet,
      desktop: imagePannaCottaDesktop,
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
const ProductsList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
