# 🚀 Job Posting Site

A modern, full-stack job posting platform built with Next.js 15, featuring user authentication, job management, and application tracking. Built with cutting-edge technologies including React 19, Better Auth, and Prisma ORM.

## 🌟 Features

### 🔐 Authentication & Authorization

- **Email/Password Authentication** with Better Auth
- **Social Login** (Google & GitHub OAuth)
- **Protected Routes** with session management
- **Secure Session Handling** with cookie-based authentication

### 💼 Job Management

- **Job Posting** - Create and manage job listings with rich details
- **Advanced Job Search** - Search by title, company, location, and type
- **Job Applications** - One-click apply system with status tracking
- **Dashboard** - Centralized view of posted jobs and applications
- **Real-time Updates** - Instant feedback with toast notifications

### 🎨 Modern UI/UX

- **Responsive Design** - Mobile-first approach with Tailwind CSS 4
- **Toast Notifications** - Real-time feedback with Sonner
- **Loading States** - Enhanced UX with custom loading components
- **Clean Interface** - Professional design with consistent styling
- **Accessibility** - WCAG compliant components

### 🛠️ Developer Experience

- **TypeScript** - Full type safety across the application
- **ESLint** - Code quality and consistency enforcement
- **Turbopack** - Lightning-fast development and build times
- **Component Architecture** - Reusable and maintainable React components
- **API-first Design** - RESTful API endpoints for all operations

## 🏗️ Technology Stack

### Frontend

- **[Next.js 15.5.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - UI library with latest features
- **[TypeScript 5+](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Heroicons](https://heroicons.com/)** - Beautiful SVG icons

### Backend & Database

- **[Better Auth 1.3.11](https://better-auth.com/)** - Modern authentication solution
- **[Prisma 6.16.2](https://www.prisma.io/)** - Type-safe database ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **Next.js API Routes** - Serverless API endpoints

### Development Tools

- **[Turbopack](https://turbo.build/)** - Next-generation bundler
- **[ESLint 9](https://eslint.org/)** - Code linting and formatting
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Date-fns](https://date-fns.org/)** - Date utility library
- **PostCSS** - CSS processing and optimization

## 📁 Project Structure

```
📦 job-posting-site/
├── 📁 prisma/                              # Database layer
│   ├── 📁 migrations/                     # Database migration files
│   │   ├── 📁 20250917162550_updated_scheme/
│   │   │   └── 📄 migration.sql           # SQL migration scripts
│   │   └── 📄 migration_lock.toml         # Migration lock file
│   └── 📄 schema.prisma                   # Database schema definition
├── 📁 public/                             # Static assets
│   └── 📄 logo.png                        # Application logo
├── 📁 src/                                # Source code
│   ├── 📁 app/                            # Next.js App Router (v13+)
│   │   ├── 📁 (auth)/                     # Route groups for auth
│   │   │   ├── 📁 signin/                 # Sign in page
│   │   │   │   ├── 📄 SigninClientPage.tsx # Client-side signin form
│   │   │   │   └── 📄 page.tsx            # Server component wrapper
│   │   │   └── 📁 signup/                 # Sign up page
│   │   │       ├── 📄 SignupClientPage.tsx # Client-side signup form
│   │   │       └── 📄 page.tsx            # Server component wrapper
│   │   ├── 📁 api/                        # API routes (serverless)
│   │   │   ├── 📁 auth/                   # Authentication endpoints
│   │   │   │   └── 📁 [...all]/           # Better Auth catch-all route
│   │   │   │       └── 📄 route.ts        # Auth handler
│   │   │   └── 📁 jobs/                   # Job management API
│   │   │       ├── 📁 [jobId]/            # Dynamic job routes
│   │   │       │   └── 📁 apply/          # Job application endpoint
│   │   │       │       └── 📄 route.ts   # Application handler
│   │   │       └── 📄 route.ts            # Jobs CRUD operations
│   │   ├── 📁 dashboard/                  # User dashboard
│   │   │   └── 📄 page.tsx                # Dashboard main page
│   │   ├── 📁 jobs/                       # Job-related pages
│   │   │   ├── 📁 [id]/                   # Individual job details
│   │   │   │   ├── 📄 ApplyButton.tsx     # Job application component
│   │   │   │   └── 📄 page.tsx            # Job details page
│   │   │   ├── 📁 post/                   # Job posting interface
│   │   │   │   └── 📄 page.tsx            # Job creation form
│   │   │   └── 📄 page.tsx                # Jobs listing with search
│   │   ├── 📄 globals.css                 # Global styles & Tailwind imports
│   │   ├── 📄 layout.tsx                  # Root layout with navigation
│   │   └── 📄 page.tsx                    # Homepage with hero & recent jobs
│   ├── 📁 components/                     # Reusable UI components
│   │   ├── 📄 LoadingButton.tsx           # Button with loading state
│   │   ├── 📄 Navbar.tsx                  # Navigation bar component
│   │   ├── 📄 SignoutButton.tsx           # Sign out functionality
│   │   └── 📄 SocialAuthButtons.tsx       # OAuth login buttons
│   └── 📁 lib/                            # Utility libraries & configurations
│       ├── 📁 actions/                    # Server actions
│       │   └── 📄 auth-actions.ts         # Authentication server actions
│       ├── 📄 auth.ts                     # Better Auth configuration
│       ├── 📄 prisma.ts                   # Prisma client singleton
│       └── 📄 session.ts                  # Session management utilities
├── 📄 .gitignore                          # Git ignore patterns
├── 📄 eslint.config.mjs                   # ESLint configuration
├── 📄 next.config.ts                      # Next.js configuration
├── 📄 package.json                        # Dependencies and scripts
├── 📄 postcss.config.mjs                  # PostCSS configuration
├── 📄 tsconfig.json                       # TypeScript configuration
└── 📄 README.md                           # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18.18+** - [Download here](https://nodejs.org/)
- **PostgreSQL** - [Installation guide](https://www.postgresql.org/download/)
- **Git** - [Download here](https://git-scm.com/)

### 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd job-posting-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env.local
   ```

   Configure the following environment variables:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/jobsite"

   # Better Auth
   BETTER_AUTH_SECRET="your-secret-key-here"
   BETTER_AUTH_URL="http://localhost:3000"

   # OAuth Providers (Optional)
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Database setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma db push

   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

   🎉 Open [http://localhost:3000](http://localhost:3000) to view the application!

## 📋 Available Scripts

| Command               | Description                             |
| --------------------- | --------------------------------------- |
| `npm run dev`         | Start development server with Turbopack |
| `npm run build`       | Build production application            |
| `npm run start`       | Start production server                 |
| `npm run lint`        | Run ESLint for code quality             |
| `npx prisma studio`   | Open Prisma Studio (database GUI)       |
| `npx prisma generate` | Generate Prisma client                  |
| `npx prisma db push`  | Push schema changes to database         |

## 🗄️ Database Schema

The application uses PostgreSQL with the following main entities:

### 👤 User

- **id**: Unique identifier (String)
- **name**: User's full name
- **email**: Email address (unique)
- **emailVerified**: Email verification status (Boolean)
- **image**: Profile image URL (optional)
- **createdAt/updatedAt**: Timestamps
- **Relationships**: Sessions, Accounts, Jobs (posted), Applications

### 💼 Job

- **id**: Unique identifier (CUID)
- **title**: Job title
- **company**: Company name
- **location**: Job location
- **type**: Employment type (Full-time, Part-time, Contract, Internship)
- **description**: Job description (Text)
- **salary**: Salary information (optional)
- **postedAt**: Posted timestamp
- **postedById**: Reference to User who posted
- **Relationships**: Applications, Posted by User

### 📋 Application

- **id**: Unique identifier (CUID)
- **jobId**: Reference to Job
- **userId**: Reference to User (applicant)
- **status**: Application status (PENDING, REVIEWING, ACCEPTED, REJECTED)
- **appliedAt**: Application timestamp
- **Unique Constraint**: One application per user per job

### 🔐 Authentication Tables

- **Session**: User session management with expiration
- **Account**: OAuth account linking for social providers
- **Verification**: Email verification tokens

## 🎯 Key Features Implementation

### 🔒 Authentication Flow

1. **Registration/Login** - Users can sign up with email/password or social providers (GitHub, Google)
2. **Session Management** - Secure session handling with Better Auth and database persistence
3. **Protected Routes** - Automatic redirection for unauthenticated users
4. **Middleware Protection** - Server-side route protection

### 💼 Job Management Workflow

1. **Job Creation** - Authenticated users can post jobs with detailed information
2. **Job Discovery** - Advanced search and filter functionality by title, type, location
3. **Application Process** - One-click apply system with duplicate prevention
4. **Status Tracking** - Real-time application status updates
5. **Dashboard Management** - Centralized view of all user activities

### 🎨 UI/UX Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS utilities
- **Toast Notifications** - Real-time feedback using Sonner library
- **Loading States** - Custom loading components for better user experience
- **Error Handling** - Graceful error messages and recovery mechanisms
- **Form Validation** - Client-side and server-side validation

### 🔍 Search & Filtering

- **Multi-field Search** - Search across job title, description, company, and location
- **Type Filtering** - Filter by employment type (Full-time, Part-time, etc.)
- **Location Filtering** - Search by specific locations
- **Real-time Results** - Instant search results with URL state management

## 🔧 Development Guidelines

### 📝 Code Standards

- **TypeScript** - All components and functions must be properly typed
- **ESLint** - Follow the configured linting rules (Next.js config)
- **Component Structure** - Use functional components with React hooks
- **File Naming** - Use PascalCase for components, camelCase for utilities
- **Import Organization** - Group imports: React, Next.js, third-party, local

### 🏗️ Architecture Patterns

- **Server/Client Components** - Proper separation of server and client logic
- **Session Management** - Use utility functions from `src/lib/session.ts`
- **Database Operations** - All queries through Prisma with proper error handling
- **API Design** - RESTful endpoints with consistent response formats
- **Error Handling** - Consistent error handling across the application

### 🧪 Testing Approach

- **Type Safety** - Leverage TypeScript for compile-time testing
- **Component Testing** - Test individual components in isolation
- **Integration Testing** - Test complete user workflows
- **Database Testing** - Test database operations with test data
- **API Testing** - Test all API endpoints for expected behavior

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/signin` - Email/password login
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signout` - User logout
- `GET /api/auth/session` - Get current session
- `POST /api/auth/callback/github` - GitHub OAuth callback
- `POST /api/auth/callback/google` - Google OAuth callback

### Job Management Endpoints

- `GET /api/jobs` - List all jobs with optional filtering
  - Query params: `?search=term&type=Full-time&location=City`
- `POST /api/jobs` - Create new job (requires authentication)
  - Body: `{ title, company, location, type, description, salary? }`
- `GET /api/jobs/[jobId]/apply` - Check application status
- `POST /api/jobs/[jobId]/apply` - Apply for job (requires authentication)

## 🚀 Deployment

### 🌐 Vercel (Recommended)

1. **Connect Repository** - Link your GitHub repository to Vercel
2. **Configure Environment Variables** - Set all required environment variables
3. **Deploy** - Automatic deployment on push to main branch
4. **Custom Domain** - Configure custom domain if needed

### 🔧 Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### 🌍 Environment Variables for Production

```env
# Required for production
DATABASE_URL="postgresql://user:pass@host:port/db"
BETTER_AUTH_SECRET="your-production-secret"
BETTER_AUTH_URL="https://your-domain.com"

# Optional OAuth (for social login)
GITHUB_CLIENT_ID="your-github-id"
GITHUB_CLIENT_SECRET="your-github-secret"
GOOGLE_CLIENT_ID="your-google-id"
GOOGLE_CLIENT_SECRET="your-google-secret"
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Next.js Team](https://nextjs.org/)** - For the incredible React framework
- **[Vercel](https://vercel.com/)** - For seamless hosting and deployment
- **[Prisma Team](https://prisma.io/)** - For the excellent type-safe ORM
- **[Better Auth](https://better-auth.com/)** - For modern authentication solution
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first styling framework
- **Open Source Community** - For the amazing tools and libraries

<div align="center">

**Built with ❤️ using Next.js 15, React 19, and modern web technologies**

[🔗 Live Demo](https://jobfinderjf.vercel.app/jobs) • [📚 Documentation](https://your-docs-url.com) • [🐛 Report Bug](https://github.com/your-repo/issues) • [✨ Request Feature](https://github.com/your-repo/issues/new?template=feature_request.md)

**🌟 If this project helped you, please give it a star! 🌟**

</div>
