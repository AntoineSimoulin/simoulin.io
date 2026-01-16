---
theme: ../themes/simoulin
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Welcome to Slidev

Presentation slides for developers

---

# Why Slidev?

- 📝 **Markdown-based** - Write slides in a single Markdown file with ease
- 🎨 **Themable** - Themes can be shared and installed as npm packages
- 🧑‍💻 **Developer Friendly** - Code highlighting, live coding with autocompletion
- 🤹 **Interactive** - Embedding Vue components to enhance your expressions <Cite id="yang-etal-2025-docagent, yang-etal-2025-code"/>

---

# Code Snippets

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```
