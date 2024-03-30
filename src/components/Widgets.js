import React from 'react'
import './Widgets.css'
// import {
//     TwitterTimelineEmbed,
//     TwitterShareButton,
//     TwitterTweetEmbed,
// } from 'react-twitter-embed';
import { SearchOutlined } from '@mui/icons-material';


function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchOutlined className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>

            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>
                <img
                    height={200}
                    width={250}
                    src="https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-2862.jpg" />

                <img
                    height={200}
                    width={250}
                    src='https://webneel.com/daily/sites/default/files/images/daily/05-2020/creative-advertisement-design-tea-curtis-catz-wolf.jpg'
                />
            </div>
        </div>
    )
}

export default Widgets