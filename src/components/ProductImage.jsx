/* eslint-disable react/prop-types */
const ProductImage = ({ image, name }) => {
  return (
    <picture>
      {" "}
      <source srcSet={image.desktop} media="(min-width: 1024px)" />{" "}
      <source srcSet={image.tablet} media="(min-width: 768px)" />{" "}
      <source srcSet={image.mobile} media="(max-width: 767px)" />{" "}
      <img
        src={image.thumbnail}
        alt={name}
        className="rounded-md size-full object-cover"
      />{" "}
    </picture>
  );
};

export default ProductImage;
