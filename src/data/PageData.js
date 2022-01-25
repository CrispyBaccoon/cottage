import { ExamplePage } from "../pages/example";
import { AboutPage } from "../pages/about";
import { HomePage } from "../pages/home";
import React from "react";

export const Pages = [
  {
    PageName: "HomePage",
    url: "home",
    Page: <HomePage />,
    Category: "System",
  },
  {
    PageName: "AboutPage",
    url: "about",
    Page: <AboutPage />,
    Category: "System",
  },
  {
    PageName: "Example",
    url: "Example",
    Page: <ExamplePage />,
    Category: "Pages",
  },
];
