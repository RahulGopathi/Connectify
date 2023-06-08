import React from 'react';
import Note from './SingleNote';
import { CircularProgress, Grid } from '@mui/material';

import { useSelector } from 'react-redux';
// help us to reterive tha data from global store

const Notes = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => {
    // console.log(state)
    // console.log(state.postReducer.posts)
    return state.postReducer
  });

  // console.log(Array.isArray(posts))
  // console.log(posts)

  if (!posts?.length && !isLoading) return "No Posts"

  return (
    isLoading ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Note post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Notes