import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Table from '../Table';

describe('Table', () => {
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

  it('render the component', () => {
    const { asFragment } = render(
      <Table columns={columns} dataSource={dataSource} />
    );

    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('does not crash when dataSource is empty', () => {
    render(
      <Table
        columns={[
          {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
          },
        ]}
      />
    );
  });

  it('updates columns', () => {
    const columns = [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
      },
    ];
    const { container, rerender } = render(<Table columns={columns} />);

    const newColumns = [
      {
        title: 'Title',
        key: 'title',
        dataIndex: 'title',
      },
    ];
    rerender(<Table columns={newColumns} />);
    expect(container.querySelector('div')?.textContent).toEqual('Title');
  });

  it('supports sort button', () => {
    const sortClick = jest.fn();

    const columns = [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
        sorter: sortClick,
      },
    ];

    const { getByTestId } = render(
      <Table columns={columns} dataSource={dataSource} />
    );
    const sortBtn = getByTestId('sort-btn');
    expect(sortBtn).toBeInTheDocument();

    fireEvent.click(sortBtn);
    expect(sortClick).toHaveBeenCalled();
  });

  it('supports checkbox and be able to select it', async () => {
    const dataSource = [
      {
        id: 1,
        name: 'Mavis Chen',
        mobile: '8899 7654',
        expiry: 'Dec 2022',
        penalty: '$600',
      },
    ];

    const { getByRole } = render(
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{ type: 'checkbox' }}
      />
    );
    const checkbox = getByRole('checkbox', {
      hidden: true,
    });
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('supports radio and be able to select it', async () => {
    const dataSource = [
      {
        id: 1,
        name: 'Mavis Chen',
        mobile: '8899 7654',
        expiry: 'Dec 2022',
        penalty: '$600',
      },
    ];

    const { getByRole } = render(
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{ type: 'radio' }}
      />
    );
    const radio = getByRole('radio', {
      hidden: true,
    });
    expect(radio).toBeInTheDocument();

    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });
});
