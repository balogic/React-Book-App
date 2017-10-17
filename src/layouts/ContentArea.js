import React from 'react'
import Item from '../Item'
class ContentArea extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h2>{this.props.items.toUpperCase()}</h2>
        </section>
        <section className="content">
          <Item items={this.props.items}/>
        </section>
      </div>
    )
  }
}
export default ContentArea;
