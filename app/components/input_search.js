import { Icon, Input, AutoComplete } from 'antd';

const dataSource = [
  'Account Management',
  'Management Overview',
  'Donor Management'
];

const filterOption = (inputValue, option) => (
  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
);

const suffixIcon = () => <Icon type="search" className="icon icon-search" />;

const inputSearch = () => (
  <AutoComplete
    className="input-search"
    dataSource={dataSource}
    placeholder="Search App and Categories"
    filterOption={filterOption}
  >
    <Input
      suffix={suffixIcon}
    />
  </AutoComplete>
);

export default inputSearch;
