import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import BudgetSetup from './BudgetSetup';
import Pie from './Pie';

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this.getData = this.getData.bind(this);
  }

  _onPieItemSelected(newIndex) {
    this.setState({ ...this.state, activeIndex: newIndex });
  }

  getData() {

    let pieData = [
      { foodAndDrink: 35 },
      { travel: 10 },
      { recreation: 15 },
      { healthcare: 10 },
      { service: 10 },
      { community: 10 },
      { shops: 10 }
    ];
    // const { budget } = this.props;
    // let pieData = [];
    // let categories = [
    //   'foodAndDrink',
    //   'community',
    //   'healthcare',
    //   'recreation',
    //   'service',
    //   'shops',
    //   'travel'
    // ];

    // for (let key in budget) {
    //   if (categories.includes(key)) {
    //     const properCase = key
    //       .replace(/([a-z\d])([A-Z])/g, '$1' + ' ' + '$2')
    //       .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + ' ' + '$2')
    //       .replace(/\w\S*/g, function(txt) {
    //         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    //       });
    //     pieData.push({ name: properCase, number: budget[key] });
    //   }
    // }
    return pieData;
  }

  render() {
    return (
      <View>
        <Text>Budget</Text>
        {/* <View>
          <Pie
            pieWidth={225}
            pieHeight={225}
            onItemSelected={this._onPieItemSelected}
            colors={pieColor}
            data={this.getData()}
          />

          <View>
            <Button
              title={`Edit Budget`}
              onPress={() => {
                this.props.navigation.navigate('BudgetSetup', {
                  title: 'BudgetSetup'
                });
              }}
            />
          </View>
        </View> */}
      </View>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    budget: state.acctTrans.budget
  };
};

export default connect(null, mapState)(Budget);