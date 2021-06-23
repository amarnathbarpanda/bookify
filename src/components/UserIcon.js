import React,{ useContext } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
import './UserIcon.css'
import { GlobalContext } from "../GlobalContext/StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Button from '@material-ui/core/Button';
import { useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import DialogTitle from '@material-ui/core/DialogTitle';
import './UserIcon.css';


export default function UserIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {logOut, currentUser} = useContext(GlobalContext);

  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);  // should be written to close the menu
    // console.log(currentUser.photoURL);
  };
  const logOutAction = async ()=>{
    setAnchorEl(null);

    try {
        await logOut();
        toast.success("Logged out Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        history.push("/")
      } catch {
        toast.error("Failed to log out!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }
    
  }
  const user = {
    width: '3.4rem',
    height: '3.4rem'
  };

  const menuItem = {
      fontSize: '1.5rem'
    }



    const TextOnlyTooltip = withStyles({
      tooltip: {
        color: "var(--clr-white)",
        backgroundColor: "var(--clr-primary)",
        fontSize: 15,
      },
    })(Tooltip);

    const handleOrders = ()=> {
      setAnchorEl(null);
      history.push('/orders');
  
    }
  //? code for profile dialog box

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
      setAnchorEl(null);
      setOpen(true);
    };
  
    const handleCloseDialog = () => {
      setOpen(false);
    };

    const  profileBtn = {
      fontSize: '2rem',
    }

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls={UserIcon}
        aria-haspopup="true"
        onClick={handleClick}
      >
    <TextOnlyTooltip title={currentUser.displayName} placement="bottom" arrow>
        <Avatar alt="user" style={user}  src={currentUser.photoURL} ></Avatar>
      </TextOnlyTooltip>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={menuItem} onClick={handleClickOpen}>
          Profile
        </MenuItem>
        <MenuItem style={menuItem}  onClick={handleOrders}>
          View Orders
        </MenuItem>
        <MenuItem style={menuItem} onClick={logOutAction}>
          Logout
        </MenuItem>
      </Menu>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        className="dialog"
        aria-labelledby="responsive-dialog-title"
      >
      <DialogTitle id="responsive_dialog_title"><h1 class="profile">User Profile</h1></DialogTitle>
      
      <div className="profile__container">
      <Avatar alt="user" style={{width: '15rem',height:'15rem'}}  src={currentUser.photoURL} ></Avatar>
      <span className="name">{currentUser?.displayName}</span>
      <span className="email">{currentUser?.email}</span>
        <Button style={profileBtn} onClick={handleCloseDialog} color="primary" variant="contained" autoFocus>
            Close
          </Button>
      </div>
      
      </Dialog>
    </div>
  );
}
