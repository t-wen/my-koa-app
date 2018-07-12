import App from './'
import Axios from 'axios'
new Vue({
  el: '#app',
  render: h => h(App),
  mounted(){
    Axios({
      method: 'get',
      url: 'http://localhost:3000',
    }).then((response) => {
    console.log(response);
    })
  }

