---
title: "From Folder to Blog: The Simple Power of MD Files"
date: 2025-10-11
tags: [tutorial, webdev, markdown]
---

Here’s a little secret: this entire blog is powered by a **folder full of `.md` files**.

Seriously. No database. No CMS. Just Markdown.

When I drop a new Markdown file into the `posts` directory, the site automatically detects it, parses its metadata (the YAML section at the top), and generates a new blog entry.

It’s like magic — but simpler.

**Here’s how it works behind the scenes:**

1. Each post starts with a _frontmatter_ section:
   ```yaml
   ---
   title: "My Awesome Post"
   date: 2025-10-13
   tags: [markdown, static]
   ---
   ```
