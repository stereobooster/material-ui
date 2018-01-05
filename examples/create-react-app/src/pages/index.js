import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import styles from './styles';
import loadable from 'loadable-components'
// import DialogExample from './DialogExample';
const DialogExample = loadable(() => import('./DialogExample'))

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  componentDidmount() {
    DialogExample.load();
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <DialogExample open={open} handleClose={this.handleClose} />
        <Typography type="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography type="subheading" gutterBottom>
          example project
        </Typography>
        <Button raised color="accent" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
