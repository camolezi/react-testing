import {
  WikiFormActions,
  WikiFormActionsTypes,
  WikiFormState,
  WikiSearchResult,
} from './wikiFormTypes';

export const wikiFormInitialState: WikiFormState = {
  searchText: '',
  searchResult: {
    wordCount: 0,
    title: '',
  },
  resultColor: 'white',
};

function WikiFormReducer(
  state: WikiFormState = wikiFormInitialState,
  action: WikiFormActions
): WikiFormState {
  switch (action.type) {
    case WikiFormActionsTypes.RECEIVED_WIKIPEDIA_DATA: {
      const payload = (action.payload as unknown) as WikiSearchResult;

      return {
        ...state,
        searchResult: { ...payload },
        resultColor: selectColorBasedOnWordCount(action.payload.wordCount),
      };
    }

    default:
      return state;
  }
}

function selectColorBasedOnWordCount(wordCount: number): string {
  if (wordCount > 5000) return 'red';
  return 'green';
}

export default WikiFormReducer;
