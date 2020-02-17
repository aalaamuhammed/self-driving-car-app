import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  View,
  Modal,
  ScrollView,
} from 'react-native';

import {Block, Text, Button} from '_atoms';
import {theme, mocks} from '../../constants';

import {parkingsSpots} from '../../constants/mocks';

const {width} = Dimensions.get('window');

class RenderTerms extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);

    this.state = {
      hours: {},
      active: null,
      activeModal: null,
      click: 1,
      showTerms: true,
    };
  }

  select() {
    this.setState({showTerms: false}, () => {
      console.log('showTerms2222222222222222' + this.state.showTerms);
      this.props.changeState(this.state.showTerms);
      // this.setState({showTerms:true})
    });
  }

  renderTermsService() {
    return (
      <Modal
      // animationType="slide"
      // visible={this.state.showTerms}
      // onRequestClose={this.select}
      >
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between">
          <Text h2 light>
            Terms of Service
          </Text>

          <ScrollView style={{marginVertical: theme.sizes.padding}}>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              1. Your use of the Service is at your sole risk. The service is
              provided on an "as is" and "as available" basis.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              2. Support for Expo services is only available in English, via
              e-mail.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              3. You understand that Expo uses third-party vendors and hosting
              partners to provide the necessary hardware, software, networking,
              storage, and related technology required to run the Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              4. You must not modify, adapt or hack the Service or modify
              another website so as to falsely imply that it is associated with
              the Service, Expo, or any other Expo service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              5. You may use the Expo Pages static hosting service solely as
              permitted and intended to host your organization pages, personal
              pages, or project pages, and for no other purpose. You may not use
              Expo Pages in violation of Expo's trademark or other rights or in
              violation of applicable law. Expo reserves the right at all times
              to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              6. You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by Expo.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              7. We may, but have no obligation to, remove Content and Accounts
              containing Content that we determine in our sole discretion are
              unlawful, offensive, threatening, libelous, defamatory,
              pornographic, obscene or otherwise objectionable or violates any
              party's intellectual property or these Terms of Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              8. Verbal, physical, written or other abuse (including threats of
              abuse or retribution) of any Expo customer, employee, member, or
              officer will result in immediate account termination.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              9. You understand that the technical processing and transmission
              of the Service, including your Content, may be transferred
              unencrypted and involve (a) transmissions over various networks;
              and (b) changes to conform and adapt to technical requirements of
              connecting networks or devices.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              10. You must not upload, post, host, or transmit unsolicited
              e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>

          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button gradient onPress={this.select}>
              <Text center white>
                I understand
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  }

  render() {
    return <React.Fragment>{this.renderTermsService()}</React.Fragment>;
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default RenderTerms;
