# AWS Data Platform Portal

A React + Vite sample application that demonstrates an internal AWS data engineering operations portal using the AWS Cloudscape Design System.

The app uses mock JSON data only. It is designed to look and feel like a production-facing internal console for data platform teams that operate Glue jobs, Step Functions workflows, Redshift workloads, S3 data lake zones, data quality checks, and alerts.

## Pages

- Dashboard
- Glue Jobs
- Step Functions
- Redshift Queries
- S3 Data Lake
- Data Quality
- Alerts

## Tech Stack

- React 18
- Vite
- AWS Cloudscape Design System
- Mock JSON data
- GitHub Pages deployment

## Cloudscape Components Used

- AppLayout
- SideNavigation
- TopNavigation
- Table
- Cards
- StatusIndicator
- Container
- Header
- Button
- Tabs
- Flashbar

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This project includes two deployment options.

### Option 1: GitHub Actions

The workflow in `.github/workflows/deploy.yml` builds the app and deploys the `dist` folder to GitHub Pages whenever changes are pushed to `main`.

In GitHub, enable Pages with:

- Source: GitHub Actions
- Branch: `main`

### Option 2: Manual Deploy

Use the included deploy script:

```bash
npm run deploy
```

The Vite base path is configured for:

```text
/aws-data-platform-portal/
```

## Screenshots

Add screenshots here after deployment or local preview.

| Dashboard | Operations Table |
| --- | --- |
| ![Dashboard screenshot](./docs/screenshots/dashboard.png) | ![Operations screenshot](./docs/screenshots/operations.png) |

## Project Structure

```text
aws-data-platform-portal/
  src/
    components/
    data/
    pages/
    App.jsx
    main.jsx
    styles.css
  public/
  .github/workflows/
  vite.config.js
```

## Purpose

This sample is intended for demos, portfolio work, and internal enablement examples where teams want to show how AWS-native data platform operations can be represented with a familiar console-style interface.
