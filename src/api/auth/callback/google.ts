'use server';

import { signIn } from '@/api/auth/auth';

export async function signInWithGoogle() {
    await signIn("google", { redirectTo: "/dashboard" });
}
