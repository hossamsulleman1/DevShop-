import React from 'react'

const Footer = () => {
    return (
        <>
            <Grid container>
                <Grid container lg={4} >

                <Grid item lg ={12}>
                        {/* logo*/}
                    </Grid>
                <Grid item lg ={12}>
                        {/* divider */}
                    </Grid>

                    <Grid item lg={12}>
                        {/* support title */}
                    </Grid>

                    <Grid item lg={6}>
{/* left */}
                    </Grid>

                    <Grid item lg={6}>
                        {/* right  */}
                    </Grid>
                </Grid>

                <Grid container lg={4} >
                <Grid item lg ={12}>
                        {/* gutter*/}
                    </Grid>
                    <Grid item lg ={12}>
                        {/* divider */}
                    </Grid>

                    <Grid item lg={12}>
                        {/* about title */}
                    </Grid>

                    <Grid item lg={6}>
                        {/* left */}
                    </Grid>

                    <Grid item lg={6}>
                        {/* right */}
                    </Grid>
                </Grid>

                <Grid container lg={1} >
                    {/* gutter */}
                </Grid>

                <Grid container lg={3} >
                    <Grid item lg={12}>
                         {/* sign up to news letter title */}
                    </Grid>
                    <Grid item lg={12}>
                         {/* sign up button */}
                    </Grid>

                    <Grid item lg={12}>
                         {/* folllow us title */}
                    </Grid>

                    <Grid item lg={2}>
                         {/* folllow us title */}
                    </Grid>
                    <Grid item lg={2}>
                         {/* socials */}
                    </Grid>
                    <Grid item lg={2}>
                         {/* socials */}
                    </Grid>
                    <Grid item lg={2}>
                         {/* socials */}
                    </Grid>
                    <Grid item lg={2}>
                         {/* socials */}
                    </Grid>

                    <Grid item lg={2}>
                         {/* socials */}
                    </Grid>
<Grid item xs={12}>
    {/* divider */}
</Grid>

<Grid item xs={12}>
    {/* gutter */}
</Grid>


                </Grid>
            </Grid>

            {/* divider */}

            <Grid container>
<Grid item lg={1/3}>
{/* english stamp language */}
</Grid>

<Grid item lg={1/3}>
    {/* rights 2020 ect */}
</Grid>

<Grid item lg={1/3}>
    {/* cookie notice link */}
    {/* another link */}
</Grid>
            </Grid>
        </>
    )
}

export default Footer
