# Assets Directory

This directory contains static assets for the Reactive Frontend Journal application.

## Structure

- `images/` - Image files (logos, icons, illustrations)
- `icons/` - SVG icons and icon components
- `styles/` - Global CSS files and style utilities
- `fonts/` - Custom font files (if any)

## Usage

Import assets using ES6 imports:

```typescript
// Import images
import logo from '@/assets/images/logo.png';

// Import icons
import { ReactIcon } from '@/assets/icons/ReactIcon';

// Use in components
<img src={logo} alt="Logo" />
<ReactIcon className="icon" />
```

## Guidelines

- Use SVG for icons when possible for better scalability
- Optimize images before adding them to the project
- Use descriptive file names
- Keep file sizes reasonable for web performance
