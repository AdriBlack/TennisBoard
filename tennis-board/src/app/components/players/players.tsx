
export type Player= {
    name: string,
    gender: string,
    number: number
  }
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
    name: 'Billy Jean',
    gender: 'female',
    number: 3,
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
}
]

export function organizeMixArrayOfPlayers(players:Player[]) {
    const mixedDoubles: Player[] = []
    let male = 0
    let female = 0
      players.map((player) => {
        if(player.gender == 'female'){
            female = female + 1
            if(female <= 2){
                mixedDoubles.push(player)
            }
        } else if(player.gender == 'male'){
            male = male + 1
            if(male <= 2){
                mixedDoubles.push(player)
            }
        }
      })

  return mixedDoubles
}