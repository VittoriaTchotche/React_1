import { Hello } from "./Hello";

import { createRoot } from "react-dom/client";
const helloElement = <Hello />;

const root = document.getElementById("root");

const root2 = createRoot(root);
root2.render(helloElement);
