import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderColor: "blue",
};

const Spinners = () => {
  return (
    <ClipLoader
      color="blue"
      loading="true"
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinners;
