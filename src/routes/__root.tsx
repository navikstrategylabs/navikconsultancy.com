import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NaviK Strategy Labs — Where Strategy Meets Execution" },
      { name: "description", content: "NaviK Strategy Labs partners with startups and growing businesses to bring clarity, structure, and momentum to growth." },
      { name: "author", content: "NaviK Strategy Labs" },
      { property: "og:title", content: "NaviK Strategy Labs — Where Strategy Meets Execution" },
      { property: "og:description", content: "NaviK Strategy Labs partners with startups and growing businesses to bring clarity, structure, and momentum to growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NaviK Strategy Labs — Where Strategy Meets Execution" },
      { name: "twitter:description", content: "NaviK Strategy Labs partners with startups and growing businesses to bring clarity, structure, and momentum to growth." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14ca946c-0c9f-4bd9-85fd-8ba4ca982be4/id-preview-3daddc6e--39b2cca2-a4f4-4d27-950f-5a8f4ce2f8df.lovable.app-1776868304971.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14ca946c-0c9f-4bd9-85fd-8ba4ca982be4/id-preview-3daddc6e--39b2cca2-a4f4-4d27-950f-5a8f4ce2f8df.lovable.app-1776868304971.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
