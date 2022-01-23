import React, { useState , useMemo} from 'react';
import { getHeroByPublisher } from '../helpers/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ( { publisher } ) => {
  const [first, setfirst] = useState(0);
 

 const heroes = useMemo( () => getHeroByPublisher( publisher ), [ publisher ])


  return (
  
    <div className='animate__animated animate__fadeIn row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map( hero => (

                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }

                    />
                    
                ))
            }
            <button onClick={() => setfirst( first + 1 )}>
              { first }
            </button>
    </div>
  )
};
