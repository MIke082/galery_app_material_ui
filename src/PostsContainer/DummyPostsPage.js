import React, { useState } from 'react';
// import Post from './DummyPost';
import './DummyPosts.css';
// import data 
import dummyData from '../dummy-data';
import DummyPost from './DummyPost';

const DummyPostsPage = () => {

  const [datas, setData] = useState(dummyData);
  return (
    <>
      <div className='postsPage-container-wrapper'>
        {
          datas.map(data =>
            <DummyPost post={data} key={data.id} />
          )
        }
      </div>
    </>
  );
};

export default DummyPostsPage;
