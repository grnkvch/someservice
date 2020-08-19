import React from "react"
import Helmet from "react-helmet"

export default function checker() {
  if(!(typeof window === "undefined" || !window.document)){
    console.log('cookie', document.cookie)
    alert(document.cookie)
    if(document.cookie.includes('epam-club-app')){
        let id = document.cookie.split(':')[1]
        alert('EPAM club user id:' + id)
      } else {
        alert('NOT EPAM CLUB USER')
      }
  }
    
  return <> 
    <Helmet title='SOME SERVICE'>
    </Helmet>
  </>
}
