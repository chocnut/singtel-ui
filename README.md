# Table Component

### A very customizable table component.

## Features

- Dynamic data source
- Dynamic table header
- Sorting
- Responsive

## Demo

[StoryBook](https://pindiola-ui-table.netlify.app/)

## Usage

```js
let nameOrder = false;
const columns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
    sorter: (a, b) => {
      if (order) {
        if (a.name.split(' ')[1] > b.name.split(' ')[1]) return 1;
        else return -1;
      } else {
        if (a.name.split(' ')[1] > b.name.split(' ')[1]) return -1;
        else return 1;
      }
    },
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

<Table columns={columns} dataSource={dataSource}>
```

## Theming

Customize the theme by passing a theme object props

```js
const theme = {
  colors: {
    primary: '#5C50BB',
    light: '#EFEDFD',
  },
  fontFamily: 'Avenir LT Std, sans-serif, Roboto',
};

<Table columns={columns} dataSource={dataSource} theme={theme}>
```
