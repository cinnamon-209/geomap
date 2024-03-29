import React, {useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 30,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function Search({parentOpen, value, onChange, list , onClick, onSubmit }) {
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {

    if (parentOpen) {
        setOpen(true)
    }
      return () => {
      }
  }, [parentOpen])

  return (
    
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle align='center' id="customized-dialog-title" onClose={handleClose}>
          Location Search
        </DialogTitle>
        <DialogContent dividers align='center'>
            <form>
            <input type="text" value={value}  onChange={onChange}  />
            </form>
            <br/>
        <Typography gutterBottom align='center'>
            {list.filter((onChange) => (item) => item.SEARCHVAL.toLowerCase().includes(onChange.toLowerCase())).map((item, k) => (
            <div className="locationList" key = {k}>
                <Button  variant="contained" onClick={() => onSubmit({item})}> {item.ADDRESS} </Button>
            </div>
            ))}
        </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
