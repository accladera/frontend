import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


function CardAbout(props) {

  const { about } = props;

  return (
    <Paper sx={{ p: 4, maxWidth: 700, flexGrow: 1, my: 6 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {about}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

CardAbout.propTypes = {
  about: PropTypes.string.isRequired,
};

export default CardAbout;