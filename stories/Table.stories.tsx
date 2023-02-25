import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from '../src/components/Table';

const meta: Meta = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TableProps> = args => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {};
