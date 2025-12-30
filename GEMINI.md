# Project Context: AABur Blog

## Overview
This project is the source code for the personal blog of Alexander Burchenko, hosted at [aabur.github.io](https://aabur.github.io/). It is a static site generated using [Jekyll](https://jekyllrb.com/), based on a customized version of the [Reverie](https://github.com/amitmerchant1990/reverie) theme.

## Architecture & Technologies
*   **Static Site Generator:** Jekyll (Ruby)
*   **Templating Engine:** Liquid
*   **Styling:** SCSS (Sass), located in `_sass/` and `assets/style.scss`
*   **Content:** Written in Markdown (GFM), located in `_posts/` and `_pages/`
*   **Plugins:**
    *   `jekyll-sitemap`
    *   `jekyll-feed`
    *   `jekyll-seo-tag`
    *   `jekyll-paginate`

## Key Directories & Files
*   `_config.yml`: Main configuration file (site settings, plugins, permalinks).
*   `_posts/`: Contains blog posts. Naming convention: `YYYY-MM-DD-title.md`.
*   `_pages/`: Contains standalone pages (e.g., about, archive).
*   `_layouts/`: HTML templates for different page types (`default`, `post`, `page`).
*   `_includes/`: Reusable HTML snippets (analytics, meta tags, etc.).
*   `_sass/`: SCSS partials for styling.
*   `assets/`: Static assets like CSS entry points and JavaScript.

## Development Workflow

### Prerequisites
*   Ruby (version specified in `.ruby-version`)
*   Bundler (`gem install bundler`)

### Building & Running
To run the site locally with live reloading:

```bash
bundle install
bundle exec jekyll serve
```

 The site will typically be available at `http://localhost:4000`.

### Creating Content
1.  Create a new Markdown file in `_posts/`.
2.  Filename format: `YYYY-MM-DD-your-title.md`.
3.  Ensure the file includes valid Front Matter at the top:
    ```yaml
    ---
    layout: post
    title: "Your Post Title"
    date: YYYY-MM-DD HH:MM:SS +TZ
    categories: [category1, category2]
    ---
    ```

## Conventions
*   **Styling:** Modify `_sass/` files for global style changes. `assets/style.scss` imports these partials.
*   **Deployment:** The `master` (or `main`) branch is likely deployed via GitHub Pages. Ensure `_site` is not committed if using a standard GH Pages build flow, or check if a specific action handles deployment.
