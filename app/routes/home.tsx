import type { Route } from "./+types/home";
import { Map } from "../map/map";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PANDAWA" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Map />;
}
