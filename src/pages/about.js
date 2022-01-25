import Page from "../components/Page";
import React from "react";
import { Title, SubTitle, MainHeader, Header } from "../lib/Header";
import Paragraph from "../lib/Paragraph";
import Spacer from "../lib/Spacer";
import Link from "../lib/Link";

export const AboutPage = () => (
  <Page
    title="About"
    subtitle="by Comfy ShopEP, with VSCode. December 23, 2021"
    JSX={
      <div className={"About Page"}>
        <MainHeader>A Lightweight Blog to lighten up your day</MainHeader>
        <Paragraph>
          Cottage is made with <Link Name="React" Ref="https://reactjs.org" />{" "}
          and tailwindcss
        </Paragraph>
        <Spacer />
        <Header>Example Paragraph</Header>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          magni exercitationem nulla perspiciatis doloremque fugit quidem dolore
          officiis quisquam et, dignissimos molestias maxime ad, nostrum amet
          magnam accusamus totam itaque error distinctio illum. Eum, ut corrupti
          quisquam optio dolores blanditiis?
        </Paragraph>
      </div>
    }
  />
);
