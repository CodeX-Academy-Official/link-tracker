import GenerateUrl from "./views/GenerateUrl";
import Redirect from "./views/Redirect";

export const routes = [
  { path: "/", component: GenerateUrl },
  { path: "/r", component: Redirect },
];
