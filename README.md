# 🚀 Next.js Enterprise Starter Template

A batteries-included Next.js template for building production-ready applications with TypeScript, TailwindCSS, and modern development tools.

## ✨ Features

### 🏗 Built with Modern Stack
- [Next.js 15](https://nextjs.org/) with App Router
- [React 19](https://react.dev/) with Server Components
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Biome](https://biomejs.dev/) for lightning-fast linting and formatting

### 🧰 Development Tools
- [pnpm](https://pnpm.io/) for fast, disk space efficient package management
- [Lefthook](https://github.com/evilmartians/lefthook) for Git hooks
- [Commitizen](https://commitizen-tools.github.io/commitizen/) for conventional commits
- [Semantic Release](https://semantic-release.gitbook.io/) for automated versioning

### 🧪 Testing Setup
- [Vitest](https://vitest.dev/) for unit testing
- [Playwright](https://playwright.dev/) for end-to-end testing
- [Testing Library](https://testing-library.com/) for component testing

### 🎨 UI Components
- Customizable components using [shadcn/ui](https://ui.shadcn.com/)
- Dark mode support out of the box
- Responsive layout templates

### 🔧 Developer Experience
- Type checking in development
- Fast refresh with Turbopack
- Automated code formatting and linting
- Git hooks for code quality
- VSCode configurations and recommendations

## 📦 Getting Started

### Prerequisites
```bash
node >= 18.0.0
pnpm >= 8.0.0
```

### Quick Start
```bash
# Create a new project
pnpm create next-app -e https://github.com/shabirkhan-dev/next-ts-template

# Or clone directly
git clone https://github.com/shabirkhan-dev/next-ts-template.git my-project
cd my-project
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

```bash
# Run unit tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Run tests with UI
pnpm test:ui

# Generate coverage report
pnpm coverage
```

## 📝 Code Quality

```bash
# Type checking
pnpm typecheck

# Lint files
pnpm lint

# Format files
pnpm format

# Fix linting issues
pnpm lint:fix
```

## 📁 Project Structure

```
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   └── ...        # Other components
│   ├── lib/           # Utility functions
│   ├── styles/        # Global styles
│   └── types/         # TypeScript types
├── public/            # Static files
├── tests/             # Test files
│   ├── e2e/          # Playwright tests
│   └── unit/         # Vitest tests
├── .github/          # GitHub workflows
└── ... config files
```

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `biome.json` - Biome configuration
- `lefthook.yml` - Git hooks configuration
- `vitest.config.ts` - Vitest configuration
- `playwright.config.ts` - Playwright configuration
- `tsconfig.json` - TypeScript configuration

## 📚 Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm test` | Run unit tests |
| `pnpm test:e2e` | Run E2E tests |
| `pnpm lint` | Lint code |
| `pnpm format` | Format code |
| `pnpm commit` | Create conventional commit |
| `pnpm clean` | Clean build files |

## 🚀 Deployment

This template is optimized for deployment on Vercel. Just push to your repository and connect it to Vercel for automatic deployments.

## 📖 Documentation

- [Components](./docs/components.md)
- [Testing](./docs/testing.md)
- [Styling](./docs/styling.md)
- [Development Guide](./docs/development.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using Commitizen (`pnpm commit`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Included Examples

- Authentication setup
- API route examples
- Protected routes
- Form handling
- Data fetching patterns
- Error handling
- Loading states
- SEO optimization

## ⚡️ Performance Features

- Optimized images with next/image
- Automatic font optimization
- Route prefetching
- Bundle analyzing
- Code splitting
- Tree shaking

## 🔒 Security Features

- Headers configuration
- CSP setup
- Environment variables handling
- Rate limiting example
- API route protection

## 🎯 Why Use This Template?

- Production-ready configuration
- Modern development tools
- Best practices implemented
- Type safety out of the box
- Comprehensive testing setup
- Automated workflows
- Consistent code style
- Regular updates

## 📫 Support

For support, email your-email@example.com or open an issue in the repository.

## 👤 Author

**Shabir Khan**
- Website: https://shabirkhan.dev
- Email: shabirkhan.dev@gmail.com

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Shabir Khan](https://github.com/shabirkhan-dev)
