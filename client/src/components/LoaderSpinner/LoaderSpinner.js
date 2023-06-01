import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";
function LoaderSpinner({ loading }) {
  return (
    <ClipLoader
      color="var(--main-color"
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
LoaderSpinner.propTypes = {
  loading: PropTypes.bool,
};
export default LoaderSpinner;
