import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage }) => {
  return (
    <div>
      <button
        className={css.btn}
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        {" "}
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
