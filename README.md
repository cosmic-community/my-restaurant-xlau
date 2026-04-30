# My Restaurant

![App Preview](https://imgix.cosmicjs.com/1f5e9f30-4485-11f1-9f85-e7af420a77a5-autopilot-photo-1552566626-52f8b828add9-1777547397219.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive restaurant website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🍽️ Menu items organized by category
- 📍 Multiple location pages with hours and contact info
- ⭐ Customer reviews with star ratings
- 🌶️ Dietary info and spice level indicators
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 16 Server Components

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f3382bd696f0214a97726d&clone_repository=69f3393ed696f0214a9772af)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a restaurant website with menu items (including images, pricing, and dietary info), menu categories, locations, and customer reviews.
> 
> User instructions: A restaurant site with menu items grouped by category, hours, locations, and reservation info"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Restaurant". The content is managed in Cosmic CMS with the following object types: menu-categories, menu-items, locations, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A restaurant site with menu items grouped by category, hours, locations, and reservation info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites

- Bun or Node.js 18+
- A Cosmic account and bucket

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all menu items with category data
const { objects } = await cosmic.objects
  .find({ type: 'menu-items' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses 4 content types: menu-categories, menu-items, locations, and reviews. All content is fetched server-side using the Cosmic SDK.

## Deployment Options

Deploy to Vercel or Netlify. Set the following environment variables:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->