# KloudEra Website

A modern redesign of the **KloudEra Technologies** corporate website, built with **TanStack Start, React, TypeScript, Vite, Tailwind CSS, and Nitro**.

The project is designed to preserve the company's existing information and services while providing a cleaner, more modern, premium user experience with smooth animations, glassmorphism, responsive layouts, and a light/white visual direction.

---

## Project Overview

**Company:** KloudEra Technologies  
**Current Website:** https://www.kloudera.ai/

This repository contains the redesigned version of the KloudEra website.

### Main Goals

- Modernize the existing KloudEra website
- Keep company information and service details accurate
- Maintain a clean, premium, Apple-inspired visual style
- Use glassmorphism where appropriate
- Add smooth, polished animations
- Provide a responsive experience across desktop, tablet, and mobile
- Keep the website fast and production-ready
- Maintain a secure architecture for server-side functionality
- Make the project easy for future developers to understand and maintain

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS
- Motion
- OGL / WebGL components where required
- Lucide React icons

## Backend / Server

- TanStack Start server functions
- Nitro
- Resend for contact/enquiry emails

## Deployment

The project is configured for deployment using:

- Vercel
- Nitro's Vercel preset

---

# Requirements

Before working on the project, make sure you have:

- Node.js installed
- npm installed
- Git installed

Check your versions:

```bash
node --version
npm --version
git --version
```

Use a modern Node.js version compatible with the dependencies in `package.json`.

---

# Getting Started

Clone the repository:

```bash
git clone <REPOSITORY_URL>
```

Enter the project:

```bash
cd kln
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The development server will provide a local URL in the terminal.

---

# Available Commands

## Development

```bash
npm run dev
```

Starts the Vite/TanStack development server.

## Production Build

```bash
npm run build
```

Creates the production build.

This should be run before pushing major changes or deploying.

## Development Build

```bash
npm run build:dev
```

Creates a development-mode build.

## Preview

```bash
npm run preview
```

Runs the configured Vite preview command.

> Note: The production deployment target uses Nitro/Vercel. Do not assume that a normal Vite preview represents the exact Vercel production environment.

## Lint

```bash
npm run lint
```

Runs ESLint.

## Formatting

```bash
npm run format
```

Formats the project using Prettier.

---

# Project Structure

The exact structure may evolve, but the main areas are generally organized around:

```text
kln/
│
├── public/
│   └── Static assets
│
├── src/
│   ├── components/
│   │   └── Reusable UI components
│   │
│   ├── routes/
│   │   └── Website pages/routes
│   │
│   ├── lib/
│   │   └── Utilities and server-side functionality
│   │
│   ├── data/
│   │   └── Website content/data where applicable
│   │
│   └── server.ts
│
├── .env
├── package.json
├── vite.config.ts
├── vercel.json
├── tsconfig.json
└── README.md
```

Always check the current repository structure before creating a new folder or duplicating an existing component.

---

# Important Configuration

## Vite / TanStack Start

The project uses:

```text
@lovable.dev/vite-tanstack-config
```

This configuration already provides several Vite/TanStack integrations.

### Important

Do **not** manually add duplicate versions of plugins that are already supplied by the Lovable TanStack configuration.

This includes things such as:

- TanStack Start
- React/Vite integration
- Tailwind
- TypeScript path configuration
- Nitro
- TanStack development tools

If the existing `vite.config.ts` is changed, preserve the current architecture unless there is a specific reason to modify it.

---

# Vercel Configuration

The project uses Nitro's Vercel preset.

The relevant configuration is in:

```text
vite.config.ts
```

and:

```text
vercel.json
```

The Vercel build should be generated through the existing TanStack/Nitro setup.

Do not replace the deployment architecture with a standard Next.js configuration.

---

# Environment Variables

Environment variables are required for server-side functionality.

The local `.env` file should contain the required variables.

### Contact Form

The contact/enquiry functionality uses:

```text
RESEND_API_KEY
ENQUIRY_TO_EMAIL
ENQUIRY_FROM_EMAIL
```

Example:

```env
RESEND_API_KEY=your_resend_api_key
ENQUIRY_TO_EMAIL=your_destination_email
ENQUIRY_FROM_EMAIL=your_verified_sender_email
```

### Important Security Rule

Never commit `.env` or expose private API keys in frontend code.

Do not use `NEXT_PUBLIC_` or `VITE_` prefixes for secrets that must remain server-side.

For Vercel, add the required environment variables through the project's Environment Variables settings.

---

# Contact / Enquiry System

The contact form uses **Resend** to send enquiry emails.

The server-side functionality is handled through:

```text
contact.functions.ts
```

The frontend should call the server function rather than exposing the Resend API key.

### Important

If changing the contact form:

1. Keep validation on the server.
2. Keep the Resend API key server-side.
3. Validate user input.
4. Do not expose credentials to the browser.
5. Test the form locally before deploying.

---

# Design Direction

The visual direction of the website is intentional.

## Primary Style

- Clean
- Premium
- Modern
- Light/white dominant
- Apple-inspired
- Glassmorphism
- Soft gradients
- Smooth transitions
- High-quality typography
- Subtle depth
- Professional corporate appearance

The site should **not** become a generic dark SaaS website.

### Animation

Animations should feel:

- Smooth
- Controlled
- Premium
- Purposeful

Avoid excessive animations that reduce readability, accessibility, or performance.

---

# Content Guidelines

The website contains information originating from KloudEra's existing website.

When updating content:

- Verify company information before changing it.
- Do not remove important services or certifications without confirmation.
- Keep terminology consistent across pages.
- Preserve official certification names.
- Use the existing website as the source of truth when importing company information.
- Avoid inventing company claims, statistics, certifications, partnerships, or services.

If new company information is supplied by the company, that information should take precedence over older website content.

---

# Certifications

The certifications section contains company certification information and associated assets.

When modifying certifications:

- Keep certification names accurate.
- Keep descriptions accurate.
- Preserve associated images/logos.
- Do not replace certification assets with unrelated images.
- Keep the existing visual design unless a redesign has specifically been requested.

The certification content/data may be relatively large, so avoid unnecessarily duplicating the same data across multiple components.

---

# Images and Assets

Static assets should generally be placed inside:

```text
public/
```

When adding assets:

- Use descriptive filenames.
- Avoid unnecessary duplicate images.
- Optimize large images where possible.
- Use appropriate image formats.
- Check mobile performance when adding large visual assets.

Do not delete existing assets simply because they are not currently visible on one page.

Check whether they are referenced elsewhere first.

---

# Component Guidelines

Prefer reusable components instead of duplicating UI.

For example:

```text
Navbar
Footer
GlassCard
SectionHeading
Button
ServiceCard
CertificationCard
```

If a UI element appears multiple times, consider making it reusable.

Keep page-specific logic inside the relevant route/page when it does not need to be shared.

---

# Responsive Design

Every page should be tested at:

- Desktop
- Laptop
- Tablet
- Mobile

Do not assume desktop layouts will automatically work on smaller screens.

Pay particular attention to:

- Navigation
- Hero sections
- Cards
- Grids
- Text wrapping
- Images
- Horizontal scrolling elements
- Animation performance
- Touch interaction

---

# Accessibility

Future changes should preserve accessibility.

Important considerations:

- Use semantic HTML.
- Provide meaningful `alt` text for important images.
- Maintain keyboard navigation.
- Ensure sufficient text contrast.
- Do not rely exclusively on animation to communicate information.
- Respect reduced-motion preferences where practical.
- Keep interactive elements identifiable.

---

# Performance

Before adding a large dependency, check whether an existing dependency can solve the problem.

Be careful with:

- Large JavaScript bundles
- Large images
- WebGL effects
- Unnecessary animations
- Duplicate libraries
- Huge data files imported into client components

The goal is to keep the visual experience impressive without unnecessarily increasing page load time.

---

# Git Workflow

Before making changes:

```bash
git pull
```

After making changes:

```bash
git status
```

Review the changes:

```bash
git diff
```

Then:

```bash
git add .
git commit -m "Describe the change"
git push
```

Use meaningful commit messages.

Examples:

```text
Add certifications section
Fix contact form validation
Update KloudEra services content
Improve mobile navigation
Fix responsive hero layout
Prepare Vercel deployment
```

---

# Before Pushing

Run:

```bash
npm run lint
```

Then:

```bash
npm run build
```

If both succeed, review the website locally and then push the changes.

Do not knowingly push a broken production build.

---

# Deployment

The production deployment target is **Vercel**.

The project is configured to generate the required Vercel output through Nitro.

Typical workflow:

```text
Local development
       ↓
Test changes
       ↓
npm run lint
       ↓
npm run build
       ↓
git add .
       ↓
git commit
       ↓
git push
       ↓
Vercel deployment
       ↓
Production testing
```

Environment variables must also be configured in Vercel.

---

# Important: Do Not Convert the Project to Next.js

Although the original website redesign concept was discussed as a Next.js project, the current working implementation is a:

**TanStack Start application.**

Do not convert the project to Next.js unless the project owner explicitly requests it.

The current deployment and build configuration depends on:

```text
TanStack Start
+
Vite
+
Nitro
+
Vercel
```

---

# Working Rules for Future Developers

Before changing existing functionality:

1. Understand the existing implementation.
2. Search for existing components before creating new ones.
3. Reuse existing utilities where possible.
4. Do not change the global theme without approval.
5. Do not replace working dependencies without a reason.
6. Do not expose environment variables or API keys.
7. Do not remove company content without verification.
8. Run lint and build before committing.
9. Test responsive layouts.
10. Keep animations smooth and purposeful.
11. Avoid unnecessary redesigns while fixing individual issues.
12. Keep the production deployment configuration intact.

---

# Troubleshooting

## `npm install` fails

Try:

```bash
npm install
```

If dependency issues appear, inspect:

```bash
npm ls
```

Do not immediately delete `package-lock.json` or upgrade every dependency.

---

## Build fails

Run:

```bash
npm run build
```

Read the **first meaningful error**, not just the final error message.

Check:

- Recent code changes
- Imports
- Environment variables
- TanStack versions
- Vite configuration
- Server functions

---

## Contact form doesn't work

Check:

```text
RESEND_API_KEY
ENQUIRY_TO_EMAIL
ENQUIRY_FROM_EMAIL
```

Then verify that the sender address/domain is properly configured in Resend.

---

## Vercel deployment fails

Check:

1. `npm run build` works locally.
2. Vercel environment variables are configured.
3. `vercel.json` has not been removed or changed incorrectly.
4. Nitro/Vercel configuration in `vite.config.ts` is intact.
5. The Node.js version used by Vercel is compatible with the project.

---

# Production Checklist

Before considering a release complete:

- [ ] All pages load
- [ ] Navigation works
- [ ] Mobile layout works
- [ ] Desktop layout works
- [ ] Contact form works
- [ ] Email delivery works
- [ ] Certifications display correctly
- [ ] Images load correctly
- [ ] No broken links
- [ ] No console errors
- [ ] No exposed API keys
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Production deployment works

---

# Project Status

This project is actively under development.

The current priority is to maintain the existing KloudEra redesign while completing content, functionality, deployment, and production testing.

When working on the project, **preserve the existing design direction and working functionality unless a specific change has been requested.**

---

## Maintainer

**Manan**

Project: **KloudEra Website Redesign**

Built with:

**TanStack Start · React · TypeScript · Vite · Tailwind CSS · Nitro · Vercel**