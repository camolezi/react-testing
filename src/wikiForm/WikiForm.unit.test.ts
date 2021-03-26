import WikiFormReducer, { wikiFormInitialState } from './WikiFormReducer';
import { WikiFormActionsTypes } from './wikiFormTypes';

const buildWikiResult = (wordCount = 500, title = 'testTitle') => ({
  title,
  wordCount,
});

test('Should have color green if wordcount is smaller than 5000', () => {
  const wikiResultFixture = buildWikiResult();

  const newState = WikiFormReducer(wikiFormInitialState, {
    type: WikiFormActionsTypes.RECEIVED_WIKIPEDIA_DATA,
    payload: wikiResultFixture,
  });

  expect(newState.searchResult).toMatchObject(wikiResultFixture);
  expect(newState.resultColor).toBe('green');
});

test('Should have color red if wordcount is greater than 5000', () => {
  const wikiResultFixture = buildWikiResult(9000);

  const newState = WikiFormReducer(wikiFormInitialState, {
    type: WikiFormActionsTypes.RECEIVED_WIKIPEDIA_DATA,
    payload: wikiResultFixture,
  });

  expect(newState.searchResult).toMatchObject(wikiResultFixture);
  expect(newState.resultColor).toBe('red');
});
