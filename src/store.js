import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/a1.jpeg'),
        title: 'Ripe-Red-Tomatoes',
        price: 156,
        color: 'Red',
        type: 'vegies'
      }, {
        id:1,
        img: require('@/assets/a11.jpg'),
        title: 'Orange',
        price: 756,
        color: 'green',
        type: 'fruits'
      }, {
        id:2,
        img: require('@/assets/a12.jpg'),
        title: 'Honeycomb',
        price: 362,
        color: 'yellow',
        type: 'tools'
      }, {
        id:3,
        img: require('@/assets/a15.jpg'),
        title: 'Golden-Fish',
        price: 756,
        color: 'orange',
        type: 'animals'
      }, {
        id:4,
        img: require('@/assets/a5.jpg'),
        title: 'Ripe-Coffee-Berries',
        price: 243,
        color: 'red',
        type: 'others'
      }, {
        id:5,
        img: require('@/assets/a13.jpg'),
        title: 'Gardening Tools',
        price: 432,
        color: ' ',
        type: 'tools'
        
      }, {
        id:6,
        img: require('@/assets/a3.jpg'),
        title: 'Corn',
        price: 505,
        color: 'yellow',
        type: 'vegies'
      }, {
        id:7,
        img: require('@/assets/a4.jpg'),
        title: 'Bunch-of-Bok-Choi',
        price: 44,
        color: 'green',
        type: 'vegies'
      },
      {
        id:8,
        img: require('@/assets/a8.jpg'),
        title: 'Calf',
        price: 390,
        color: 'white',
        type: 'animals'
      },
      {
        id:9,
        img: require('@/assets/a7.jpg'),
        title: 'Egg',
        price: 756,
        color: 'white',
        type: 'others'
      },
      {
        id:10,
        img: require('@/assets/a10.jpg'),
        title: 'Apple',
        price: 44,
        color: 'red',
        type: 'fruits'
      },
      {
        id:11,
        img: require('@/assets/a14.jpg'),
        title: 'Axe',
        price: 156,
        color: '',
        type: 'tools'
      },
      {
        id:12,
        img: require('@/assets/a6.jpg'),
        title: 'Rooster',
        price: 505,
        color: 'red',
        type: 'animals'
        
      },
      {
        id:13,
        img: require('@/assets/a9.jpg'),
        title: 'Bamboo-Stick',
        price: 756,
        color: 'green',
        type: 'others'
      },
      {
        id:14,
        img: require('@/assets/a2.jpg'),
        title: 'Strawberry',
        price: 756,
        color: 'red',
        type: 'fruits'
      }
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    }
  },
})
