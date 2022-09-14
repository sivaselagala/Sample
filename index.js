var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('changeLogZip', fs.createReadStream('liquibase.zip'));

tenant = process.env.TENANT
username = process.env.USERNAME
pwd = process.env.PASSWORD

var config = {
  method: 'post',
  url: 'https://tenant.callidusondemand.com/TrueComp-SaaS/services/rest/touchlessdeployment/update?changeMasterFile=TouchLess.xml',
  auth: {
  username: username,
  password: pwd,
  },
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
