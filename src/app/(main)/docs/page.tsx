import React from "react";
import BackButton from "@/components/static/BackButton";

const Docs = () => {
  return (
    <div>
      <div className="mx-auto mt-20 w-full max-w-6xl">
        <BackButton />
      </div>
      <div className="mx-auto my-10 w-full max-w-4xl space-y-6">
        <div>
          <h2 className="mb-3 text-2xl font-bold">Project Overview</h2>
          <p className="max-w-3xl text-wrap text-xl text-muted-foreground">
            This is a starter kit for a Next.js application with
            <a
              target="_blank"
              href="https://www.typescriptlang.org/"
              className="text-blue-500"
            >
              {" "}
              TypeScript
            </a>
            ,
            <a
              target="_blank"
              href="https://tailwindcss.com/"
              className="text-blue-500"
            >
              {" "}
              TailwindCSS
            </a>
            ,
            <a
              target="_blank"
              href="https://shadcn.dev/"
              className="text-blue-500"
            >
              {" "}
              Shadcn UI
            </a>
            , and
            <a
              target="_blank"
              href="https://www.prisma.io/"
              className="text-blue-500"
            >
              {" "}
              Prisma
            </a>
            . It is designed to provide a robust and scalable foundation for
            building web applications.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-bold">Installation Process</h2>
          <p className="max-w-3xl text-wrap text-xl text-muted-foreground">
            To get started with this project, follow these steps:
          </p>
          <ol className="mt-2 list-inside list-decimal space-y-3 text-xl text-muted-foreground">
            <li>
              Clone the repository:
              <pre className="rounded bg-gray-100 p-4">
                <code>
                  git clone https://github.com/your-repo/nextjs-starter-kit.git
                  <br />
                  cd nextjs-starter-kit
                </code>
              </pre>
            </li>
            <li>
              Install dependencies:
              <pre className="rounded bg-gray-100 p-4">
                <code>
                  npm install
                  <br /># or
                  <br />
                  yarn install
                  <br /># or
                  <br />
                  pnpm install
                  <br /># or
                  <br />
                  bun install
                </code>
              </pre>
            </li>
            <li>
              Run the development server:
              <pre className="rounded bg-gray-100 p-4">
                <code>
                  npm run dev
                  <br /># or
                  <br />
                  yarn dev
                  <br /># or
                  <br />
                  pnpm dev
                  <br /># or
                  <br />
                  bun dev
                </code>
              </pre>
            </li>
            <li>
              Open{" "}
              <a href="http://localhost:3000" className="text-blue-500">
                http://localhost:3000
              </a>{" "}
              with your browser to see the result.
            </li>
          </ol>
          <p className="max-w-3xl text-wrap text-xl text-muted-foreground">
            You can start editing the page by modifying{" "}
            <code>app/page.tsx</code>. The page auto-updates as you edit the
            file.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-bold">Tech Stack</h2>
          <p className="mb-2 max-w-3xl text-wrap text-xl text-muted-foreground">
            This project uses the following technologies:
          </p>
          <ul className="list-inside list-disc space-y-2 text-xl text-muted-foreground">
            <li>
              <a
                target="_blank"
                href="https://nextjs.org/"
                className="text-blue-500"
              >
                Next.js
              </a>
              : A React framework for building server-side rendered
              applications.
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.typescriptlang.org/"
                className="text-blue-500"
              >
                TypeScript
              </a>
              : A strongly typed programming language that builds on JavaScript.
            </li>
            <li>
              <a
                target="_blank"
                href="https://tailwindcss.com/"
                className="text-blue-500"
              >
                TailwindCSS
              </a>
              : A utility-first CSS framework for rapid UI development.
            </li>
            <li>
              <a
                target="_blank"
                href="https://shadcn.dev/"
                className="text-blue-500"
              >
                Shadcn UI
              </a>
              : A component library for building consistent and customizable UI
              components.
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.prisma.io/"
                className="text-blue-500"
              >
                Prisma
              </a>
              : An ORM (Object-Relational Mapping) tool for database
              interaction.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-bold">Key Points</h2>
          <ul className="list-inside list-disc space-y-2 text-xl text-muted-foreground">
            <li>
              <strong>Next.js:</strong> Provides a hybrid static & server
              rendering, TypeScript support, and a powerful routing system.
            </li>
            <li>
              <strong>TypeScript:</strong> Enhances JavaScript with type
              definitions, improving developer productivity and code quality.
            </li>
            <li>
              <strong>TailwindCSS:</strong> Allows for rapid styling with
              utility classes, making it easy to create responsive designs.
            </li>
            <li>
              <strong>Shadcn UI:</strong> Offers a set of customizable
              components to maintain a consistent look and feel across your
              application.
            </li>
            <li>
              <strong>Prisma:</strong> Simplifies database access and management
              with a type-safe query builder and schema migration tools.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-bold">Learn More</h2>
          <p className="mb-2 max-w-3xl text-wrap text-xl text-muted-foreground">
            To learn more about each technology used in this starter kit, check
            out the following resources:
          </p>
          <ul className="list-inside list-disc space-y-2 text-xl text-muted-foreground">
            <li>
              <a
                target="_blank"
                href="https://nextjs.org/docs"
                className="text-blue-500"
              >
                Next.js Documentation
              </a>{" "}
              - Learn about Next.js features and API.
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.typescriptlang.org/docs/"
                className="text-blue-500"
              >
                TypeScript Documentation
              </a>{" "}
              - Comprehensive guide to TypeScript.
            </li>
            <li>
              <a
                target="_blank"
                href="https://tailwindcss.com/docs"
                className="text-blue-500"
              >
                TailwindCSS Documentation
              </a>{" "}
              - TailwindCSS utilities and best practices.
            </li>
            <li>
              <a
                target="_blank"
                href="https://shadcn.dev/docs"
                className="text-blue-500"
              >
                Shadcn UI Documentation
              </a>{" "}
              - Explore Shadcn UI components and customization.
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.prisma.io/docs"
                className="text-blue-500"
              >
                Prisma Documentation
              </a>{" "}
              - Understand Prisma's ORM capabilities and usage.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-bold">Deployment</h2>
          <p className="mb-2 max-w-3xl text-wrap text-xl text-muted-foreground">
            The easiest way to deploy your Next.js app is to use the
            <a
              target="_blank"
              href="https://vercel.com/"
              className="text-blue-500"
            >
              {" "}
              Vercel Platform
            </a>{" "}
            from the creators of Next.js.
          </p>
          <p className="max-w-3xl text-wrap text-xl text-muted-foreground">
            Check out the{" "}
            <a
              target="_blank"
              href="https://nextjs.org/docs/deployment"
              className="text-blue-500"
            >
              Next.js deployment documentation
            </a>{" "}
            for more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Docs;
