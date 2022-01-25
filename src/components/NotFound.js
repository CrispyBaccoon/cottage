import { useLocation } from "react-router";
import Page from "./Page";
import React from "react";

export const NotFoundPage = () => {
  let location = useLocation();

  return (
    <Page
      title="Page Not Found"
      JSX={
        <div>
          <h1>Page Not Found</h1>
          <h3>
            No Page Found: <code>{location.pathname}</code>
          </h3>
        </div>
      }
    />
  );
};
