import { Box, Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'


function MainBody() {

    return (
        <div >
            <div className='main-body-item' >
                <Grid direction="column" container spacing={10}style={{ marginTop: '1%'}}>


                    <Grid item direction="row" height={'100vh'} style={{ marginBottom: '10%'}} container spacing={2}>
                        
                        <Grid  style={{ justifyContent: "flex-start" }}>
                        
                        <h1 style={{ marginBottom: '1%', textAlign: 'center' }}>Chronicle in Stone</h1>
                
                        <body style={{ marginBottom: '2%', textAlign: 'center' }}>
                        
                        <div>
                        <img style={{ marginBottom: '3%'}}src={`./kadb.jpg`}/></div>
                        
                        Chronicle in Stone by Ismail Kadare was published in 1971. The novel takes place in Gjirokastër, Albania, and is narrated by a young boy. During WW2, the city was occupied by the Italians, Germans, and Greeks. The narrator witnesses the struggles and hardships of life under foreign rule. Through the eyes of the young boy, Kadare paints a vivid picture of the city and its people, as well as the impact of war on their daily lives.

                        <br></br><br></br>One of the central themes is the relationship between culture and war. Kadare uses the story of the city to explore the way in which the past shapes the present, and how culture can be used to understand and interpret the effects of war. The novel also explores the nature of war and its effects on culture, individuals, and society.

                        <br></br><br></br>In addition to its historical and mythological elements, Chronicle in Stone is also a powerful portrayal of Albanian culture. Through the eyes of the narrator, Kadare explores the complexities of love, friendship, loyalty, and revenge. The novel provides a thought-provoking exploration of the shifts in culture during war, and continues to be a classic of Albanian literature.</body>

                        </Grid>
                        
                    </Grid>

                    <Grid item direction="row" height={'130vh'} style={{ marginBottom: '10%'}} container spacing={2}>
                        
                        <Grid  style={{ justifyContent: "flex-start" }}>
                        
                        <h1 style={{ marginBottom: '1%', textAlign: 'center' }}>Ismail Kadare</h1>
                
                        <body style={{ marginBottom: '5%', textAlign: 'center' }}>
                        
                        <div>
                        <img style={{ marginBottom: '3%'}}src={`./10838.jpg`}/></div>
                        
                        Ismail Kadare is an Albanian novelist, poet, and playwright from Albania. Born in 1936 in Gjirokastër, Albania, Kadare grew up under the oppressive rule of Communist dictator Enver Hoxha. Despite this, he was able to attend the University of Tirana, where he studied literature.

                        <br></br><br></br>Kadare's early works were heavily influenced by the strict censorship of the Communist regime, and often contained subtle criticisms of the government. One of his most famous novels, "The General of the Dead Army," tells the story of an Italian general who is sent to Albania to recover the remains of Italian soldiers who died during World War II. Through the character of the general, Kadare explores the brutality and futility of war, as well as the corrupting influence of totalitarianism.


                        <br></br><br></br>In 1990, Kadare was awarded the prestigious Herder Prize for his contributions to literature, and he has since received numerous other awards and honors. He is known for his unique blend of myth, history, and allegory in his works, which often deal with the struggles of the Albanian people against foreign oppression.

                        <br></br><br></br>Despite facing criticism and repression from the Communist government, Kadare remained a powerful and influential voice in Albanian literature. Today, he is regarded as a great writer from the 20th century, and his works have been translated from Albanian into many languages.
</body>

                        </Grid>
                        
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default MainBody