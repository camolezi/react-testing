import React from 'react';

interface Props {
  color: string;
}

function ShowSearchResult({ color }: Props): JSX.Element {
  return <h1 style={{ backgroundColor: color }}>TEST</h1>;
}

export default ShowSearchResult;
