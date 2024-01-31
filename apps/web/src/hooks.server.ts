import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import { type Handle, redirect } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks";

export const auth = SvelteKitAuth(async (event) => {
  if (event.url.pathname.startsWith('/authenticated')) {
    const sess = await event.locals.auth();
    if (!sess) throw redirect(303, '/auth');
  }
  console.log(event)
  const authOptions = {
    secret: "",
    trustHost: true,
    providers: [
      GitHub({
        clientId: "",
        clientSecret: "",
      }),
    ],
  }
  return authOptions
}) satisfies Handle;

export const handle: Handle = sequence(
  SvelteKitAuth({
    providers: [],
  }),
  auth,
)
