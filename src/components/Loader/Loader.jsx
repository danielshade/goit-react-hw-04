import css from "./Loader.module.css";
import { Watch } from "react-loader-spinner";

function Loader({ visible }) {
  return (
    <div className={css.loader}>
      <Watch
        visible={visible}
        height="80"
        width="80"
        radius="48"
        color="blue"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
export default Loader;
