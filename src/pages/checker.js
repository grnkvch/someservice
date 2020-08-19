import React from "react"
import Helmet from "react-helmet"

export default function checker() {
  if(!(typeof window === "undefined" || !window.document)){
    console.log('cookie', document.cookie)
    alert(document.cookie)
    if(document.cookie.includes('epamClubAppId')){
        let id = document.cookie.split('=')[1]
        alert('EPAM club user id:' + id)
      } else {
        alert('NOT EPAM CLUB USER')
      }
  }
    
  return <> 
    <Helmet title='SOME SERVICE'>
    </Helmet>
    <div>
      <button onClick={()=>{
        document.cookie =`cook=SOME_COOKIE; SameSite=None; Secure; path=/checker; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
      }}>ADD cookie</button>
      <button onClick={()=>{
        alert(document.cookie)
      }}>CHECK cookie</button>
    </div>
  </>
}
