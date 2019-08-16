import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import ExplorePresenter from './ExplorePresenter';
import { EXPLORE } from './ExploreQueries';

export default () => {
  const { data, loading } = useQuery(EXPLORE);
  return <ExplorePresenter loading={loading} data={data} />;
};
