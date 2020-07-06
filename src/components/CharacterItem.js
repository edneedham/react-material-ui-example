import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12
  }
});



const CharacterItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {props.age}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {props.eye_color}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CharacterItem;