import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  ListView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class AgendaView extends Component {
  static defaultProps = {
    highlightCurrent: true,
    updateInterval: 1000 * 60,
    items: [],
    styles: {},
  }

  static propTypes = {
    highlightCurrent: PropTypes.bool,
    updateInterval: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string.isRequired,
      description: PropTypes.string,
      borderColor: PropTypes.string,
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
      startDate: PropTypes.number,
      endDate: PropTypes.number,
    })).isRequired,
    styles: PropTypes.object,
    onItemPress: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(this.props.items),
      currentTime: Date.now(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        currentTime: Date.now(),
      });
    }, this.props.updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  renderRow = rowData => {
    let isHighlighted = false;
    const highlightStyle = {};

    if (this.props.highlightCurrent) {
      if (rowData.startDate && rowData.endDate) {
        if ((this.state.currentTime - rowData.startDate > 0) &&
          (this.state.currentTime < rowData.endDate)) {
          isHighlighted = true;
        }
      }
    }

    let bubble = null;

    if (rowData.description) {
      const colorStyle = {
        backgroundColor: rowData.backgroundColor || 'white',
        borderColor: rowData.borderColor || '#ccc',
      };

      const textStyle = {
        color: rowData.color || 'black',
      };

      let descriptionView = (
        <View style={[styles.description, this.props.styles.description, colorStyle]}>
          {(typeof rowData.description === 'string') ?
            <Text style={textStyle}>{rowData.description}</Text> :
            React.createElement(rowData.description)}
        </View>
      );

      if (this.props.onItemPress) {
        bubble = (
          <TouchableOpacity onPress={this.props.onItemPress}>
            {descriptionView}
          </TouchableOpacity>
        );
      } else {
        bubble = descriptionView;
      }
    }

    if (isHighlighted) {
      highlightStyle.backgroundColor = 'rgba(255, 255, 0, 0.33)';
    }

    return (
      <View style={[styles.item, this.props.styles.item, highlightStyle]}>
        <Text style={[styles.header, this.props.styles.header]}>
          {rowData.header}
        </Text>
        {bubble}
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={[styles.container, this.props.styles.container]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  description: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    paddingBottom: 12,
  },
  item: {
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  header: {
    marginBottom: 4,
    color: '#a0a0a0',
  },
});

export default AgendaView;
