---
title: '[HELLO WORLD] About this Blog'
published: 2024-11-02
description: Something about this blog, about why and how
tags: []
category: Blog
draft: false
---

This post is about the blog, especially I will talk about:
- 🔧 Why did I build this blog, and
- 👇 How did I modify the original template.

::github{repo="saicaca/fuwari"}

## Why blog?
I am curious about anything that I can figure out with code.

Before this blog, I built another personal blog with `hexo` in (about?) 2022. But soon, I didn’t update it because I didn’t know what I should upload and share with readers. I am more used to communication on microblogs, sharing transient ideas with a few words. Blog, on the other hand, is not the way.

However, as I started my study as a postgraduate, I found it a recovery to write down my thoughts with more words. Writing English usually happens in a formal context, e.g., academic writing and emails. I want this blog to be a start for my personal English writing.

Pragmatically, it is also a good way for me to think about how to distill complex ideas from lengthy academic papers into short blog posts.

## Change log
### 2024-11-08
- Set the home page as the original `About` page
    - `src/pages/index.astro`： (added a duplicate of `src/pages/about.astro`)
- Modified the view of `Archive` page
    - `src/components/ArchivePanel.astro`: (added the display of tags and description)

### 2024-11-07
- Changed the font to `Lexend-Deca` to enhance readability
    - References: [\[1\]](https://docs.astro.build/en/guides/fonts/#using-fontsource), [\[2\]](https://fontsource.org/fonts/lexend-deca/install) (inspired by [\[3\]](https://blog.3kh0.net/about/))
- Changed the style of TOC (now it will display on the left side)
    - References: [\[1\]](https://github.com/SlimeNull/slimenull.github.io) 
        - `src/config.ts`: (close the original TOC on the right side)
        - `src/components/widget/TOC.astro`: (copy and paste the script)
        - `src/components/widget/SideBar.astro`): (copy and paste part of the script)
        - `src/i18n/i18nKey.ts`: (add `toc = toc,`) 
        - `src/i18n/languages/en.ts`: (add `[Key.toc]: 'TOC',`)

### 2024-11-05
- Uploaded my cv in a new page
    - References: [\[1\]](https://docs.astro.build/en/basics/astro-pages/), [\[2\]](https://docs.astro.build/en/guides/imports/) (inspired by [\[3\]](https://github.com/academicpages/academicpages.github.io))