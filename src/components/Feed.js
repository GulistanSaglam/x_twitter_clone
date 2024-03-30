import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import { db } from '../firebase';


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id || '',
                    data: doc.data() || '',
                }
            )))
        ))
    }, [])


    return (
        <div className='feed'>

            <div className='feed__header'>
                <h2>Home</h2>
            </div>

            <TweetBox />

            {posts.map(({ id, data: { displayName, username, verified, text, avatar, image } }) => (
                <Post
                    key={id}
                    displayName={displayName}
                    username={username}
                    verified={verified}
                    text={text}
                    avatar={avatar}
                    image={image}
                />

            ))}

        </div>
    )
}

export default Feed