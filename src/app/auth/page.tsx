import { Metadata } from "next";
import { auth } from "@/api/auth";
import AppAuth from "@/layout/AppAuth";
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