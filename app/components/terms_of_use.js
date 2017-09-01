import React from 'react';
import PropTypes from 'prop-types';
import { Container, Modal } from 'reactstrap';
import ButtonLink from './button_link';

const TermsOfUse = ({ isOpen, toggle }) => (
  <Modal isOpen={isOpen} toggle={toggle} className="main-modal">
    <Container>
      <div className="text-right pt-30">
        <button type="button">
          <i className="icon icon-cross font-16 in-black-035" />
        </button>
      </div>
      <div className="main-modal__content pt-20">
        <h1 className="font-24 font-700 mb-30">Terms of Use</h1>
        <h2 className="font-16 font-700 mb-30">Wellcome to Appreview! Please take time to read our Terms of Use</h2>
        <p className="in-black-050 mb-30">By accessing and using this Website or any of the content and services provided herein, you agree to be legally bound by these Terms of Use, as well as all applicable terms, policies and operating procedures that may from time to time be published on this Website and the websites of our Gartner Affiliates and Participating Vendors, which are incorporated herein by this reference.</p>
        <h3 className="font-16 mb-20">Use of website</h3>
        <ul className="in-black-050 mb-30">
          <li className="main-list-item">The Website and Services, including without limitation the Domain Names and Company Content of Company and all our Affiliates, along with all intellectual property rights therein.</li>
          <li className="main-list-item">The Website and Content of Company and the services provided therein, including without limitation: free user services, applications and tools.</li>
          <li className="main-list-item">Those individuals who access the Website and use the Services.</li>
        </ul>
        <h3 className="font-16 mb-20">Definitions</h3>
        <p className="in-black-050 mb-20">The Website and Services, including without limitation the <span className="font-700">Domain Names and Company Content of Company</span> and all our Affiliates, along with all intellectual property rights therein.
          <br />
          The Website and Content of Company and the services provided therein,
          including without limitation: free user services, applications and tools.</p>
        <p className="in-black-050 mb-30">Those individuals who access the Website and use the Services.
          <br />
          The content submitted by Users in the context of using the Website
          or the Services.
          <br />
          The online location where Company provides its Services and posts
          its Content, which includes without limitation services provided
          at or using the following domains: www.getapp.com, www.capterra.com,
          www.softwareadvice.com, www.getapp.com and such other or successor
          domain names as may be operated, acquired or used from time to time
          by Company and its Affiliates.</p>
        <h3 className="font-16 mb-20">Intellectual property rights</h3>
        <ol className="main-list-numbered in-black-050 mb-30">
          <li className="main-list-numbered__item">The Website and Services, including without limitation the <ButtonLink href="" text="Domain Names and Company Content of Company" /> and all our Affiliates, along with all intellectual property rights therein.</li>
          <li className="main-list-numbered__item">The Website and <ButtonLink href="" text="Content of Company" /> and the services provided therein, including without limitation: free user services, applications and tools.</li>
          <li className="main-list-numbered__item">Those individuals who access the Website and use the Services.</li>
        </ol>
        <p className="font-700 mb-20">By accessing and using the website and services, you attest that you have read, understood and agree to be legally bound by the foregoing terms of use.</p>
        <p className="in-black-035">Last updated: June 2017</p>
      </div>
    </Container>
  </Modal>
);

TermsOfUse.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired
};

TermsOfUse.defaultProps = {
  isOpen: false
};

export default TermsOfUse;
