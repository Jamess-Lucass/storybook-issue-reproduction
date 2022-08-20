import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ text }) => (
  <Button text={text} />
);

// const Template: ComponentStory<typeof Button> = () => (
//   <Button text="button" />
// );

export const Default = Template.bind({});
Default.args = {
  text: "Best button!",
};
