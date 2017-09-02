import { Icon, Input, AutoComplete } from 'antd';

const dataSource = [
  'Account Management',
  'Management Overview',
  'Donor Management'
];

const filterOption = (inputValue, option) => (
  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
);

const inputSearch = () => {
  const suffix = <Icon type="search" className="icon icon-search" />;

  return (
    <AutoComplete
      className="input-search"
      dataSource={dataSource}
      placeholder="Search App and Categories"
      filterOption={filterOption}
    >
      <Input
        suffix={suffix}
      />
    </AutoComplete>
  );
};

export default inputSearch;
