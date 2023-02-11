import MenuUtama from './Page/MenuUtama';
import MenuProduct from './Page/MenuProduct';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';
import React, { Component } from 'react';

function App() {
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <Footer />
    </div>
  );
}

class Footer extends Component {
  render() {
    return (
      <div>
        <h1>Ini Halaman Untuk Footer</h1>
      </div>
    );
  }
}

export default App;
