# BoonLore

## Overview

**BoonLore** is a modular, TypeScript-based web application designed to manage a wide range of features, including e-commerce, content display, media integration, and interactive widgets. Built with React and Vite, the project emphasizes scalability, maintainability, and organized code structure. With a unique branding approach using multiple dispositions (Bane, Bone, Bonk, Boof, Boon, Honk, Lore), BoonLore offers a rich and engaging user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Content Pages**: Dedicated routes for `About`, `Contact`, `Courses`, `Recipes`, `Shop`, `Services`, `Tutorials`, `Articles`, `Tips`, `Home`, and more.
- **E-commerce Support**: Fully functional shopping cart with dynamic product loading, utilizing Snipcart for seamless checkout experiences.
- **Media Integration**: Video and image carousels, video players with subtitle support, and Vimeo integration.
- **Modular Widgets**: Reusable components like forms, carousels, logos, and interactive elements, stored under `@widgets`.
- **Identity Themes**: Multiple dispositions/themes (Bane, Bone, Bonk, Boof, Boon, Honk, Lore) providing unique branding and user experiences.
- **Custom Styles**: Organized SCSS files for each component and page for easy theming and styling.
- **Accessibility and SEO**: Utilizes `react-helmet-async` for managing meta tags, improving SEO and accessibility.
- **Progressive Web App (PWA)**: Configured with Workbox and Vite PWA plugin for offline support and enhanced user experience.
- **Testing and Linting**: Set up with Jest for testing and ESLint for code quality assurance.
- **Storybook Integration**: Develop and test UI components in isolation using Storybook.

## Installation

To set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tealstripesvibes/boonlore.git
   ```
2. **Navigate into the project directory:**
   ```bash
   cd boonlore
   ```
3. **Install dependencies:**
   ```bash
   yarn install
   ```
4. **Run the development server:**
   ```bash
   yarn start
   ```
5. **Visit the application:**
   Open `http://localhost:3000` in your browser to view the application.

## Usage

This project is organized for development with Vite and TypeScript, using React for the frontend. Pages and components are stored in the `/pages` and `/src/app` directories respectively.

### Creating a New Page

1. **Add a new folder under `pages`:**
    - Include a `+Page.tsx` component as the entry point.
2. **Add styles if needed:**
    - Create a `_styles` directory within your page folder.
    - Add SCSS files for styling your components.
3. **Import reusable components:**
    - Utilize components from `src/app/@core`, `src/app/@features`, or `src/app/@widgets`.

### Running Storybook

Develop and test UI components in isolation:

```bash
yarn storybook
```

### Building for Production

To build the project for production deployment:

```bash
yarn build
```

### Linting and Formatting

Ensure code quality and consistency:

- **Lint code:**
  ```bash
  yarn lint
  ```
- **Fix lint issues:**
  ```bash
  yarn lint:fix
  ```
- **Format code with Prettier:**
  ```bash
  yarn format
  ```

### Testing

Run tests using Jest:

```bash
yarn test
```

## Folder Structure

Below is a summary of the main directories in this project:

```
.
├── .gitignore
├── README.md
├── env.d.ts
├── package.json
├── pages/                # Main application routes
│   ├── about/
│   ├── articles/
│   ├── contact/
│   ├── courses/
│   ├── demos/
│   ├── home/
│   ├── index/
│   ├── recipes/
│   ├── services/
│   ├── shop/
│   ├── tips/
│   └── tutorials/
├── public/               # Static assets (images, icons, etc.)
│   ├── _shop/
│   ├── images/
│   ├── robots.txt
│   └── sites/
├── src/
│   ├── app/
│   │   ├── @core/        # Core components, hooks, context, and utilities
│   │   ├── @features/    # Standalone features like analytics and shopping
│   │   ├── @identities/  # Identity-related components, logos, and themes
│   │   ├── @services/    # Service utilities (e.g., storage, API clients)
│   │   └── @widgets/     # Reusable widget components (e.g., carousels, forms, videos)
│   └── layouts/          # Global layouts (Head, Layout components)
├── tsconfig.json         # TypeScript configuration
├── vite-env.d.ts
├── vite.config.mts       # Vite configuration
└── yarn.lock             # Yarn lockfile
```

### Key Components and Pages

- **Recipes**: Dynamic recipes organized by ingredients, with components for individual recipes and recipe lists.
- **Shop**: E-commerce components including `Shop`, `ShopItem`, `ShopItemList`, and integration with Snipcart.
- **Widgets**: Independent components like `Carousel`, `FormWidget`, `LogoAnimation`, `SubtitledVideo`, stored under `@widgets`.
- **Identities**: Multiple themes or dispositions with their own logos and styles, enhancing branding flexibility.
- **Core Styles**: Each component and page has its own SCSS files for modular and maintainable styling.
- **Services**: Utilities for local storage, API interactions, and other service-related functionality.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for review.

1. **Fork the repository.**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to your forked repository:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a pull request on GitHub.**

**Please ensure that your code follows the project's coding standards and conventions.** Write clear commit messages and include relevant documentation where applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

If you have any questions or need further assistance, feel free to open an issue or contact the maintainers.