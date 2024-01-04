import MyButton from "../MyButton.svelte";

export default {
  title: "MyButton",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
};

export const Primary = (args) => ({
  Component: MyButton,
  props: {
    ...args,
    type: "primary",
    label: "Mutant Primary Button",
  },
});

export const Secondary = (args) => ({
  Component: MyButton,
  props: {
    ...args,
    type: "secondary",
    label: "Mutant Secondary Button",
  },
});
