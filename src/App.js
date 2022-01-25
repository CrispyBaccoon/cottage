import { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { PageLoader } from "./components/PageLoader";

import { NotFoundPage } from "./components/NotFound";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ExamplePage } from "./pages/example";

export default class App extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        jsx: () => <HomePage />,
      },
      {
        path: "/example",
        jsx: () => <ExamplePage />,
      },
      {
        path: "/about",
        jsx: () => <AboutPage />,
      },
      {
        path: "/*",
        jsx: () => <NotFoundPage />,
      },
    ];
    return (
      <div className="App w-full h-full bg-[#F7F1E3] flex flex-col md:flex-row">
        <Router>
          <div>
            <NavigationBar />
          </div>
          <Routes>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={"/" + route.path}
                exact={route.exact}
                element={
                  <div>
                    <route.jsx />
                  </div>
                }
              />
            ))}
            <Route
              key={`pageLoader`}
              path={`/:CatId/:PageId`}
              element={<PageLoader />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
