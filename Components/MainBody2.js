import { Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'


function MainBody2() {

    return (
        <div>
            <div className='main-body-item' >
                
                <Grid direction="row" container spacing={4}style={{ marginTop: '5%', marginBottom: '5%'}}>
                        
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                        <p>
                        <img
                            src="./GridGame.png"
                            alt="It's me!"
                        />
                        </p>

                        <p>My name is Orest Ropi and I am a part of WPI's class of 2023.</p>
                        <p>I graduated for computer science in December, 2022.</p>
                        <p>
                        <a href="https://github.com/orestropi"> Github</a> |
                        <a href="https://www.linkedin.com/in/orest-ropi-480036231/"> Linkedin</a>
                        </p>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={6}>
                        <h2>Computer Science Courses taken at WPI</h2>

                        <p>
                        <a style={{ color: 'deepskyblue'}} href="https://www.wpi.edu/academics/departments/computer-science/courses">
                            Link here to learn more about my courses ...</a
                        ><br />
                        CS 1101 INTRO TO PROGRAM DESIGN <br />
                        CS 2102 OBJCT-ORIENTED DESIGN CONCEPTS <br />
                        CS 2011 INTRO-MACHINE ORG & ASSEMBLY <br />
                        CS 2022 DISCRETE MATHEMATICS <br />
                        CS 2223 ALGORITHMS <br />
                        CS 2303 SYSTEMS PROGRAMMING CONCEPTS <br />
                        CS 3013 OPERATING SYSTEMS <br />
                        CS 3043 SOCIAL IMPL OF INFO PROCESSING <br />
                        CS 3133 FOUNDATIONS OF COMP. SCIENCE <br />
                        CS 3431 DATABASE SYSTEMS <br />
                        CS 3516 COMPUTER NETWORKS <br />
                        CS 3733 SOFTWARE ENGINEERING <br />
                        CS 4032 NUMERICAL METHODS FOR LINEAR AND NONLINEAR SYSTEMS <br />
                        CS 4241 WEBWARE <br />
                        CS 4341 INTRO TO AI <br />
                        CS 480X DATA VISUALIZATION <br />
                        CS 4432 DATABASE SYSTEMS II <br />
                        </p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} >

                        <h4>Experience Programing Languages:</h4>

                        <p>
                        Java - a lot <br />
                        HTML - some <br />
                        JavaScript - some <br />
                        C++ - some <br />
                        Python - some <br />
                        MATLAB - some <br />
                        CSS - a little <br />
                        C - a little <br />
                        LaTeX - a little <br />
                        R - a little <br />
                        Unit testing - a lot <br />
                        </p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} >

                        <h4>Experience Technologies:</h4>
                        <p>
                        Windows and Linux - a lot <br />
                        Git - a lot <br />
                        Node.js - some <br />
                        Express.js - some <br />
                        Mongo DB - some <br />
                        Oracle DB - some <br />
                        D3.js - some <br />
                        MySQL DB - a litte <br />
                        AWS - a little <br />
                        Swing - a little <br />
                        react.js - a little <br />
                        </p>
                                            
                                            </Grid>
                                    </Grid>
                                </div>
                            </div>
                        )
                    }

export default MainBody2





































{/* 

// import { Box, Card, Grid, Paper, Typography } from '@mui/material'
// import React from 'react'


// function MainBody2() {

//     return (
//         <div >
//             <div className='main-body-item' >
//                 <Grid direction="column" container spacing={10}style={{ marginTop: '1%'}}>


//                     <Grid item direction="row" height={'120vh'} style={{ marginBottom: '10%'}} container spacing={2}>
                        
//                         <Grid  style={{ justifyContent: "flex-start" }}>
                        
//                         <h1 style={{ marginBottom: '1%', textAlign: 'center' }}>Chronicle in Stone Essay</h1>
                
                        
//                         <object data="https://cisorestessay.tiiny.site/" type="application/pdf" width="350%" height="100%"></object>

//                         </Grid>
                        
//                     </Grid>

//                 </Grid>
//             </div>
//         </div>
//     )
// }

// export default MainBody2 */}