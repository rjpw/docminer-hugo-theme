# docminer-hugo-theme

## Project Status

The development of this theme is in its earliest stages, and is not yet ready for use. Once the initial construction work is complete, this README will be expanded to include features, examples, and a link to a sample site.

## Introduction

Hugo theme for a document repository.

The use case for this theme is to provide some navigation aids and search tools for linked content that appears in non-HTML formm, i.e. PDF, PPT, DOCX, etc.

## Theme Foundation

This structure of this theme was created by following an [excellent tutorial by Janne Kemppainen](https://www.pakstech.com/blog/create-hugo-theme/), up to [step seven](https://www.pakstech.com/blog/hugo-list-page/) (with minor deviations from his tutorial). True to Mr. Kemppainen's experience, working with [Hugo](https://gohugo.io) and [Bulma](https://bulma.io) has proven to be an excellent starting point.

## Additional Sources

Inspiration for the next iterations will come from the following Hugo themes:

* [Docsy](https://themes.gohugo.io/docsy/)
* [Book](https://github.com/alex-shpak/hugo-book)
* [Cloudflare docs](https://github.com/cloudflare/hugo-cloudflare-docs)
* [Sphinx Bulma Theme](https://github.com/gabrielfalcao/sphinx-bulma-theme)

## Roadmap

* Collapsing vertical menu
* Searchability with Algolia
* Edit this page (if logged in)
* Data-driven content (see [Hugo docs](https://gohugo.io/templates/data-templates/#data-driven-content))

## Collapsing Menu

This feature is using Buefy, and so it requires a webpack build. Before including the DocMiner theme in a project, navigate to the root of this theme and run

```bash
npm install
npm run build
```
