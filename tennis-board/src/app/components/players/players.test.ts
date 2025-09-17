
import {organizeMixArrayOfPlayers, Player} from './players'

describe('Players', () => {
    describe('organizeMixArrayOfPlayers', () => {

        const players: Player[] = [{
            name: 'Adriana Black',
            gender: 'female',
            number: 1,
        },
        {
            name: 'Robbie Black',
            gender: 'male',
            number: 2,
        },
        {
            name: 'Andy Murray',
            gender: 'male',
            number: 4
        },
        {
            name: 'Charlie Black',
            gender: 'male',
            number: 5
        },
        {
            name: 'Billy Jean',
            gender: 'female',
            number: 3,
        }
        ]
        it('should exist in the file', () => {
            expect(organizeMixArrayOfPlayers).toBeDefined()
        })
        it('returns an array of only 4 items',() => {
            const result = organizeMixArrayOfPlayers(players)
            expect(result).toHaveLength(4)
        })

        it('should have two males and two females', () => {
            const result = organizeMixArrayOfPlayers(players)
            const females = result.filter((player) => player.gender === 'female')
            const males = result.filter((player) => player.gender === 'male')
            expect(females).toHaveLength(2)
            expect(males).toHaveLength(2)
        })
    })
})