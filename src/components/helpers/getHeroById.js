import { heroes } from '../../data/heroes'

export const getHeroById = ( heroeId ) => {

    return heroes.find( hero => (hero.id === heroeId) )

}