import React from 'react'
import SideBar from './layouts/SideBar'
import ContentArea from './layouts/ContentArea'
import Footer from './layouts/Footer'
import Header from './layouts/Header'

class App extends React.Component {
  render() {
    return (
      <div>
      <Header/>
        <SideBar/>
        <ContentArea/>
        <Footer/>
      </div>
    )
  }
}

export default App;
