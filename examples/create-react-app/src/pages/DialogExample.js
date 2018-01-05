import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import styles from './styles';

class DialogExample extends React.Component {
  render() {
    const { classes, open, handleClose } = this.props;

    return (
      <Dialog className={classes.dialog} open={open} onClose={handleClose}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DialogExample.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  handleClose: PropTypes.function
};

export default withRoot(withStyles(styles)(DialogExample));
