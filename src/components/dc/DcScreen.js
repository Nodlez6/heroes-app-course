import React from 'react';
import { HeroList } from '../hero/HeroList';


export const DcScreen = () => {
  return (
    <div>
        <h1>DC SCREEN</h1>
        <hr/>


        <HeroList
          publisher={ 'DC Comics' }
        />
    </div>
  );
};
