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

const columns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Mobile',
    key: 'mobile',
    dataIndex: 'mobile',
  },
  {
    title: 'Expiry',
    key: 'expiry',
    dataIndex: 'expiry',
  },
  {
    title: 'Penalty',
    key: 'penalty',
    dataIndex: 'penalty',
  },
];

const dataSource = [
  {
    id: 1,
    name: 'Mavis Chen',
    mobile: '8899 7654',
    expiry: 'Dec 2022',
    penalty: '$600',
  },
  {
    id: 2,
    name: 'Rodney Artichoke',
    mobile: '9988 7676',
    expiry: 'Dec 2022',
    penalty: '$300',
  },
  {
    id: 3,
    name: 'Valentino Morose',
    mobile: '8900 7654',
    expiry: 'Dec 2022',
    penalty: '$300',
  },
  {
    id: 4,
    name: 'Eric Widget',
    mobile: '8900 7654',
    expiry: 'Dec 2022',
    penalty: '$300',
  },
];

const Template: Story<TableProps> = args => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  columns,
  dataSource,
  rowSelection: {
    type: 'checkbox',
  },
};
