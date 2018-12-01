import {AJAXURL} from  '../commons/URL'

export default {

  getData(cb){
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }

}


