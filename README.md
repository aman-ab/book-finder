# Book Search App

A simple book search app made with React + Vite.
Uses the Open Library Search API (free, no api key needed).

## How to run

```
npm install
npm run dev
```

Then open the link it gives you in the terminal (usually http://localhost:5173)

## How to deploy to Vercel

1. Push this project to a GitHub repo (just the contents of this folder,
   package.json should be at the top level of the repo, not nested inside
   another folder).
2. Go to vercel.com -> New Project -> Import your GitHub repo.
3. Vercel auto-detects it's a Vite project. Leave the defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click Deploy. Done - no base path config needed, Vercel serves the
   app from the root of its own domain.

If your repo has this project inside a subfolder (like `book-search-3/`
inside a bigger repo), set "Root Directory" in Vercel's project settings
to that subfolder before deploying, otherwise Vercel won't find
package.json.

## Folder structure

```
src/
  App.jsx              -> main component, fetches data from api
  App.css              -> all the styling
  main.jsx             -> react entry point
  components/
    SearchBar.jsx       -> input box + search button
    BookList.jsx        -> loops through books and renders cards
    BookCard.jsx        -> one book card (image, title, author, etc)
```

## API used

Open Library Search API: https://openlibrary.org/dev/docs/api/search

Same idea as `https://api.tvmaze.com/search/shows?q=...` but for books
(one endpoint, one query param, no key needed, cors enabled).

Example request:
```
https://openlibrary.org/search.json?q=harry+potter
```

Example response (shortened):
```json
{
  "docs": [
    {
      "title": "Harry Potter and the Philosopher's Stone",
      "author_name": ["J. K. Rowling"],
      "first_publish_year": 1997,
      "cover_i": 10521270,
      "key": "/works/OL82563W"
    }
  ]
}
```

Book covers come from a separate url:
```
https://covers.openlibrary.org/b/id/{cover_i}-M.jpg
```
