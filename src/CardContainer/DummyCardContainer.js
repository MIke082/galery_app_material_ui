import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CardContainer.css';

const DummyCardContainer = () => {

    const data = useLocation();

    const { state } = data;
    const { title, imageUrl } = state
    const postComments = state.comments;
    return (
        <div className='card-container-wrapper'>
            
            <img
                alt='post thumbnail'
                className='card-image'
                src={imageUrl}
            />
            <p className='card-title'>Title: {title}</p>
            {postComments.map((item, index) => {
                return (
                    <div key={index} className='card-comment-text'>
                        <b>Name: {item.username}</b>
                        <p>Comment: {item.text}</p>
                    </div>
                )
            }
            )}
            <Link
                style={{ textDecoration: 'none', color: 'black', marginTop: 20 }}
                to='/mainPage'>
                Back to main page
            </Link>
        </div>
    );
};

export default DummyCardContainer;