# Custom Tailwind Components

This project includes reusable custom components styled with Tailwind CSS.

## Components

### Button

```tsx
import { Button } from '@/components';

<Button variant="primary" size="lg">Click me</Button>
<Button variant="secondary" size="md">Secondary</Button>
```

**Props:**

- `variant`: 'primary' | 'secondary'
- `size`: 'sm' | 'md' | 'lg'
- `onClick`: () => void
- `className`: string

### Card

```tsx
import { Card } from "@/components";

<Card hover={true}>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>;
```

**Props:**

- `hover`: boolean - enables hover animation
- `className`: string

### Container

```tsx
import { Container } from "@/components";

<Container className="py-8">Content</Container>;
```

**Props:**

- `className`: string - additional classes

### Input

```tsx
import { Input } from "@/components";

<Input
  type="email"
  label="Email"
  placeholder="your@email.com"
  error={error}
  onChange={handleChange}
/>;
```

**Props:**

- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
- `label`: string
- `placeholder`: string
- `error`: string
- `onChange`: (e) => void

### Badge

```tsx
import { Badge } from "@/components";

<Badge variant="primary" size="md">
  New
</Badge>;
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
- `size`: 'sm' | 'md'

### Grid

```tsx
import { Grid } from "@/components";

<Grid cols={3} gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>;
```

**Props:**

- `cols`: 1 | 2 | 3 | 4 | 6
- `gap`: 'sm' | 'md' | 'lg'

### Alert

```tsx
import { Alert } from "@/components";

<Alert type="success" title="Success!">
  Operation completed successfully.
</Alert>;
```

**Props:**

- `type`: 'info' | 'success' | 'warning' | 'error'
- `title`: string
- `onClose`: () => void

### Heading

```tsx
import { Heading } from "@/components";

<Heading level={1} gradient>
  Welcome to FormAI
</Heading>;
```

**Props:**

- `level`: 1 | 2 | 3 | 4 | 5 | 6
- `gradient`: boolean - applies gradient text

### Section

```tsx
import { Section } from "@/components";

<Section id="features" dark={false}>
  Content
</Section>;
```

**Props:**

- `id`: string
- `dark`: boolean - dark background
- `className`: string

## Importing Components

You can import individual components:

```tsx
import Button from "@/components/Button";
import { Button, Card, Container } from "@/components";
```

## Custom Tailwind Classes

Added in `index.css`:

- `.btn-primary` - primary button styles
- `.btn-secondary` - secondary button styles
- `.btn-large` - large button modifier
- `.section-title` - section heading with gradient
- `.section-subtitle` - section subtitle styling
