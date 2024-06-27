import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-bold tracking-tighter">Starter Kit</h1>
        <h1 className="text-5xl font-bold tracking-tighter">
          Next.js + Shadcn.ui + Authentication
        </h1>
      </div>

      <p className="text-muted-foreground max-w-4xl text-center text-2xl tracking-tighter">
        This is a starter kit for building a Next.js app with Shadcn.ui and
        authentication. It includes a basic layout, a login page, and a
        dashboard page
      </p>

      <Button className="mt-4">Get Started</Button>
    </div>
  );
};

export default Hero;
