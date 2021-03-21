interface WikiSearchResult {
  wordCount: number;
  title: string;
}

export interface WikiFormState {
  searchText: string;
  searchResult: WikiSearchResult;
}

export enum WikiFormActionsTypes {
  CLICKED_SEARCH_BUTTON = 'CLICKED_SEARCH_BUTTON',
  RECEIVED_WIKIPEDIA_DATA = 'RECEIVED_WIKIPEDIA_DATA',
}

export interface clickedSearchButton {
  type: WikiFormActionsTypes.CLICKED_SEARCH_BUTTON;
  payload: string;
}

export interface receivedWikipediaData {
  type: WikiFormActionsTypes.RECEIVED_WIKIPEDIA_DATA;
  payload: WikiSearchResult;
}

export type WikiFormActions = clickedSearchButton | receivedWikipediaData;

function WikiFormReducer(
  state: WikiFormState,
  action: WikiFormActions
): WikiFormState {
  console.log(action);
  return state;
}

export default WikiFormReducer;
