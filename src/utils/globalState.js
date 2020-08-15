import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';
 
const initialState = { clicked: 0, addressesList:[],
userInfo:null };
const {useGlobalState} = createGlobalState(initialState);



export default useGlobalState 

