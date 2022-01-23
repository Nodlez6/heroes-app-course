import { heroes } from "../../data/heroes"

export const getHeroByPublisher = ( publisher ) => {
    
    const validPublishers = ['DC Comics' , 'Marvel Comics']

    if( !validPublishers.includes( publisher )){
        throw new Error('publisher inválido')
    }

    return heroes.filter( heroe => heroe.publisher === publisher )
}