import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import menuApp from './reducers'
import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

let initialState = {
  pairs: [1, 2],
  menus: [0, 3, 4, 5],
  menusById: [
    {
      id: 0,
      name: "김치",
      img: "https://scontent.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/10549700_592803767534313_1864798883_n.jpg",
    },
    {
      id: 1,
      name: "김치1",
      img: "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xta1/t51.2885-15/e35/12534171_1037820692947990_2043013302_n.jpg",
    },
    {
      id: 2,
      name: "김치2",
      img: "https://scontent.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/10549700_592803767534313_1864798883_n.jpg",
    },
    {
      id: 3,
      name: "김치3",
      img: "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xta1/t51.2885-15/e35/12534171_1037820692947990_2043013302_n.jpg",
    },
    {
      id: 4,
      name: "김치4",
      img: "https://scontent.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/10549700_592803767534313_1864798883_n.jpg",
    },
    {
      id: 5,
      name: "김치5",
      img: "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xta1/t51.2885-15/e35/12534171_1037820692947990_2043013302_n.jpg",
    }
  ]
}

let store = createStore(menuApp, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
