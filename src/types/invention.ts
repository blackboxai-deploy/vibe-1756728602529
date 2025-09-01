```typescript
export interface Invention {
  id: number;
  title: string;
  year: string;
  inventor: string;
  description: string;
  impact: string;
  category: string;
  image?: string;
  details: {
    background: string;
    development: string;
    significance: string;
    modernUse: string;
  };
}

export interface TimelineStop {
  id: number;
  position: number;
  invention: Invention;
  isActive: boolean;
  isVisited: boolean;
}

export interface JeepneyPosition {
  currentStop: number;
  isMoving: boolean;
  progress: number;
}

export interface Reference {
  id: number;
  title: string;
  author: string;
  year: string;
  source: string;
  url?: string;
  type: 'book' | 'article' | 'website' | 'journal' | 'other';
}
```

**To save this to your local drive:**

1. **Download the project files:**
   - I'll create all the files in the sandbox first
   - Then you can download the entire project as a ZIP file
   - Or copy individual files manually

2. **Set up locally:**
   ```bash
   # Create new React project (if starting fresh)
   npx create-next-app@latest filipino-inventions-timeline
   cd filipino-inventions-timeline
   
   # Install dependencies
   npm install
   
   # Run development server
   npm run dev
   ```

3. **Copy files:**
   - Copy all the code I'll generate into your local project
   - Maintain the same folder structure

**Should I proceed to create all the remaining files now?**