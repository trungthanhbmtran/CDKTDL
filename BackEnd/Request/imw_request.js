import fetch from 'isomorphic-unfetch';

module.exports = {
    Send_Post_RestAPI: function(query){
        return new Promise((resove, reject)=>{
            const res = fetch('http://localhost:3001/admin',{
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                  'Accept': 'application/json',
                },
                body: JSON.stringify({query: query})
              });
            //reject('error');
            resove(res);
        });
    },
}