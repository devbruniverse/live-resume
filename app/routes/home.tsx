import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bruno's live resume" },
    { name: 'description', content: "Welcome to Bruno's live resume!" }
  ];
}

export default function Home() {
  return <Welcome />;
}
