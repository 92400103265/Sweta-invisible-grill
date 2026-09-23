import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Sweta Invisible Grill",
  description:
    "The page you are looking for does not exist on the Sweta Invisible Grill website.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return Home
          </a>

          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Explore Invisible Grills
          </a>
        </div>
      </div>
    </main>
  );
}