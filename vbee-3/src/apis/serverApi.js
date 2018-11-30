import {AJAXURL} from  '../commons/URL'

export default {
//把fetch封装成函数
  classdata(cb){
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }

}
