# Some instructions for me

## Exlude a page from build
```
permalink: false
eleventyExcludeFromCollections: true
```

## How deploy script works
1. The script creates .nojekyll file to avoid jekyl's ignores.
2. The script pushes dist folder to `gh-pages` branch.
3. [Cloudflare Pages](https://dash.cloudflare.com/1393dcb227e0182e713140b102da697d/workers-and-pages) sees a changes in the gh-pages branch and starts deploy.

