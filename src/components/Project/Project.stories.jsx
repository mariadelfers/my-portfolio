import React from "react";

import { Project } from "./Project";

export default {
  title: "Example/Project",
  component: Project,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Project {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Chat Bot",
  description: [
    "Support and maintain mobile applications for Walmart Store's workers around the world, excluding the U.S.",
    "Develop mobile applications for iOS and Android OS using React Native, with JavaScript and Typescript.",
    "Do unit tests using Jest, Cucumber, and React Testing Library.",
  ],
  tools: "Javascript, React",
  link: "github.com",
};
