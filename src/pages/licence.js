import React from "react"
import Helmet from "react-helmet"

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
  }

export default function licence() {
    
  return <> 
  <Helmet
      title='asdasd1213'
    >
    </Helmet>
  <div>
      <h1>SOME LICENCE AGREEMENT</h1>
      <a onClick={()=>{
          document.cookie =`epamClubAppId=${getQueryVariable('id')}; SameSite=None; Secure; path=/checker; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;
      }} href='https://epamclub.page.link/verification'>I AGREE</a>
  </div>
  </>
}
