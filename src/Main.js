import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Main() {
  return (
    <main>
      <h2
        style={{
          fontWeight: 200,
        }}
      >
        Material-UI
      </h2>
      <h3>Buttons</h3>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <h3>Icons</h3>
      <h3>Inputs</h3>
    </main>
  );
}

export default Main;
