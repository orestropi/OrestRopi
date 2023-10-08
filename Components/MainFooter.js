import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// import footerBackground from '../milky-way.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/icons-material/GitHub';
import IconButton2 from '@mui/icons-material/LinkedIn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import footerBackground from '../milky-way.jpg';

function MainFooter() {

    const mystyle = {
        borderRadius: 15,
        width: 60,
        height: 60,
      };
      function handleGit(e) {
        e.preventDefault();
        window.open('https://github.com/orestropi','_blank');
      }
      function handleLinked(e) {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/orest-ropi-480036231/','_blank');
      }
    return (
        

        <footer className='footer' >

            <div>
                <Box >
                    <Container  style = {{paddingTop: '50px'}} maxWidth="md">
                        <Grid container textAlign={'center'} direction="row" spacing={2}>
                            <Grid style = {{paddingTop: '50px'}} item xs={12} sm={6} md={6}>
                            <IconButton className = 'button1' style ={mystyle} onClick={handleGit} size="large"><GitHubIcon /> </IconButton>
                                <Typography variant="h6" color="white" >
                                    Projects
                                </Typography>
                                <Typography variant="subtitle1" color="white" >
                                    <a style={{ textDecoration: 'underline' }} target={'_blank'} href="https://rickandmortyfp.glitch.me/">P1: R&M Treemaps</a>
                                </Typography>
                                <Typography variant="subtitle1" color="white" >
                                    <a style={{ textDecoration: 'underline' }} target={'_blank'} href="https://github.com/orestropi/GridGame">P2: GridGame</a>
                                </Typography>
                                <Typography variant="subtitle1" color="white" >
                                    <a style={{ textDecoration: 'underline' }} target={'_blank'} href="https://github.com/orestropi/a3-orestropi">P3: ContactTracker</a>
                                </Typography>
                                <Typography variant="subtitle1" color="white" >
                                    <a style={{ textDecoration: 'underline' }} target={'_blank'} href="https://github.com/BlueOcean090/final_project">P4: TaskManager </a>
                                </Typography>
                                <Typography variant="subtitle1" color="white" >
                                    <a style={{ textDecoration: 'underline' }} target={'_blank'} href="https://github.com/orestropi/P2-OthelloAI/blob/main/agony.py">P5: OthelloAI</a>
                                </Typography>
                                <Typography variant="subtitle1" color="white" >
                                    <a style={{ textDecoration: 'underline' }} target={'_blank'} href="https://github.com/orestropi/P2-Networking/blob/main/wireview.cpp">P6: WireView</a>
                                </Typography>
                            </Grid>
                            
                            <Grid style = {{paddingTop: '50px'}} item xs={12} sm={6} md={6}>
                                <IconButton2 className = 'button1' style ={mystyle} onClick={handleLinked} size="large"><LinkedInIcon/> </IconButton2>
                                <Typography variant="h6" color="white" >
                                    Work Experience
                                </Typography>
                                <Typography variant="subtitle1" color="white" >
                                    <a>Software Engineer Internship - Schneider Electric [4 Months]</a>
                                    <a>\n Full-Stack Developer Internship - Diamond Diagnostics [2 Months]</a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box textAlign={'center'} pt={{ xs: 5, sm: 10 }} pb={{ xs: 4 }}>
                    <Typography variant="body2" color="white">
                        Orest Ropi &reg; {new Date().getFullYear()}
                    </Typography>
                </Box>
            </div>
        </footer>
    )
}

export default MainFooter
