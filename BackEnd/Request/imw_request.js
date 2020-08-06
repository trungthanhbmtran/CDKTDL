import fetch from 'isomorphic-unfetch';

module.exports = {
    Send_Post_RestAPI: function(query,url){
        return new Promise((resove, reject)=>{
            const res = fetch(url,{
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                  'Accept': 'application/json',
                },
                body: JSON.stringify({operationName:null, variables:{}, query: query})
              });
            
            fetch('http://theapi/api/auth', {
              method: 'POST',
              headers: {
                  'Content-type': 'application/json',
              },
               body: JSON.stringify({
                  username: 'myUserName',
                  password: 'myPassword',
                  Authorization: 'TheReturnedToken',
              })
          }) /*end fetch */
          .then(results => results.json())
          .then(data => this.setState({ data: data })
  
          )
            //reject('error');
            resove(res);
        });
    },
}