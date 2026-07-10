import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-ink">404</h1>
        <p className="mt-4 text-muted-foreground">This page took the paper plane elsewhere.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-ink px-6 py-2 text-sm text-primary-foreground">
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vibhuti Patel — Data Science & AI/ML" },
      { name: "description", content: "Portfolio of Vibhuti Patel, Data Science and AI/ML professional based in Ahmedabad, India." },
      { property: "og:title", content: "Vibhuti Patel, Data Science & AI/ML" },
      { property: "og:description", content: "Portfolio of Vibhuti Patel, Data Science and AI/ML professional based in Ahmedabad, India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Vibhuti Patel, Data Science & AI/ML" },
      { name: "twitter:description", content: "Portfolio of Vibhuti Patel, Data Science and AI/ML professional based in Ahmedabad, India." },

    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Caveat:wght@500;600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
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
  return (
    <div className="min-h-screen paper-bg">
      <SiteNav />
      {/* Prevent fixed bottom nav overlap on mobile/tablet */}
      <div className="pb-24 sm:pb-32">
        <Outlet />
      </div>
    </div>
  );
}

