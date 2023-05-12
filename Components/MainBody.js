import { Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'


function MainBody() {

    return (
        <div>
            <div className='main-body-item' >
                
                <Grid direction="row" container spacing={4}style={{ marginTop: '5%', marginBottom: '5%'}}>
                        
                        <Grid item xs={12} sm={12} md={6} >
                            <h2>P1: RickAndMorty Treemaps</h2>
                            
                        
                        <li>A visualization that displays character activity for Rick and Morty in seasons 1, 2, and 3.</li>
                        <li>An individual project created for my data visualization class that was written in JavaScript using the D3.js library.</li>
                        <div>
                        <iframe scrolling="no" id='iframe-chart' width="100%" height="650vh" src="https://rickandmortyfinalp.glitch.me/" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6}>
                        <h2>P2: GridGame <td style={{ color: 'deepskyblue'}}><a href={"https://drive.google.com/file/d/10YZzXYxkoO2bgg9t1HO7P87QxnMQaZJj/view?usp=sharing"}>Click here to download</a></td> </h2>

                        
                        <li>A java game that allows users to make moves until the center square is 11 or they are out of moves.</li>
                        <li>Fully tested using JUnit5 test cases.</li>
                        <li>An individual project created for my software engineering class that was written in Java using Java Swing for the GUI.</li>
                        <li>Uses The Model View Controller (MVC) design pattern for scalability and development efficiency.</li>
                        <div>
                        <img style={{ marginBottom: '3%'}}src={`./GridGame.png`}/></div>
                        
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={6}>
                        <h2>P3: ContactTracker <td style={{ color: 'deepskyblue'}}><a href={"https://contacttracker.glitch.me/"}>Website Link</a></td></h2>                       
                        <li>A website that allows users to create accounts and record contacts.</li>
                        <li>An individual project for my webware class that used JavaScript, Node.js, Express.js, @hapi/joi, HTML, CSS, cookies, and mongoDB.</li>
                        <div>
                        <img style={{ marginBottom: '3%'}}src={`./ct.png`}/></div>
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={6}>
                        <h2>P4: TaskManager <td style={{ color: 'deepskyblue'}}><a href={"https://www.youtube.com/watch?v=gQYvom4qQxo&ab_channel=Are_guns_magic%3F"}>Youtube Link</a></td></h2>

                        
                        <li>A website that allows users to create accounts and record personalised tasks and subtasks.</li>
                        <li>A group project for my webware class that used JavaScript, HTML, and CSS.</li>
                        <li>I contributed by organizing meetings, creating a login system using mongoDB(front end & back end), and main task functionality(front end & back end).</li>
                        <div>
                        <img style={{ marginBottom: '3%'}}src={`./tt.png`}/></div>
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={6} >
                        <h2>P5: OthelloAI</h2>

                        
                        <li>An engine that plays optimal moves in the board game Othello using a minimax algorithm with alpha-beta pruning.</li>
                        <li>A group project for my AI class that was written in Python. I contributed to writing an evaluation function, writing the majority of the minimax algorithm, and helping with the alpha-beta pruning.</li>
                        <li>The engine, named agony.py, usually can reach a depth of 8-10 moves within 5 seconds.</li>
                        </Grid>

                        
                        <Grid item xs={12} sm={12} md={6}>
                        <h2>P6: WireView</h2>

                        
                        <li>Similar to Wireshark the program parses tcpdump data into different headers, protocols, senders, and recipients.</li>
                        <li>A group project for my networks class that quickly turned into an individual project when my partner stopped doing work.</li>
                        <li>Works on Ubuntu 20.04 Linux virtual machine and is written in C and C++ using the pcap library.</li>
                        </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default MainBody


