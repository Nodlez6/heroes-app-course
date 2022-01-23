import React, { useState , useMemo} from 'react';
import queryString  from 'query-string'

import { useNavigate , useLocation} from 'react-router-dom';
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search)

  const [search, setSearch] = useState({
    searchInput: q
  });

  const { searchInput } = search


  const heroesFilted = useMemo(() =>  getHeroByName( q ), [q])
 


  const handleInputChange = (e) => {
    setSearch({
      [e.target.name]: e.target.value
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({
      searchInput:''
    })
    navigate(`?q=${ searchInput }`)
  }


  return (
    <div>
        <h1>Búsquedas</h1>

        <div className='row'>

          <div className='col-5'>
            <h4>Buscar</h4>
            <hr />

            <form onSubmit={ handleSubmit }>
              <input 
                type='text'
                placeholder='Buscar un héroe'
                className='form-control'
                name='searchInput'
                autoComplete='off'
                onChange={ handleInputChange }
                value={ searchInput }

              />

              <button 
                type='submit'
                className='btn btn-primary mt-1 '
              >
                Buscar
              </button>


            </form>
          </div>

          <div className='col-7'>
              <h4>Resultados</h4>
              <hr />

              {

                  (q === '')
                     ? <div className='alert alert-info '>Buscar un héroe </div>
                     : ( heroesFilted.length === 0)
                          && <div className='alert alert-danger'> No hay resultados : { q } </div>

              }


              {
                heroesFilted.map( hero => (
                  <HeroCard
                    key={hero.id}
                    {...hero}
                   />
                ))
              }


          </div>

        </div>
    </div>
  );
};
