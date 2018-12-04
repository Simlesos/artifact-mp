//Page Object
import CARD_00 from '../../data/00'
import CARD_O1 from '../../data/01'

const allCard = CARD_00.card_set.card_list.concat(CARD_O1.card_set.card_list)

const typeMap = {
  red: x => allCard.filter(x => x.is_red),
  blue: x => allCard.filter(x => x.is_blue),
  green: x => allCard.filter(x => x.is_green),
  black: x => allCard.filter(x => x.is_black),
  item: x => allCard.filter(x => x.card_type === "Item")
}

Page({
  data: {
    type: '',
    cardList: {hero: [], other: []},
    currentCardUrl: null
  },
  onLoad: function(options) {
    const { type } = options
    const cardList = this.filterCard(type)
    console.log(cardList)
    this.setData({
      type,
      cardList
    })
  },
  filterCard: function (type) {
    let cardList =  typeMap[type]()
    cardList = cardList.reduce((prv, next) => {
      const { card_type } = next
      if (card_type === 'Hero') {
        prv.hero.push(next)
      } else {
        prv.other.push(next)
      }
      return prv
    }, { hero: [], other: [] })
    this.formatCard(cardList.other)
    cardList.other.sort((a, b) => a.mana_cost - b.mana_cost)
    cardList.other.sort((a, b) => a.gold_cost - b.gold_cost)
    return cardList
  },
  formatCard: function (cardList) {
    const type = {
      Spell: '/images/card_type_spell.png',
      Item: {
        Armor: '/images/card_type_armor.png',
        Weapon: '/images/card_type_weapon.png',
        Accessory: '/images/card_type_health.png'
      },
      Improvement: '/images/card_type_improvement.png',
      Creep: '/images/card_type_creep.png'
    }
    cardList.forEach(x => {
      const { card_type, sub_type } = x
      let cardTypeImg = ''
      if (card_type === 'Item') {
        cardTypeImg = type['Item'][sub_type]
      } else {
        cardTypeImg = type[card_type]
      }
      x.$card_type_img = cardTypeImg
      x.$type = this.data.type
    })
  },
  onCardTap: function (event) {
    const { id } = event.currentTarget.dataset
    const card = allCard.find(x => x.card_id == id)
    if (card) {
      this.setData({
        currentCardUrl: card.large_image
      })
    }
  },
  onDialogClick: function () {
    this.setData({
      currentCardUrl: null
    })
  }
})
  