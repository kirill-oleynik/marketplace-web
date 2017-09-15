import React from 'react';
import PropTypes from 'prop-types';
import { Sticky, StickyContainer } from 'react-sticky';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { getAppProfile } from '../selectors/applications_selectors';
import MainFooter from '../components/footer';
import Header from '../containers/header_container';
import AppBlockVertical from '../components/app_block_vertical';
import GoTopLink from '../components/go_top_link';
import AppProfile from '../components/applications/app_profile';

import CategoriesDropdown from '../components/categories/dropdown';
import CategoriesLinkList from '../components/categories/link_list';
import CategoriesContainer from '../containers/categories_container';

const CategoriesDropdownContainer = CategoriesContainer(CategoriesDropdown);
const CategoriesLinkListContainer = CategoriesContainer(CategoriesLinkList);

const AppProfileContainer = ({ appProfile, t }) => (
  <div className="page-container">
    <Header />

    <main className="flex-grow-1">
      <section className="hidden-sm-up">
        <CategoriesDropdownContainer />
      </section>

      <Container>
        <section className="pt-60">
          <Row>
            <Col xs="12" sm="3" className="hidden-xs-down">
              <StickyContainer style={{ height: '100%' }}>
                <Sticky topOffset={-30}>
                  {
                    (stickyOptions) => (
                      <CategoriesLinkListContainer
                        stickyOptions={{
                          ...stickyOptions,
                          style: {
                            ...stickyOptions.style,
                            top: '30px',
                            zIndex: 2
                          }
                        }}
                      />
                    )
                  }
                </Sticky>
              </StickyContainer>
            </Col>

            <Col xs="12" sm="9">
              <AppProfile
                appProfile={appProfile}
                t={t}
              />

              <div className="divider divider--dark mb-30" />

              <AppBlockVertical />
            </Col>
          </Row>
        </section>
      </Container>

      <GoTopLink />
    </main>

    <MainFooter />
  </div>
);

AppProfileContainer.propTypes = {
  appProfile: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  appProfile: getAppProfile(state)
});

export default connect(mapStateToProps, null)(
  translate(['applications', 'common'])(AppProfileContainer)
);
