import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = ({ setQuery, clearImages, prevQuery }) => {
  const hansleSubmit = (e) => {
    e.preventDefault();
    let newQuery = e.target.elements.input.value;
    if (newQuery.trim() === "") {
      toast.error("Please, enter your query");
      return;
    } else if (newQuery.trim() === prevQuery) {
      toast.error("Please, enter new query");
      e.target.elements.input.value = "";
      return;
    } else if (newQuery.length < 3) {
      toast.error("The query must be at least three letters long");
      e.target.elements.input.value = "";
      return;
    } else {
      clearImages();
      setQuery(newQuery);
      e.target.elements.input.value = "";
    }
  };

  return (
    <header className={css.search}>
      <form className={css.formSearch} onSubmit={hansleSubmit}>
        <input
          name="input"
          className={css.inputSearch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.btnSearch}>
          {" "}
          <LiaSearchSolid size={25} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
