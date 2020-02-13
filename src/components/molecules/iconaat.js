 <View
style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: '#ffffff',
}}>

<View style={styles.trans}>
  <View style={{flexDirection: 'column'}}>
    <View style={{flexDirection: 'row'}}>
      <View style={{paddingLeft: 10, paddingRight: 15}}>
         <Image
          source={favouritePlaces[0].image}
          style={{width: 35, height: 35, resizeMode: 'contain'}}
        /> 
      </View>
      <View
        style={{
          borderLeftWidth: 1,
          borderLeftColor: 'black',
        }}
      />
      <View style={{paddingLeft: 20, paddingRight: 20}}>
         <Image
         source={favouritePlaces[1].image}
          style={{width: 35, height: 35, resizeMode: 'contain'}}
        /> 
      </View>

      <View
        style={{
          borderLeftWidth: 1,
          borderLeftColor: 'black',
        }}
      />
      <View style={{paddingLeft: 20, paddingRight: 20}}>
       <Image
          source={favouritePlaces[2].image}
          style={{width: 35, height: 35, resizeMode: 'contain'}}
        />
      </View>

      <View style={{borderLeftWidth: 1, borderLeftColor: 'black'}} />

      <View style={{paddingLeft: 25, paddingTop: 9}}>
         <Image
          source={favouritePlaces[4].image}
          style={{width: 15, height: 15, resizeMode: 'contain'}}
        /> 
      </View>
    </View>
    <View style={{borderTopWidth: 1, borderLeftColor: 'black',marginHorizontal:0,marginVertical:10}} /> 

    <Divider
      borderColor="black"
      color="black"
      orientation="center"></Divider> 

    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{paddingTop: 0, paddingRight: 155}}
        keyboardType="email-address"
        autoCorrect={false}
        multiline={false}
        placeholder="  Lets'Go"
        placeholderTextColor="#000000"></TextInput>
      <View style={{height: 5, paddingTop: 0}}>
        <View
          style={{
            borderLeftWidth: 1,
            borderLeftColor: 'black',
            paddingTop: 30,
          }}
        />
      </View>

      <View style={{paddingTop: 0, paddingLeft: 23}}>
         <Image
          source={favouritePlaces[3].image}
          style={{width: 25, height: 35, resizeMode: 'contain'}}
        /> 
      </View>
    </View>
  </View>
</View>
</View> 