import React, { useContext } from "react";
import { SemContext } from "../../SemContext";
import Grid from "@material-ui/core/Grid";
import Loading from "../Button/Loading";
import Related from "./Related";

const RelatedProduct = () => {
  const [relatedProducts, setRelatedProducts] = useContext(SemContext);

  if (!relatedProducts) return <Loading />;

  return (
    <Grid container justify="center" spacing={4}>
      {relatedProducts.map((product) => (
        <Grid
          key={product.id}
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <Related
            title={product.name}
            img={product.media.source}
            postage="2"
            price={product.price.formatted_with_symbol}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default RelatedProduct;

//  console.log(product.name));
