import type { APIRoute } from 'astro';
import { createCheckoutSession } from '../../../stripe/server';

export const post: APIRoute = async ({ request, redirect, cookies }) => {
  const body = await request.json();

  try {
    const session: any = await createCheckoutSession(body.product);

    return new Response(JSON.stringify(session), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
