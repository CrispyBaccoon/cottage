import { MainHeader, Header } from "../components/lib/Header";
import Link, { InternalLink } from "../components/lib/Link";
import Image from "../components/lib/Image";
import Paragraph from "../components/lib/Paragraph";
import Spacer from "../components/lib/Spacer";
import Page from "../components/Page";

export default function HomePage() {
  return (
    <Page
      title="Home"
      subtitle="by Comfy ShopEP, with VSCode. December 21, 2021"
      Body={
        <div className={"Home Page"}>
          <MainHeader>A Lightweight Blog to lighten up your day</MainHeader>
          <Paragraph>
            Cottage is made with <Link Name="React" Ref="https://reactjs.org" />{" "}
            and tailwindcss
          </Paragraph>
          <Spacer />
          <Paragraph>
            Find out more at <InternalLink Ref="about" Name="About" />
          </Paragraph>
          <Header>Example Paragraph</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium magni exercitationem nulla perspiciatis doloremque fugit
            quidem dolore officiis quisquam et, dignissimos molestias maxime ad,
            nostrum amet magnam accusamus totam itaque error distinctio illum.
            Eum, ut corrupti quisquam optio dolores blanditiis?
          </Paragraph>
          <div className="w-1/2">
            <Image Source="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80">
              Unsplash Picture of Mountains
            </Image>
          </div>
        </div>
      }
    />
  );
}
