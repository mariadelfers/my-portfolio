import React from "react";

import { Experience } from "./Experience";

export default {
  title: "Example/Experience",
  component: Experience,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Experience {...args} />;

export const Default = Template.bind({});
Default.args = {
  companyName: "Walmart International",
  jobTitle: "Software Engineer II",
  dates: "June 2020 - Currently",
  place: "Mexico City, Mexico",
  description: [
    "Support and maintain mobile applications for Walmart Store's workers around the world, excluding the U.S.",
    "Develop mobile applications for iOS and Android OS using React Native, with JavaScript and Typescript.",
    "Do unit tests using Jest, Cucumber, and React Testing Library.",
  ],
  tools: "Javascript, React",
  link: "github.com",
};
