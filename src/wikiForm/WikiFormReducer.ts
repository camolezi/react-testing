import {
  WikiFormActions,
  WikiFormActionsTypes,
  WikiFormState,
  WikiSearchResult,
} from './wikiFormTypes';

function WikiFormReducer(
  state: WikiFormState,
  action: WikiFormActions
): WikiFormState {
  switch (action.type) {
    case WikiFormActionsTypes.RECEIVED_WIKIPEDIA_DATA: {
      const payload = (action.payload as unknown) as WikiSearchResult;

      if (payload.wordCount > 5000) return { ...state, resultColor: 'red' };
      return { ...state, resultColor: 'green' };
    }

    default:
      return state;
  }
}

export default WikiFormReducer;
