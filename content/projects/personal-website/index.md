---
title: "Personal Site"
showViews: true
date: 2025-02-14T15:23:00-05:00
---

## `garrettholland.com`

A personal domain turned long-running experimentation ground.

### Genesis

This site showcases projects and professional experience. I also post occasional writing to avoid relearning the same things repeatedly.

The domain originally supported internal networking projects. Typing `garrettholland.com` is more memorable than an internal IP address. Since then, I have hosted several iterations here.

I previously deployed fully hand-coded sites (Bootstrap plus light JavaScript) in Azure, Google Cloud Platform, and Amazon Web Services. That exploration predated consistent use of `git`, so no history remains. I also experimented with static site generators (Jekyll and Hugo) across those clouds.

### Current Iteration (Summer 2025)

The site is now built with Hugo and published via GitHub Pages (URL redirect). Outsourcing hosting lets me focus on content rather than infrastructure overhead.

{{< github repo="glholland/glholland.github.io" showThumbnail=true >}}

The most recent refresh focused on maintainability. I streamlined content organization so adding or updating entries does not require re-orienting to the codebase after a gap. This lowers friction and increases iteration speed.

{{< figure
  src="/images/whowrotethis.jpg"
  alt="Meme expressing the dismay of not recognizing original code author."
  caption="Wow, this code is rough. Who wrote this? ... Ah."
  class="ma0 w-75"
>}}

### CI/CD Pipeline

The site uses GitHub Actions to automate deployment to GitHub Pages. This workflow triggers on two primary events:

* Pull requests targeting `main` (preview build only)
  * Subsequent commits to the PR trigger new preview builds
* Pushes to the `main` branch (merge)

{{< codeimporter url="https://raw.githubusercontent.com/glholland/glholland.github.io/refs/heads/main/.github/workflows/hugo-build.yml" type="yaml" >}}
*Linked from [.github/workflows/hugo-build.yml](https://github.com/glholland/glholland.github.io/blob/main/.github/workflows/hugo-build.yml)*

This automation ensures every merge to `main` deploys immediately, while pull requests continuously regenerate a downloadable preview artifact (`hugo-preview`) until approval and merge.

### Hugo Experience

Extensive workplace usage of Hugo (with the Docsy theme) influenced how I structure and templatize this site. I opted for a minimal visual style here to emphasize readability and quick navigation.


### Inspiration

Repositories that may spark ideas — build something beautiful.

Hugo core (documentation: the official site). A static site generator is deceptively sophisticated.

{{< github repo="gohugoio/hugo" showThumbnail=true >}}

Docsy theme for documentation sites (documentation linked in its repository).

{{< github repo="google/docsy" showThumbnail=true >}}

Blowfish theme for Hugo (implemented on this site). Clean, feature-rich, and highly customizable.

{{< github repo="nunocoracao/blowfish" showThumbnail=true >}}

I chose Blowfish for its excellent typography, responsive design, and thoughtful developer experience. The theme provides robust article components and layout options while maintaining high performance. Its documentation is comprehensive, making customization straightforward.

### Contact

Questions or feedback? Use the [contact page](/contact/). I'm always open to collaboration or a quick chat.
