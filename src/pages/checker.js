import React from "react"
import Helmet from "react-helmet"

export default function checker() {
  if(document){
    if(document.cookie.includes('epam-club-app')){
        let id = document.cookie.split(':')[1]
        alert('EPAM club user id:' + id)
      } else {
        alert('NOT EPAM CLUB USER')
      }
  }
    
  return <> 
    <Helmet title='asdasd1213'>
    </Helmet>
  </>
}
