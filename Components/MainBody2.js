import { Box, Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'


function MainBody2() {

    return (
        <div >
            <div className='main-body-item' >
                <Grid direction="column" container spacing={10}style={{ marginTop: '1%'}}>


                    <Grid item direction="row" height={'120vh'} style={{ marginBottom: '10%'}} container spacing={2}>
                        
                        <Grid  style={{ justifyContent: "flex-start" }}>
                        
                        <h1 style={{ marginBottom: '1%', textAlign: 'center' }}>Chronicle in Stone Essay</h1>
                
                        
                        <object data="https://cisorestessay.tiiny.site/" type="application/pdf" width="350%" height="100%"></object>

                        </Grid>
                        
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default MainBody2