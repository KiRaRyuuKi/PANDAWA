'use server';

import { signOut } from '@/api/auth/auth';

export async function logoutAuth() {
    await signOut({ redirectTo: "/auth" });
}
