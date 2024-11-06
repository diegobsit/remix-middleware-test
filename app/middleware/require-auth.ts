import { redirect } from "@remix-run/node";
import { type MiddlewareFunctionArgs } from "remix-create-express-app/middleware";
import { authenticator } from "~/services/auth.server";

export async function requireAuth({ request, context, next }: MiddlewareFunctionArgs) {
  const url = new URL(request.url);
  const user = await authenticator.isAuthenticated(request);

  if (user) {
    context.user = user;
  }

  if (!user && url.pathname !== "/sign-in") {
    throw redirect(`/sign-in`);
  } else if (user && url.pathname === "/sign-in") {
    throw redirect("/");
  }

  return next();
}
