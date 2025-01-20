import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ gallery, onClick }) => {
  if (!gallery) {
    return;
  }

  return (
    <>
      <div className={css.gallery}>
        <ul className={css.list}>
          {gallery.map((item) => {
            return (
              <li key={item.id} className={css.item}>
                <ImageCard
                  src={item.urls.small}
                  alt={item.description}
                  onClick={onClick}
                  modalSrc={item.urls.regular}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ImageGallery;
