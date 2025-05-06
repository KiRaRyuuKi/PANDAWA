import { Metadata } from "next";
import AppAuth from "@/layout/AppAuth";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "PANDAWA - Login",
  description: "Pantau Sumber Daya Alam Bondowoso",
};

const AuthPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/pages");
  }

  return <AppAuth />;
}

export default AuthPage;