import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export function loader({ context }: LoaderFunctionArgs) {
  return context;
}

export default function Index() {
  const data = useLoaderData();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to <span className="sr-only">Remix</span>
          </h1>
          <div className="h-[144px] w-[434px]">
            <img src="/logo-light.png" alt="Remix" className="block w-full dark:hidden" />
            <img src="/logo-dark.png" alt="Remix" className="hidden w-full dark:block" />
          </div>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <NavLink to="sign-in">Go to sign-in</NavLink>
        </nav>

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
