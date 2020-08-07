import fetch from 'isomorphic-unfetch';

module.exports = {
    Send_Post_RestAPI: function(url,data){
        return new Promise((resove, reject)=>{
            const res = fetch(url,{
                method: 'GET',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                  'Accept': 'application/json',
                },
                body: JSON.stringify({data:data})
              });
            //reject('error');
            resove(res);
        });
    },
    Send_Get_RestAPI: function(url){
      return new Promise((resove, reject)=>{
          const res = fetch(url,{
              method: 'GET',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
              }
            });
          //reject('error');
          resove(res);
      });
  },
}