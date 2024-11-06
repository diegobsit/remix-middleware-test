import { redirect } from "@remix-run/node";
import { type MiddlewareFunctionArgs } from "remix-create-express-app/middleware";
import { authenticator } from "~/services/auth.server";

export async function requireAuth({ request, context, next }: MiddlewareFunctionArgs) {
  const url = new URL(request.url);
  const user = await authenticator.isAuthenticated(request);

  if (user) {
    context.user = user;
  }

  console.log("JE PASSE ICI");

  if (!user && url.pathname !== "/sign-in") {
    console.log("JE PASSE ICI 1");

    throw redirect(`/sign-in`);
  } else if (user && url.pathname === "/sign-in") {
    console.log("JE PASSE ICI 2");

    throw redirect("/");
  }
  console.log("JE PASSE ICI 3");

  return next();
}
