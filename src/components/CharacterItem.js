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



const CharacterItem = (item) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {item.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {item.age}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {item.eye_color}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CharacterItem;