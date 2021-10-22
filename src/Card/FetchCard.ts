import Axios, {AxiosResponse} from 'axios'
import {ICard} from './ICard'

export const FetchCard = async (): Promise<ICard> => {
    return await Axios.get('https://api.magicthegathering.io/v1/cards/270376')
        .then((response: AxiosResponse<any>) => {
            const card: ICard = response.data.card
            return card
        })
}
