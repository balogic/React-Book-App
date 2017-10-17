import React from 'react'
import SideBar from './layouts/SideBar'
import ContentArea from './layouts/ContentArea'
import Footer from './layouts/Footer'
import Header from './layouts/Header'

class App extends React.Component {
  render() {
    const items = [
      {
        type: 'Books',
        url: '/'
      }, {
        type: 'Categories',
        url: '/'
      }
    ]
    return (
      <div>
        <Header/>
        <SideBar items={items}/>
        <ContentArea items={this.props.items}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
