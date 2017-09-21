const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const MainLayout = require('../../app/layouts/main_layout').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <MainLayout>
        <div>Hello</div>
      </MainLayout>
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
