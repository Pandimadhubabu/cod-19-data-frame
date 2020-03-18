const axios = require('axios');
const getBingData = async () =>
{
    const result = await axios.get('https://www.bing.com/covid/data');
    
    return result.data;
}

module.exports = getBingData;