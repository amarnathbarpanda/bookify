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

export default function UserIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {logOut, currentUser} = useContext(GlobalContext);

  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);  // should be written to close the menu
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
        history.push("/login")
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




  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls={UserIcon}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar alt="user" style={user}  src={currentUser.photoURL} >{currentUser.displayName}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={menuItem} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem style={menuItem}  onClick={handleClose}>
          View Orders
        </MenuItem>
        <MenuItem style={menuItem} onClick={logOutAction}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
