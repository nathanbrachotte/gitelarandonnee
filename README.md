# Gîte La Randonnée Website

A rental property website built with Astro, featuring dual rental system support.

## Dual Rental System Implementation

This project has been enhanced to support two rental properties:

- **La Randonnée** (original, purple theme) - `/`
- **Là-Haut** (new, green theme) - `/la-haut/`

### Implementation Details

#### 1. URL Structure

- Main rental "La Randonnée": Standard URLs (e.g., `/`, `/disponibilites`)
- New rental "Là-Haut": Prefixed URLs (e.g., `/la-haut/`, `/la-haut/disponibilites`)
- Shared pages (like `/decouvrir-la-region`) remain the same for both rentals

#### 5. Implementation Status

**✅ Completed:**

- [ ] URL routing system with rental prefixes
- [ ] Header dropdown for rental selection
- [ ] Rental-specific content and images
- [ ] Green theme implementation for "Là-Haut"
- [ ] Dynamic home page content based on rental
- [ ] Placeholder content for new rental
- [ ] Type-safe rental system

**🔄 Testing Required:**

1. Test dropdown functionality on both rentals
2. Verify URL routing works correctly
3. Test page structure handles both rentals
4. Validate theme switching
5. Test mobile responsiveness of new dropdown

**📋 Future Enhancements:**

- Add rental-specific SEO meta tags
- Implement rental-specific pricing
- Add rental-specific gallery images
- Extend to other pages (pricing, availability, etc.)
- Add proper error handling for invalid rental URLs

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
