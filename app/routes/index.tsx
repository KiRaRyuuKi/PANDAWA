import type { Route } from "./+types/index";
import { Map } from "../../views/layouts/map";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PANDAWA" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Map />;
}
