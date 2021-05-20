import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css'

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
    if(!confirmed){
        return 'Loading... Try hitting Refresh!';
    }
    return (
        <div className="styles.container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Inifiziert</Typography>
                        <Typography variant="h5" >
                            <CountUp 
                                start={0}
                                end={confirmed}
                                duration={4}
                                seperator=","
                            />
                        </Typography>  
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Gemeldete CoVid-19 Infektionen</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Genesen</Typography>
                        <Typography variant="h5" >
                            <CountUp
                            start={0}
                            end={recovered}
                            duration={4}
                            seperator=","
                            />
                        </Typography>  
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Gemeldete CoVid-19 Genesungen</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Todesfälle</Typography>
                        <Typography variant="h5" >
                            <CountUp 
                                start={0}
                                end={deaths}
                                duration={4}
                                seperator=","
                            />                        
                        </Typography>  
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Gemeldete CoVid-19 Todesfälle</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
