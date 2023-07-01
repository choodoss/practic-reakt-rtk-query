import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { comments } from '../../helpers/comments';
import { useSelector } from 'react-redux';
import { selectorFilter } from '../../redux/filterSlice';

export const Comments = () => {
  const filterValue = useSelector(selectorFilter)

  const filterComments = comments.filter(coment => coment.content.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))

  return (
    <Grid>
      {comments &&
        filterComments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
