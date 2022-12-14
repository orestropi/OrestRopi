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
                <Grid item direction="row" height={'130vh'} style={{ marginBottom: '10%'}} container spacing={2}>
                        
                        <Grid  style={{ justifyContent: "flex-start" }}>
                        
                        <h1 style={{ marginBottom: '1%', textAlign: 'center' }}>Quotes about Gjirokastra, Albania - "City of Stone"</h1>
                
                        <body style={{ marginBottom: '5%', textAlign: 'center' }}>
                        
                        <div>
                        <img style={{ marginBottom: '3%'}}src={`./kadb.jpg`}/></div>
                        
                        "Everything in the city was old and made of stone, from the streets and fountains to the roofs of the sprawling age-old houses covered with grey slates like gigantic scales." (Kadare 20)

                        <br></br><br></br>"The city rejected all comparisons. In fact, it looked like nothing else. It could no more support comparison than it would allow rain, hail, rainbows, or multicoloured foreign flags to remain for long on its rooftops, for they were as fleeting and unreal as the city was lasting and anchored in solid matter." (Kadare 20)


                        <br></br><br></br>"It was a slanted city, set at a sharper angle than perhaps any other city on earth, and it defied the laws of architecture and city planning. The top of one house might graze the foundation of another, and it was surely the only place in the world where if you slipped and fell in the street, you might well land on the roof of a house — a peculiarity known most intimately to drunks." (Kadare 20)

                        <br></br><br></br>"He looked out at the grey
                    cliffs. The city’s numberless roofs were barely visible in the
                    fog."(Kadare 178)
                    </body>

                        </Grid>
                        
                    </Grid>

                    <Grid item direction="row" height={'120vh'} style={{ marginBottom: '10%'}} container spacing={2}>
                        
                        <Grid  style={{ justifyContent: "flex-start" }}>
                        
                        <h1 style={{ marginBottom: '1%', textAlign: 'center' }}>Pictures of Gjirokastra, Albania - "City of Stone"</h1>
                
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