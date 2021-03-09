import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// fix to add to array of states

useEffect(() => {
  effect;
  return () => {
    cleanup;
  };
}, [favourites]);

const Favourite = () => {
  const [favourites, setFavourites] = useContext(SemContext);

  return (
    <div>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
    </div>
  );
};

export default Favourite;
