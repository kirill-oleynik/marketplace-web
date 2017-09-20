import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Modal, Container } from 'reactstrap';
import ImageGallery from 'react-image-gallery/build/image-gallery';

const ApplicationGalleryModal = ({
  isOpen, onCloseClick, currentIndex, slidesLength, slide, renderLeftNav, renderRightNav
}) => (
  <Modal isOpen={isOpen} className="main-modal main-modal--image-gallery-fullscreen">
    <Container>
      <Row className="pt-30">
        <Col xs="6">
          <div className="image-gallery-fullscreen__slides-count">
            {currentIndex + 1} / {slidesLength}
          </div>
        </Col>

        <Col xs="6" className="text-right">
          <button type="button" onClick={onCloseClick}>
            <i className="icon icon-cross font-16 in-black-035" />
          </button>
        </Col>
      </Row>

      <Row className="main-modal__content">
        <Col xs="12">
          <div className="image-gallery-fullscreen__content">
            <div className="image-gallery-fullscreen__slide-wrap">
              {renderLeftNav()}

              <img
                src={slide.url}
                alt={slide.description}
                className="image-gallery-fullscreen__slide"
              />

              {renderRightNav()}
            </div>

            {
              slide.description ? (
                <p className="image-gallery-fullscreen__description">
                  {slide.description}
                </p>
              ) : null
            }
          </div>
        </Col>
      </Row>
    </Container>
  </Modal>
);

ApplicationGalleryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  slide: PropTypes.object.isRequired,
  currentIndex: PropTypes.number.isRequired,
  slidesLength: PropTypes.number.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  renderLeftNav: PropTypes.func.isRequired,
  renderRightNav: PropTypes.func.isRequired
};

class ApplicationGalerry extends Component {
  static propTypes = {
    slides: PropTypes.array.isRequired
  }

  state = {
    isOpen: false,
    currentIndex: 0
  }

  getCurrentIndex = () => (
    (this.gallery && this.gallery.getCurrentIndex()) || 0
  )

  handleSlideChange = (currentIndex) => {
    this.setState({
      currentIndex
    });
  }

  handleFullscreenClick = () => {
    this.setState({
      isOpen: true
    });
  }

  handleCloseClick = () => {
    this.setState({
      isOpen: false
    });
  }

  handleLeftClick = () => {
    this.gallery.slideToIndex(
      this.getCurrentIndex() - 1
    );
  }

  handleRightClick = () => {
    this.gallery.slideToIndex(
      this.getCurrentIndex() + 1
    );
  }

  renderFullscreenButton = () => (
    <button
      type="button"
      onClick={this.handleFullscreenClick}
      className="image-gallery-fullscreen-button"
    />
  )

  renderLeftNav = () => (
    <button
      type="button"
      className="image-gallery-left-nav"
      onClick={this.handleLeftClick}
    />
  )

  renderRightNav = () => (
    <button
      type="button"
      className="image-gallery-right-nav"
      onClick={this.handleRightClick}
    />
  )

  renderThumbnailsLeftNav = (onClick) => (
    <button
      type="button"
      onClick={onClick}
      className="image-gallery-thumbnail-left-nav"
    />
  )

  renderThumbnailsRightNav = (onClick) => (
    <button
      type="button"
      onClick={onClick}
      className="image-gallery-thumbnail-right-nav"
    />
  )

  render() {
    const { slides } = this.props;
    const { isOpen, currentIndex } = this.state;

    const images = slides.map((slide) => ({
      original: slide.url,
      thumbnail: slide.url
    }));

    return (
      <div>
        <ImageGallery
          items={images}
          showThumbnailsNav
          slideInterval={2000}
          showPlayButton={false}
          onSlide={this.handleSlideChange}
          ref={(c) => { this.gallery = c; }}
          renderLeftNav={this.renderLeftNav}
          renderRightNav={this.renderRightNav}
          renderFullscreenButton={this.renderFullscreenButton}
          renderThumbnailsLeftNav={this.renderThumbnailsLeftNav}
          renderThumbnailsRightNav={this.renderThumbnailsRightNav}
        />

        <ApplicationGalleryModal
          isOpen={isOpen}
          currentIndex={currentIndex}
          slide={slides[currentIndex]}
          slidesLength={slides.length}
          renderLeftNav={this.renderLeftNav}
          renderRightNav={this.renderRightNav}
          onCloseClick={this.handleCloseClick}
        />
      </div>
    );
  }
}

export default ApplicationGalerry;
