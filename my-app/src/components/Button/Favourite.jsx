import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// fix to add to array of states

useEffect(() => {
  // push to firebase try function
  console.log(currentItem);
    console.log("useEffect");
    try {
      if (authInfo !== null || undefined)  {
        // push to db tree called fav
      }
      setFavourites(currentItem.id)

    } catch (error) {
      console.log(error);
    }
}, [favourites]);

const addToFavHandle () {

setFavourites()



}


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
