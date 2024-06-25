import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-bold tracking-tighter">Starter Kit</h1>
        <h1 className="text-5xl font-bold tracking-tighter">
          Next.js + Shadcn.ui
        </h1>
      </div>

      <p className="text-muted-foreground text-2xl tracking-tighter">
        A starter kit for building a Next.js app with Shadcn.ui
      </p>

      <Button className="mt-4">Get Started</Button>
    </main>
  );
}
