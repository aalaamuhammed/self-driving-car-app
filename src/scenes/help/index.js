import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../constants';

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'How to choose the right car?',
    content: BACON_IPSUM,
  },
  {
    title: 'Is it safe to use?',
    content: BACON_IPSUM,
  },
  {
    title: 'How is the fare calculated?',
    content: BACON_IPSUM,
  },
  {
    title: 'How to deal with the app?',
    content: BACON_IPSUM,
  },
  {
    title: "Why it's name is Taxi?",
    content: BACON_IPSUM,
  },
];

export default (help = ({navigation}) => {
  const [activeSections, setActiveSections] = useState([]);

  const setSections = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.header,
          isActive
            ? {borderBottomLeftRadius: 0, borderBottomRightRadius: 0}
            : null,
        ]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        {!isActive ? (
          <Icon name="right" size={25} color={theme.colors.primary} />
        ) : (
          <Icon name="minus" size={25} color={theme.colors.primary} />
        )}
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={styles.content}
        transition="backgroundColor"
        containerStyle={{flex: 1, borderWidth: 5}}>
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <Block bottom middle color={'primary'}>
      <Block flex={0.2} row right>
        <Block
          middle
          card
          flex={0.5}
          color={'rgba(255,255,255,.6)'}
          style={{
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            marginVertical: 30,
          }}>
          <Text h1 center regular>
            Help
          </Text>
        </Block>
      </Block>
      <Block
        flex={0.8}
        card
        middle
        color="white"
        style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
        <Accordion
          activeSections={activeSections}
          sections={CONTENT}
          touchableComponent={TouchableOpacity}
          touchableProps={{marginBottom: 5, activeOpacity: 0.8}}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setSections}
          sectionContainerStyle={{
            margin: 20,
          }}
        />
        <Block middle style={{alignItems: 'flex-start'}}>
          <Button
            center
            shadow
            style={{
              padding: 10,
              paddingVertical: 30,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
            }}
            color="primary"
            onPress={() => navigation.navigate('ListOfOffers')}>
            <Text
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                fontSize: 20,
                color: 'white',
              }}>
              Get in touch and ask question
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 10,
  },
});
