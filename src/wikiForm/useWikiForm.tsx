import React, { useCallback, useReducer } from 'react';
import WikiFormReducer from './WikiFormReducer';
import {
  WikiFormActions,
  WikiFormActionsTypes,
  WikiFormState,
} from './wikiFormTypes';

const initialState: WikiFormState = {
  searchText: '',
  searchResult: {
    wordCount: 0,
    title: '',
  },
  resultColor: 'white',
};

function getUrlWikipedia(keyword: string) {
  return `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srlimit=1&srsearch=${keyword}`;
}

async function fetchWikipediaData(keyword: string) {
  const wikiData = await fetch(getUrlWikipedia(keyword));
  const data = await wikiData.json();
  return {
    wordCount: data.query.search[0].wordcount,
    title: data.query.search[0].title,
  };
}

function useWikiForm(): [WikiFormState, React.Dispatch<WikiFormActions>] {
  const [wikiForm, dispatch] = useReducer(WikiFormReducer, initialState);

  const dispatchUsingMiddleware = useCallback(
    (action: WikiFormActions) => {
      if (action.type === WikiFormActionsTypes.CLICKED_SEARCH_BUTTON) {
        fetchWikipediaData(action.payload).then((payload) =>
          dispatch({
            type: WikiFormActionsTypes.RECEIVED_WIKIPEDIA_DATA,
            payload,
          })
        );
      }

      dispatch(action);
    },
    [dispatch]
  );

  return [wikiForm, dispatchUsingMiddleware];
}

export default useWikiForm;
