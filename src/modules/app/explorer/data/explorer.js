import { shuffle, sleep } from 'utils/commonFunctions'

const explorerProfiles = [
  {
    name: 'Hà',
    age: 'K15',
    bio: 'True love stories never have endings',
    image: 'https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/217125181_3001527403425707_1832821722404312806_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1gMzzkoZtzcAX-bEW8O&_nc_ht=scontent-xsp1-3.xx&oh=00_AT_zTE9PYJe9xmcZcrzwDHB1eAOnHn8L1W4F7P8cJ5vk3A&oe=6236D950'
  },
  {
    name: 'Nguyên',
    age: 'K14',
    bio: 'If you don\'t fight for what you want, don\'t cry for what you lost',
    image: 'https://images-ssl.gotinder.com/6225789fca044301007d251f/640x800_bf226470-baec-4ba2-b848-297292d068b1.jpg'
  },
  {
    name: 'Nhi',
    age: 'K15',
    bio: 'Love all, trust a few, do wrong to none',
    image: 'https://images-ssl.gotinder.com/5e42b809f26ad90100e89933/640x800_9afb16d7-f18e-4b0b-9989-01fe65b61b33.jpg'
  },
  {
    name: 'Hoàng',
    age: 'K15',
    bio: 'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.',
    image: 'https://images-ssl.gotinder.com/5f941409ed2ff70100f71327/640x800_e877b848-53f9-4428-9e1b-3ffc863bf179.jpg'
  },
  {
    name: 'Ly',
    age: 'K15',
    bio: 'There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment',
    image: 'https://images-ssl.gotinder.com/5fcfaead95fef0010068946b/640x800_5ce9a7eb-bb7c-42bf-ba54-b12914e3831e.jpg'
  },
  {
    name: 'Linh',
    age: 'K15',
    bio: `There are people who say love can move mountains. This might not be physically possible, but Dashrath Manjhi, also known as the ‘Mountain Man’, came quite close. In one day of his life, his wife fell while crossing a nearby hill and hurt herself seriously. She needed quick medical assistance, but that wasn’t possible due to the hill that isolated their small village from the next town. Tragically enough, his wife died from the serious injuries before Dashrath could do anything about it. It was the night when Dashrath Manjhi decided to carve a small path through the mountain in order to give his village easier access to medical assistance.
    
    It was an ambitious plan and he was heavily ridiculed for it. But after working for 22 years with the greatest determination and willpower, a path was carved into the hill. Even though he was initially mocked and ridiculed for his mission to give his hometown easier access to the nearby town, he finally succeeded. His life’s work helped to reduce the distance between the two towns from 55 km to only 15 km, so that never again such a thing would happen.`,
    image: 'https://i.imgur.com/ZHAn1uy.jpg'
  }
]

export async function getExplorerProfiles() {
  await sleep(2000)
  shuffle(explorerProfiles)
  const id = new Date().getTime()
  return explorerProfiles.map(e => ({
    ...e,
    id: `${id}-${e.name}`
  }))
}
