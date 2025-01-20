import css from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick, modalSrc }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={css.img}
      onClick={() => onClick({ modalSrc, alt })}
    />
  );
};

export default ImageCard;
