import React, { Component } from 'react';
import { Wrap } from 'components/Appstyled';
import Header from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery.jsx';
export class App extends Component {
  render() {
    return (
      <Wrap>
        <Header />
        <ImageGallery></ImageGallery>
      </Wrap>
    );
  }
}
