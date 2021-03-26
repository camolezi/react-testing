/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const searchRequestMock = [
  {
    title: 'house',
    wordcount: 1000,
  },
  {
    title: 'color',
    wordcount: 7000,
  },
];

const wikiMockHandler = rest.get(
  'https://en.wikipedia.org/w/api.php',
  (req, res, ctx) => {
    const searchKeyword = req.url.searchParams.get('srsearch');
    return res(
      ctx.status(200),
      ctx.json({
        query: {
          search: [
            searchRequestMock.find(
              (article) => article.title === searchKeyword
            ),
          ],
        },
      })
    );
  }
);

const wikiServer = setupServer(wikiMockHandler);
export default wikiServer;
