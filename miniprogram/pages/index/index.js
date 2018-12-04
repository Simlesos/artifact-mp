//index.js
const app = getApp()

const cardMap = [
  { name: '红色套牌', type: 'red' },
  { name: '蓝色套牌', type: 'blue' },
  { name: '绿色套牌', type: 'green' },
  { name: '黑色套牌', type: 'black' },
  { name: '装备套牌', type: 'item' }
]

Page({
  data: {
    cardMap
  },
  onLoad: function() {

  },
  onGotoCardList: function (event) {
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: `../cardList/cardList?type=${type}`
    })
  }
})
