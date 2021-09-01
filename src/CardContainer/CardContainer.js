import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CardContainer.css';

const CardContainer = () => {
    const data = useLocation();
    const { imageUrl, title } = data;

    return (
            <div className='card-container-wrapper'>
                <img
                    alt='post thumbnail'
                    className='card-image'
                    src={imageUrl}
                />
                <p className='card-title'>{title}</p>

                {data.state.map((item, index) => {
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

export default CardContainer;