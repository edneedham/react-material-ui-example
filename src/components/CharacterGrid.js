import React from 'react';

import LoadingSpinner from './LoadingSpinner';
import CharacterItem from '../Components/CharacterItem';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const CharacterGrid = ({ items, isLoading }) => {
  const classes = useStyles();

  return isLoading ? <LoadingSpinner /> : <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
      <Grid container justify="center" spacing={2}>
        {items.map((item) => (
          <CharacterItem key={item.id} item={item}></CharacterItem>
        ))}
      </Grid>
    </Grid>
  </Grid>
}

export default CharacterGrid;