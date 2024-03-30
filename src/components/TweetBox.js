import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice'

function TweetBox({ setOpenModal }) {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState("")

    const user = useSelector(selectUser);

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: user.displayName || '',
            username: user.email || '',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setTweetMessage("");
        setTweetImage("");
    }

    const sendTweetModal = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: user.displayName || '',
            username: user.email || '',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setTweetMessage("");
        setTweetImage("");
        setOpenModal(false);
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://static4.depositphotos.com/1000423/380/i/450/depositphotos_3805336-stock-photo-image-of-the-heart.jpg" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What are you thinking??"
                        type='text' />













                    <input
                        value={tweetImage}
                        onChange={(e) => setTweetImage(e.target.value)}
                        className='tweetBox_inputImage'
                        placeholder='Enter image URL/Optional'
                        type='text' />
                </div>

                {setOpenModal && (
                    <Button

                        onClick={sendTweetModal}
                        className='tweetBox__tweetButton'>
                        Tweet
                    </Button>
                )}
                {!setOpenModal && (
                    <Button
                        onClick={sendTweet}
                        className='tweetBox__tweetButton'>
                        Tweet
                    </Button>
                )}

            </form>
        </div>
    )
}

export default TweetBox