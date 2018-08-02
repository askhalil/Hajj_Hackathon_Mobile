import React, { Component } from 'react';
import {ListView, View} from 'react-native';
import ListItem from './ListItem';
import Header from './Header';

class List extends Component {
  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ list }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(list);
  }

  renderRow(person) {
    return <ListItem key={person._id} person={person} />;
  }

  render() {
    return (
        <View>
          <Header back={true} headerText={'Scan Results'}/>
          <View style={{height: '100%'}}>
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
          </View>
        </View>

    );
  }
}

export default List;