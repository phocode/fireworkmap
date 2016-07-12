import {map} from 'lodash'

var placesJson = '[{"time_start": "19:05", "info_url": "http://hanabi.walkerplus.com/detail/ar0313e00858/", "ask_phone": "03-5246-1111\u3000\u9685\u7530\u5ddd\u82b1\u706b\u5927\u4f1a\u5b9f\u884c\u59d4\u54e1\u4f1a\u4e8b\u52d9\u5c40", "latlng": ["35.689487", "139.80429064418"], "paid_seat": "\u5e02\u6c11\u5354\u8cdb\uff1a\u58a8\u7530\u533a\u5074\u4e21\u56fd\u89aa\u6c34\u30c6\u30e9\u30b9 1\u53e36000\u5186\uff081\u53e3\u30671\u540d\u62db\u5f85\u30011850\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u30011550\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u5c11\u5e74\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u3001500\u53e3\u7a0b\u5ea6\uff09\u307b\u304b", "time_end": "20:30", "location": "\u5c0f\u96e8\u6c7a\u884c(\u8352\u5929\u6642\u306f\u4e2d\u6b62)", "date_raw": "2016\u5e747\u670830\u65e5\uff08\u571f\uff09 19:05\uff5e20:30", "date": "2016/7/30", "homepage": "http://sumidagawa-hanabi.com/"},{"time_start": "19:05", "info_url": "http://hanabi.walkerplus.com/detail/ar0313e00858/", "ask_phone": "03-5246-1111\u3000\u9685\u7530\u5ddd\u82b1\u706b\u5927\u4f1a\u5b9f\u884c\u59d4\u54e1\u4f1a\u4e8b\u52d9\u5c40", "latlng": ["35.700623", "139.727125"], "paid_seat": "\u5e02\u6c11\u5354\u8cdb\uff1a\u58a8\u7530\u533a\u5074\u4e21\u56fd\u89aa\u6c34\u30c6\u30e9\u30b9 1\u53e36000\u5186\uff081\u53e3\u30671\u540d\u62db\u5f85\u30011850\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u30011550\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u5c11\u5e74\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u3001500\u53e3\u7a0b\u5ea6\uff09\u307b\u304b", "time_end": "20:30", "location": "\u5c0f\u96e8\u6c7a\u884c(\u8352\u5929\u6642\u306f\u4e2d\u6b62)", "date_raw": "2016\u5e747\u670830\u65e5\uff08\u571f\uff09 19:05\uff5e20:30", "date": "2016/7/30", "homepage": "http://sumidagawa-hanabi.com/"},{"time_start": "19:05", "info_url": "http://hanabi.walkerplus.com/detail/ar0313e00858/", "ask_phone": "03-5246-1111\u3000\u9685\u7530\u5ddd\u82b1\u706b\u5927\u4f1a\u5b9f\u884c\u59d4\u54e1\u4f1a\u4e8b\u52d9\u5c40", "latlng": ["35.693374", "139.766436"], "paid_seat": "\u5e02\u6c11\u5354\u8cdb\uff1a\u58a8\u7530\u533a\u5074\u4e21\u56fd\u89aa\u6c34\u30c6\u30e9\u30b9 1\u53e36000\u5186\uff081\u53e3\u30671\u540d\u62db\u5f85\u30011850\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u30011550\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u5c11\u5e74\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u3001500\u53e3\u7a0b\u5ea6\uff09\u307b\u304b", "time_end": "20:30", "location": "\u5c0f\u96e8\u6c7a\u884c(\u8352\u5929\u6642\u306f\u4e2d\u6b62)", "date_raw": "2016\u5e747\u670830\u65e5\uff08\u571f\uff09 19:05\uff5e20:30", "date": "2016/7/30", "homepage": "http://sumidagawa-hanabi.com/"},{"time_start": "19:05", "info_url": "http://hanabi.walkerplus.com/detail/ar0313e00858/", "ask_phone": "03-5246-1111\u3000\u9685\u7530\u5ddd\u82b1\u706b\u5927\u4f1a\u5b9f\u884c\u59d4\u54e1\u4f1a\u4e8b\u52d9\u5c40", "latlng": ["35.665067", "139.750814"], "paid_seat": "\u5e02\u6c11\u5354\u8cdb\uff1a\u58a8\u7530\u533a\u5074\u4e21\u56fd\u89aa\u6c34\u30c6\u30e9\u30b9 1\u53e36000\u5186\uff081\u53e3\u30671\u540d\u62db\u5f85\u30011850\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u30011550\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u5c11\u5e74\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u3001500\u53e3\u7a0b\u5ea6\uff09\u307b\u304b", "time_end": "20:30", "location": "\u5c0f\u96e8\u6c7a\u884c(\u8352\u5929\u6642\u306f\u4e2d\u6b62)", "date_raw": "2016\u5e747\u670830\u65e5\uff08\u571f\uff09 19:05\uff5e20:30", "date": "2016/7/30", "homepage": "http://sumidagawa-hanabi.com/"},{"time_start": "19:05", "info_url": "http://hanabi.walkerplus.com/detail/ar0313e00858/", "ask_phone": "03-5246-1111\u3000\u9685\u7530\u5ddd\u82b1\u706b\u5927\u4f1a\u5b9f\u884c\u59d4\u54e1\u4f1a\u4e8b\u52d9\u5c40", "latlng": ["35.663673", "139.730215"], "paid_seat": "\u5e02\u6c11\u5354\u8cdb\uff1a\u58a8\u7530\u533a\u5074\u4e21\u56fd\u89aa\u6c34\u30c6\u30e9\u30b9 1\u53e36000\u5186\uff081\u53e3\u30671\u540d\u62db\u5f85\u30011850\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u30011550\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u5c11\u5e74\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u3001500\u53e3\u7a0b\u5ea6\uff09\u307b\u304b", "time_end": "20:30", "location": "\u5c0f\u96e8\u6c7a\u884c(\u8352\u5929\u6642\u306f\u4e2d\u6b62)", "date_raw": "2016\u5e747\u670830\u65e5\uff08\u571f\uff09 19:05\uff5e20:30", "date": "2016/7/30", "homepage": "http://sumidagawa-hanabi.com/"},{"time_start": "19:05", "info_url": "http://hanabi.walkerplus.com/detail/ar0313e00858/", "ask_phone": "03-5246-1111\u3000\u9685\u7530\u5ddd\u82b1\u706b\u5927\u4f1a\u5b9f\u884c\u59d4\u54e1\u4f1a\u4e8b\u52d9\u5c40", "latlng": ["35.670646", "139.778967"], "paid_seat": "\u5e02\u6c11\u5354\u8cdb\uff1a\u58a8\u7530\u533a\u5074\u4e21\u56fd\u89aa\u6c34\u30c6\u30e9\u30b9 1\u53e36000\u5186\uff081\u53e3\u30671\u540d\u62db\u5f85\u30011850\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u30011550\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u5c11\u5e74\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u3001500\u53e3\u7a0b\u5ea6\uff09\u307b\u304b", "time_end": "20:30", "location": "\u5c0f\u96e8\u6c7a\u884c(\u8352\u5929\u6642\u306f\u4e2d\u6b62)", "date_raw": "2016\u5e747\u670830\u65e5\uff08\u571f\uff09 19:05\uff5e20:30", "date": "2016/7/30", "homepage": "http://sumidagawa-hanabi.com/"},{"time_start": "19:05", "info_url": "http://hanabi.walkerplus.com/detail/ar0313e00858/", "ask_phone": "03-5246-1111\u3000\u9685\u7530\u5ddd\u82b1\u706b\u5927\u4f1a\u5b9f\u884c\u59d4\u54e1\u4f1a\u4e8b\u52d9\u5c40", "latlng": ["35.689331", "139.721804"], "paid_seat": "\u5e02\u6c11\u5354\u8cdb\uff1a\u58a8\u7530\u533a\u5074\u4e21\u56fd\u89aa\u6c34\u30c6\u30e9\u30b9 1\u53e36000\u5186\uff081\u53e3\u30671\u540d\u62db\u5f85\u30011850\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u30011550\u53e3\u7a0b\u5ea6\uff09\u3001\u53f0\u6771\u30ea\u30d0\u30fc\u30b5\u30a4\u30c9\u30b9\u30dd\u30fc\u30c4\u30bb\u30f3\u30bf\u30fc\u5c11\u5e74\u91ce\u7403\u58341\u53e37500\u5186\uff081\u53e3\u30675\u540d\u4ee5\u5185\u3092\u62db\u5f85\u3001500\u53e3\u7a0b\u5ea6\uff09\u307b\u304b", "time_end": "20:30", "location": "\u5c0f\u96e8\u6c7a\u884c(\u8352\u5929\u6642\u306f\u4e2d\u6b62)", "date_raw": "2016\u5e747\u670830\u65e5\uff08\u571f\uff09 19:05\uff5e20:30", "date": "2016/7/30", "homepage": "http://sumidagawa-hanabi.com/"}]'

export default {

  state: {
    markers: []
  },

  init () {
    var list = JSON.parse(placesJson)
    this.state.markers = map(list, function (o) {
      return {
        position: {
          lat: parseFloat(o.latlng[0]),
          lng: parseFloat(o.latlng[1])
        },
        // icon: {
        //   url: '/static/circle.svg'
        // },
        label: {
          text: o.date,
          color: 'white'
        },
        ifw: false,
        ifw2text: o.date,
        info: {
          date: o.date,
          time_start: o.time_start,
          time_end: o.time_end,
          location: o.location
        }
      }
    })
  }
}
