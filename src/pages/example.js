import Page from "../components/Page";
import React from "react";
import { Title, SubTitle, Header, MainHeader } from "../lib/Header";
import List from "../lib/List";
import Link from "../lib/Link";
import Paragraph from "../lib/Paragraph";

export const ExamplePage = () => (
  <Page
    title="The React.js Way: Getting Started Tutorial"
    subtitle="By blog.risingstack.com | 13 min"
    JSX={
      <div className={"Example Page"}>
        <Paragraph>
          Now that the popularity of{" "}
          <Link Name="React.js" Ref="https://reactjs.org"></Link> is growing
          blazing fast and lots of interesting stuff are coming, my friends and
          colleagues started asking me more about how they can start with React
          and how they should think in the React way.
        </Paragraph>
        <Paragraph>
          However, React is not a framework; there are concepts, libraries and
          principles that turn it into a fast, compact and beautiful way to
          program your app on the client and server side as well.
        </Paragraph>
        <Paragraph>
          In this two-part blog series React.js tutorial I am going to explain
          these concepts and give a recommendation on what to use and how. We
          will cover ideas and technologies like:
        </Paragraph>
        <List
          Items={[
            "ES6 React",
            "virtual DOM",
            "Component-driven development",
            "Immutability",
            "Top-down rendering",
            "Rendering path and optimization",
            "Common tools/libs for bundling, ES6, request making, debugging, routing, etc.",
            "Isomorphic React",
          ]}
        />
        <Paragraph>
          And yes, we will write code. I would like to make it as practical as
          possible. All the snippets and post related code are available in the{" "}
          <Link
            Ref="https://github.com/RisingStack/react-way-getting-started"
            Name="RisingStack GitHub repository"
          />{" "}
          .
        </Paragraph>
        <Paragraph>
          This article is the first from those two. Let’s jump in!
        </Paragraph>
        <Paragraph>
          Repository:{" "}
          <Link
            Name="
https://github.com/risingstack/react-way-getting-started
"
            Ref="
https://github.com/risingstack/react-way-getting-started
"
          />
        </Paragraph>
        <Header>Getting Started with the React.js Tutorial</Header>
        <Paragraph>
          If you are already familiar with React and you understand the basics,
          like the concept of virtual DOM and thinking in components, then this
          React.js tutorial is probably not for you. We will discuss
          intermediate topics in the upcoming parts of this series. It will be
          fun, I recommend you to check back later.
        </Paragraph>
        <Header>Is React a framework?</Header>
        <Paragraph>In a nutshell: no, it’s not.</Paragraph>
        <Paragraph>
          Then what the hell is it and why everybody is so keen to start using
          it?
        </Paragraph>
        <Paragraph>
          React is the “View” in the application, a fast one. It also provides
          different ways to organize your templates and gets you think in
          components.
        </Paragraph>
        <Paragraph>
          In a React application, you should break down your site, page or
          feature into smaller pieces of components. It means that your site
          will be built by the combination of different components. These
          components are also built on the top of other components and so on.
          When a problem becomes challenging, you can break it down into smaller
          ones and solve it there. You can also reuse it somewhere else later.
          Think of it like the bricks of Lego. We will discuss component-driven
          development more deeply in this article later.
        </Paragraph>
        <Paragraph>
          React also has this virtual DOM thing, what makes the rendering super
          fast but still keeps it easily understandable and controllable at the
          same time. You can combine this with the idea of components and have
          the power of top-down rendering. We will cover this topic in the
          second article.
        </Paragraph>
        <Paragraph>
          Ok I admit, I still didn’t answer the question. We have components and
          fast rendering – but why is it a game changer? Because React is mainly
          a concept and a library just secondly.
        </Paragraph>
        <Paragraph>
          There are already several libraries following these ideas – doing it
          faster or slower – but slightly different. Like every programming
          concept, React has it’s own solutions, tools and libraries turning it
          into an ecosystem. In this ecosystem, you have to pick your own tools
          and build your own ~framework. I know it sounds scary but believe me,
          you already know most of these tools, we will just connect them to
          each other and later you will be very surprised how easy it is. For
          example for dependencies we won’t use any magic, rather Node’s require
          and npm. For the pub-sub, we will use Node’s EventEmitter and as so
          on.
        </Paragraph>
        <Header>The Virtual DOM concept in a nutshell</Header>
        <Paragraph>
          To track down model changes and apply them on the DOM (alias
          rendering) we have to be aware of two important things:
        </Paragraph>
        <List
          Items={[
            "when data has changed,",
            "which DOM element(s) to be updated.",
          ]}
        />
      </div>
    }
  />
);
