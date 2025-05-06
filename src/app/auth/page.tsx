import { Metadata } from "next";
import AppAuth from "@/layout/AppAuth";
import { Auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "PANDAWA",
  description: "Pantau Sumber Daya Alam Bondowoso",
};

const AuthPage = async () => {
  const session = await Auth();

  return <AppAuth />;
}

export default AuthPage