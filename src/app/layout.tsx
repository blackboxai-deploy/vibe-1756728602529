```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filipino Inventions Timeline",
  description: "Interactive timeline showcasing Filipino inventions through history",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold hover:text-yellow-300 transition-colors">
                🚌 Filipino Inventions Timeline
              </Link>
              <div className="space-x-6">
                <Link href="/" className="hover:text-yellow-300 transition-colors font-medium">
                  Timeline
                </Link>
                <Link href="/references" className="hover:text-yellow-300 transition-colors font-medium">
                  References
                </Link>
              </div>
            </div>
          </nav>
        </header>
        
        <main className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100">
          {children}
        </main>
        
        <footer className="bg-red-600 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © 2024 Filipino Inventions Timeline. Celebrating Filipino Innovation and Creativity.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
```

**To save this to your local drive:**

1. **Download the project files** from the sandbox:
   - Click the "Download" button in the sandbox interface
   - Or use the file explorer to copy individual files

2. **Set up locally:**
   ```bash
   # Create new Next.js project
   npx create-next-app@latest filipino-inventions-timeline --typescript --tailwind --eslint --app

   # Navigate to project
   cd filipino-inventions-timeline

   # Install additional dependencies
   npm install lucide-react class-variance-authority clsx tailwind-merge

   # Replace the layout.tsx file with the content above
   ```

3. **Alternative - Manual setup:**
   - Create a new folder on your computer
   - Copy all files from the sandbox to your local folder
   - Run `npm install` to install dependencies
   - Run `npm run dev` to start development server

The layout.tsx file above provides the basic structure with Filipino-themed navigation and styling that we'll build upon for the complete timeline website.