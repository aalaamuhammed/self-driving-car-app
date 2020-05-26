import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';
 
const initialState = { count: 0 };
const {useGlobalState} = createGlobalState(initialState);


export default useGlobalState 

