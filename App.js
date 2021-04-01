var axios = require('axios');
module.exports = async url => {
var {episode,from,to,at,is_adult,title_english,title}= (await axios.get('https://trace.moe/api/search?url='+url)).data.docs[0]
return {title_english,title,episode,from,to,at,is_adult,}
}