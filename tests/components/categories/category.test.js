const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  Category
} = require('../../../app/components/categories/category');

describe('#render', () => {
  describe('when it has less than preview amount apps', () => {
    test('it renders correctly', () => {
      const component = shallow(
        <Category
          t={(translation) => translation}
          expand={() => {}}
          collapse={() => {}}
          category={{
            id: 1,
            title: 'Test1',
            slug: 'test_1',
            applications: [],
            isFetched: false,
            isFetchable: false
          }}
        />
      );

      expect(
        toJSON(component)
      ).toMatchSnapshot();
    });
  });

  describe('when it has more than preview amount apps', () => {
    describe('and there are apps to fetch', () => {
      test('it renders correctly', () => {
        const component = shallow(
          <Category
            t={(translation) => translation}
            expand={() => {}}
            collapse={() => {}}
            category={{
              id: 1,
              title: 'Test1',
              slug: 'test_1',
              applications: [],
              isFetched: false,
              isFetchable: true
            }}
          />
        );

        expect(
          toJSON(component)
        ).toMatchSnapshot();
      });
    });

    describe('and there is no apps to fetch', () => {
      test('it renders correctly', () => {
        const component = shallow(
          <Category
            t={(translation) => translation}
            expand={() => {}}
            collapse={() => {}}
            category={{
              id: 1,
              title: 'Test1',
              slug: 'test_1',
              applications: [],
              isFetched: true,
              isFetchable: true
            }}
          />
        );

        expect(
          toJSON(component)
        ).toMatchSnapshot();
      });
    });
  });
});
