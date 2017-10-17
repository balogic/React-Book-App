import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import ItemList from './ItemList'
class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  componentWillMount() {
    fetch(`http://localhost:4000/${this.props.items}`).then((response) => response.json()).then((responseJson) => this.setState({items: responseJson}))
  }
  render() {
    return (
      <MuiThemeProvider>
        <ItemList items={this.state.items}/>
      </MuiThemeProvider>
    )
  }
}
export default Item;
