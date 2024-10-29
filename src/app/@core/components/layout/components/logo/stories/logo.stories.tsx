import type { Meta, StoryObj } from "@storybook/react";
import { DispositionEmblem as LogoComponent } from "@core/components/layout/components/logo/DispositionEmblem";

const meta: Meta<typeof LogoComponent> = {
  title: "Brand/Logo/Button",
  component: LogoComponent,
};

export default meta;
type Story = StoryObj<typeof LogoComponent>;

export const Button: Story = {};
