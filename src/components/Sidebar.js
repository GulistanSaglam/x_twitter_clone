import React, { useState } from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import XIcon from '@mui/icons-material/X';
import SidebarOption from './SidebarOption';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button, Box, Modal } from '@mui/material';
import TweetBox from './TweetBox';

import { logout } from '../feature/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import { auth } from '../firebase';



function Sidebar() {

    const [openModal, setOpenModal] = useState(false)

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogOut = (e) => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className='sidebar'>
            <XIcon className='sidebar__xIcon' />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchOutlinedIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
            <SidebarOption Icon={EmailOutlinedIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

            <Button onClick={() => setOpenModal(true)} variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
            <Button className='sidebar__logout' onClick={handleLogOut}>Log out</Button>

            {openModal && (
                <div>
                    <Modal
                        className='modal'
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="modal_box">
                            <TweetBox setOpenModal={setOpenModal} />
                        </Box>
                    </Modal>
                </div>
            )}
        </div>
    )
}

export default Sidebar






