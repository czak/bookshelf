import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  DrawerLayoutAndroid,
  ListView,
} from 'react-native';

class bookshelf extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Assassin Of Dusk',
        'Lord Without Direction',
        'Pilots Of Fire',
        'Phantoms Without Hate',
        'Gangsters And Serpents',
        'Foreigners And Humans',
        'Harmony Of The Ocean',
        'Star Of Hell',
        'Driving Into The Beginning',
        'Faith Of The Dungeons',
        'Lion Of Wood',
        'Doctor Without Fear',
        'Aliens Of The Solstice',
        'Officers Of Gold',
        'Lords And Foreigners',
        'Girls And Traitors',
        'Ruination Of The Gods',
        'Termination Without Direction',
        'Enter Nature',
        'Faith Of The Jungle',
      ])
    };
  }

  render() {
    const navigationView = (
      <View style={styles.drawer}>
        <Text style={styles.drawerText}>I'm in the Drawer!</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref={c => this._drawer = c}
      >
        <ToolbarAndroid
          title="Bookshelf"
          navIcon={require('./navigation_menu.png')}
          onIconClicked={() => this._drawer.openDrawer()}
          style={styles.toolbar}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.listItem}>{rowData}</Text>}
        />
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#444',
  },
  drawerText: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#666',
  },
  listItem: {
    padding: 10,
  },
});

AppRegistry.registerComponent('bookshelf', () => bookshelf);
