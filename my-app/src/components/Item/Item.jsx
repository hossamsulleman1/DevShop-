import React from 'react'
import Footer from '../Footer/Footer';
// https://eu.puma.com/uk/en/pd/mirage-tech-trainers/381118.html?dwvar_381118_color=05&dwvar_381118_size=0280#
const Item = () => {
    return (
        <>
        <Grid container >
<Grid item lg ={12}>
    {/* bread crums to collection and item  */}
</Grid>

<Grid item lg ={8} >
    {/* item huge image */}
</Grid>

<Grid item lg ={4}>
    <Grid item lg={1/3}>
{/* item name  */}
    </Grid>
    <Grid item lg={1/3}>
        {/* gutter */}
        </Grid>
        <Grid item lg={1/3}>
        {/* price */}
        <Grid item lg={12}>
{      /* price of item */}
        </Grid>
        <Grid item lg={12}>
            {/*sub title price is inc 20% vat */}
            </Grid>
        </Grid>

<Grid item lg={10}>
    {/* buy now btn  */}
</Grid>

<Grid container xs={12}>

{/* sizes  */}

</Grid>


<Grid item lg={2}>
    {/* qty button */}
</Grid>

<Grid item lg={12}>
    {/* description */}
</Grid>
<Grid item lg={12}>
    {/* shipping */}
</Grid>
</Grid>


        </Grid>
            <Footer></Footer>
        </>
    )
}

export default Item
