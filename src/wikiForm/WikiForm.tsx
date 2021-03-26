import React, { useState } from 'react';
import ShowSearchResult from './ShowSearchResult';
import useWikiForm from './useWikiForm';
import { WikiFormActionsTypes } from './wikiFormTypes';

function WikiForm(): JSX.Element {
  const [text, setText] = useState('');
  const [searchState, dispatch] = useWikiForm();

  return (
    <>
      <label htmlFor="wikiInput">
        Type something:
        <input
          id="wikiInput"
          type="text"
          onChange={(value) => setText(value.target.value)}
        />
      </label>
      <br />

      <button
        type="button"
        onClick={() =>
          dispatch({
            type: WikiFormActionsTypes.CLICKED_SEARCH_BUTTON,
            payload: text,
          })
        }
      >
        Search on Wikipedia
      </button>

      {searchState.resultColor !== 'white' && (
        <ShowSearchResult color={searchState.resultColor} />
      )}
    </>
  );
}

export default WikiForm;
