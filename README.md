# Library Management System

A modern, responsive library management system built with Next.js, React 19, and TailwindCSS. Features a beautiful dark mode implementation and comprehensive library management tools.

## 🌟 Features

- Modern React 19 with Server Components
- Next.js 15 App Router
- Dark/Light mode theming
- Responsive design
- Type-safe with TypeScript
- Styled with TailwindCSS
- Comprehensive commit workflow with Commitizen
- Automated release management with semantic-release
- Code quality tools (Biome, ESLint)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/library-management.git

# Navigate to the project directory
cd library-management

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🧪 Testing

To ensure code quality and prevent regressions, we use Playwright for E2E testing and Vitest for unit testing.

First, install the additional testing dependencies:

```bash
pnpm add -D @playwright/test vitest @testing-library/react @testing-library/jest-dom
```

### Running Tests

```bash
# Run Vitest unit tests
pnpm test

# Run Playwright E2E tests
pnpm test:e2e
```

Add the following scripts to your package.json:

```json
{
  "scripts": {
    // ... existing scripts
    "test": "vitest",
    "test:e2e": "playwright test",
    "test:ui": "vitest --ui",
    "coverage": "vitest run --coverage"
  }
}
```

## 📝 Code Quality

```bash
# Run type checking
pnpm typecheck

# Run linting
pnm lint

# Format code
pnpm format

# Fix linting issues
pnpm lint:fix
```

## 🔄 Commit Workflow

This project uses Commitizen for standardized commit messages:

```bash
# Stage your changes
git add .

# Commit using Commitizen
pnpm commit
```

## 🔧 Configuration Files

The project includes several configuration files:

- `tailwind.config.js` - TailwindCSS configuration
- `biome.json` - Biome configuration
- `lefthook.yml` - Git hooks configuration
- `tsconfig.json` - TypeScript configuration

## 📦 Release Process

Releases are automated using semantic-release. The configuration includes:

- Conventional commit message parsing
- Automated changelog generation
- GitHub release creation
- Version bumping

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/)
- [semantic-release](https://semantic-release.gitbook.io/)
- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [Playwright](https://playwright.dev/)
- [Vitest](https://vitest.dev/)

## 👤 Author

**Shabir Khan**
- Website: https://shabirkhan.dev
- Email: shabirkhan.dev@gmail.com

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.