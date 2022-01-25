import React from "react";
import { Link } from "react-router-dom";
import { Pages } from "../data/PageData";
import { Categories } from "../data/CategoryData";
import { Header } from "../lib/Header";
import Spacer from "../lib/Spacer";

export default function NavigationBar() {
  return (
    <div className="NavigationBar mt-6 md:mt-8 mx-5 md:mx-8 my-5 md:my-4">
      <ul className="list-none">
        {[
          {
            to: "/",
            name: "Home",
          },
          { to: "/Example", name: "Example" },
          { to: "about", name: "About" },
        ].map((item) => (
          <li
            key={(() => {
              console.log(item);
              var date = new Date();
              return `${date.toISOString()}_${item.to}`;
            })()}
            className="my-2"
          >
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
        {Categories.map((cat) => (
          <div>
            <Spacer />
            <Header>{cat.PageName}</Header>
            <ul>
              {Pages.filter((page) => page.Category == cat.PageName)
                .map((selPage) => ({
                  to: `/${cat.url}/${selPage.url}`,
                  name: selPage.PageName,
                }))
                .flat()
                .map((linkItem) => (
                  <li
                    key={(() => {
                      var date = new Date();
                      return `${date.toISOString()}_${linkItem.to}`;
                    })()}
                    className="my-2"
                  >
                    <Link to={linkItem.to}>{linkItem.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
