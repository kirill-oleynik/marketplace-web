jest.mock('next/router', () => ({
  push() {}
}));

const React = require('react');
const { shallow } = require('enzyme');
const Router = require('next/router');
const toJSON = require('enzyme-to-json').default;
const { home } = require('../../../app/routes');
const CategoryLink = require('../../../app/components/categories/link').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <CategoryLink
        category={{ id: 1, title: 'Test1', slug: 'test_1' }}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#onClick', () => {
  test('it redirects to home with category slug', () => {
    const spy = jest.spyOn(Router, 'push');

    const component = shallow(
      <CategoryLink
        category={{ id: 1, title: 'Test1', slug: 'test_1' }}
      />
    );

    component.find('.categories-link').simulate('click');

    expect(spy).toHaveBeenCalledWith(
      `${home}?category=test_1`,
      `${home}?category=test_1`,
      { shallow: true }
    );

    spy.mockReset();
    spy.mockRestore();
  });
});
