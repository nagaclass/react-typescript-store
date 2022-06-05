import { CircularProgress } from "@material-ui/core";

// Styles
const styles = {
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
};

const LoadingSpinner = () => {
  return (
    <div style={styles.loading}>
      <CircularProgress size={100} />
    </div>
  );
};

export default LoadingSpinner;
