
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)  
[![npm version](https://img.shields.io/npm/v/radium)](https://www.npmjs.com/package/radium)  

Radium is a lightweight **TypeScript/JavaScript framework** for building interactive web applications with reusable UI components, a simple router, and a developer-friendly inspector. It's designed to be simple, modular, and fast for small to medium projects.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
  - [HTML Setup](#html-setup)
  - [Components](#components)
  - [Router](#router)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Custom Components**: Prebuilt UI components like `ByteCard`, `ByteButton`, `ByteModal`.
- **Router**: Navigate between components easily with a simple routing system.
- **Inspector**: Debug tool to log app events.
- **TypeScript Support**: Full typing for better developer experience.
- **Lightweight**: No heavy dependencies.
- **Flexible Configuration**: Swap out the core by editing your `radium.config.ts`.

---

## Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd Radium
npm install
npm run dev
````

This will start a development server. Open your browser to `http://localhost:3000` (or whatever your terminal outputs) to see Radium in action.

---

## Project Structure

```
Radium/
├─ components/         # Prebuilt Radium UI components
│  ├─ byte-card.ts
│  ├─ byte-button.ts
│  └─ byte-modal.ts
├─ framework/          # Core Radium framework files
│  ├─ inspector.ts
│  └─ router.ts
├─ utils/
│  └─ dom.ts           # DOM helper functions
├─ index.html
├─ index.ts            # Entry point
├─ radium.config.ts    # Change this to point to your Radium core if needed
├─ package.json
└─ tsconfig.json
```

---

## Configuration

Radium uses a **core index file** defined in `radium.config.ts`. By default, it points to the framework provided.

> ⚠️ **Important:** If you fork or customize Radium, update `radium.config.ts` to point to your `radium-core/index.ts` file so the components and router work correctly.

Example:

```ts
// radium.config.ts
export { default as core } from './radium-core/index.ts';
```

---

## Usage

### HTML Setup

Include a root element in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Radium App</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./index.ts"></script>
</body>
</html>
```

### Components

Radium provides reusable components out of the box:

```ts
import { ByteCard, ByteButton, ByteModal } from './utils/dom';
import { createInspector } from './framework/inspector';

const app = document.getElementById('app');
const inspector = createInspector();

if (app) {
  const card = new ByteCard();
  card.innerHTML = '<h1>Hello Radium</h1>';

  const button = new ByteButton();
  button.setAttribute('label', 'Open Modal');
  button.addEventListener('click', () => {
    const modal = new ByteModal();
    modal.innerHTML = '<p>This is a modal!</p>';
    document.body.appendChild(modal);
    inspector.log('Modal opened');
  });

  card.appendChild(button);
  app.appendChild(card);
  inspector.log('App initialized');
}
```

### Router

Define routes and navigate between components:

```ts
import { registerRoute, navigate } from './framework/router';

registerRoute('/', async () => {
  const card = document.createElement('div');
  card.innerHTML = '<h2>Home Page</h2>';
  return card;
});

registerRoute('/about', async () => {
  const card = document.createElement('div');
  card.innerHTML = '<h2>About Page</h2>';
  return card;
});

// Navigate to home
navigate('/');
```

---

## Development

Start the development server:

```bash
npm run dev
```

> Make sure you have TypeScript installed globally or locally, as Radium uses `.ts` modules.

Optional: Build for production using your preferred bundler (Vite, Webpack, or esbuild).

---

## Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:

   ```bash
   git commit -m "feat: add new feature"
   ```
4. Push to your branch:

   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

MIT © 2025

