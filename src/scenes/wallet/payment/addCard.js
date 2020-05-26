import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Modal,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {OrangeHeader, CardDataFlatList, VerifyModal} from '_molecules';
import axios from 'axios';
import {apis} from '../../../constants';

export default class AddCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finishingModal: false,
      DATA: [
        {
          title: 'Card Number',
          keyboardType: 'number-pad',
          key: 0,
          color: '#FF8900',
        },
        {
          title: 'Expiration Date',
          keyboardType: 'Picker',
          key: 1,
          color: '#FF8900',
        },
        {
          title: 'Cardholder Name',
          keyboardType: 'default',
          key: 2,
          color: '#FF8900',
        },
        {title: 'CVV', keyboardType: 'number-pad', key: 3, color: '#F9F9F9'},
      ],
      usersData: [],
      user: {
        cardNumber: null,
        expirationDate: null,
        cardholderName: null,
        CVV: null,
        country: null,
      },
      date: new Date(),
    };
  }

  saveDate = (item, text) => {
    {
      item.key === 0
        ? this.setState(prevState => ({
            user: {
              // object that we want to update
              ...prevState.user, // keep all other key-value pairs
              cardNumber: text,
            }, // update the value of specific key
          }))
        : null;
    } // return new object jasper object

    {
      item.key === 1
        ? this.setState(prevState => ({
            user: {
              // object that we want to update
              ...prevState.user, // keep all other key-value pairs
              expirationDate: text,
            }, // update the value of specific key
          }))
        : null;
    } // return new object jasper object

    {
      item.key === 2
        ? this.setState(prevState => ({
            user: {
              // object that we want to update
              ...prevState.user, // keep all other key-value pairs
              cardholderName: text,
            }, // update the value of specific key
          }))
        : null;
    } // return new object jasper object

    {
      item.key === 3
        ? this.setState(prevState => ({
            user: {
              // object that we want to update
              ...prevState.user, // keep all other key-value pairs
              CVV: text,
            }, // update the value of specific key
          }))
        : null;
    } // return new object jasper object
  };

  addUserData = () => {
    console.log(this.state.user);
    this.state.usersData.push(this.state.user);
    this.VerifyModal();

    console.log(this.state.finishingModal);
  };
  move = () => {
    this.props.navigation.navigate('viewCard');
  };
  VerifyModal = () => {
    this.setState({finishingModal: true});
    setTimeout(() => {
      this.setState({finishingModal: false});
    }, 1000);
  };
  postCard = async () => {
    url = apis.users_api + `{${this.state.id}}` + '/creditCards';
    axios
      .post(url, {user: this.state.user})
      // the form of schema
      // "type": "Master Card" / "Visa",
      //     "cardHolder": "MAHMOUD YOUSSEF",
      //     "cvv": 245,
      //     "creditCardNumber": "4545454545454545",
      //     "expirationDate": "2020-04-27T00:00:00.000Z"
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error('Error', err);
      });
  };

  render() {
    const a = (
      <View>
        <CardDataFlatList DATA={this.state.DATA} saveDate={this.saveDate} />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: '#FF8900',
            alignItems: 'center',
            borderRadius: 8,
            margin: 30,
          }}
          onPress={() => {
            this.addUserData();
            //    this.postCard()
          }}>
          <Text style={{padding: 10, color: '#F6F7F8', fontSize: 15}}>
            SAVE
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <VerifyModal visibility={this.state.finishingModal} />
        </View>
      </View>
    );
    return (
      <View style={{flex: 1}}>
        <OrangeHeader
          title="Wallet"
          navigation={this.props.navigation}
          move={this.move}
          com={a}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF8900',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  icon: {
    alignSelf: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 45,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F6F7F8',
    paddingBottom: 20,
  },
});
