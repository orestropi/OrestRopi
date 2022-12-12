import { Card, Grid, Paper, Typography, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  
function MainBody3() {

    return (
        <div >
            <div className='main-body-item' >
                <Grid direction="column" container spacing={10}style={{ marginTop: '1%'}}>


                    <Grid item direction="row" height={'120vh'} style={{ marginBottom: '10%'}} container spacing={2}>
                        
                        <Grid  style={{ justifyContent: "flex-start" }}>
                        
                        <h1 style={{ marginBottom: '1%', textAlign: 'center' }}>Gjirokastra, Albania - "City of Stone"</h1>
                
                        <ImageList
                        sx={{ width: 1000, height: 900 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={242}
                        >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                        </Grid>
                        
                    </Grid>

                    <Grid item direction="row" height={'120vh'} style={{ marginBottom: '10%'}} container spacing={2}>
                        
                        <Grid  style={{ justifyContent: "flex-start" }}>
                        
                        <h1 style={{ marginBottom: '1%', textAlign: 'center' }}>Albania - Communism Recovery Visualized</h1>
                
                        <ImageList
                        sx={{ width: 1000, height: 900 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={242}
                        >
                        {itemData2.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                        </Grid>
                        
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

const itemData = [
    {
      img: 'AGmap.svg',
      title: 'Breakfast',
      rows: 3,
      cols: 2,
    },
    {
      img: 'download.jpg',
      title: 'Burger',
    },
    {
      img: 'images.jpg',
      title: 'Camera',
    },
    {
      img: 'gjiro1.jpg',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'gjirokaster-albania-22.jpg',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'Gjirokaster.jpg',
      title: 'Honey',
      rows: 2,
      cols: 2,
    },
    {
      img: 'top.jpg',
      title: 'Basketball',
      rows: 2,
      cols: 2,
    },
    
  ]

  const itemData2 = [
    {
      img: 'chart.svg',
      title: 'Basketball',
      rows: 2.1,
      cols: 4,
    },
    {
        img: 'chart3.svg',
        title: 'Basketball',
        rows: 2.1,
      cols: 4,
      },
    {
        img: 'chart4.svg',
        title: 'Basketball',
        rows: 2.1,
      cols: 4,
      },
    {
        img: 'chart5.svg',
        title: 'Basketball',
        rows: 2.1,
      cols: 4,
      },
      {
        img: 'chart6.svg',
        title: 'Basketball',
        rows: 2.1,
      cols: 4,
      },
    
    
  ]

export default MainBody3