import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Loader from '../../Components/Loader';
import SquarePost from '../../Components/SquarePost';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Files = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

export default ({ loading, data }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.explorePost) {
    return (
      <Wrapper>
        <Helmet>
          <title>Simulacre</title>
        </Helmet>
        <Files>
          {data.explorePost &&
            data.explorePost.map(file => (
              <SquarePost
                key={file.id}
                likeCount={file.likeCount}
                commentCount={file.commentCount}
                file={file.files[0]}
              />
            ))}
        </Files>
      </Wrapper>
    );
  }
  return null;
};
