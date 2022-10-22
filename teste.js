const axios = require("axios")

async function getAllMaps(){
  const result = await axios.get(
    'http://localhost:9000/allmaps',
    {
      headers: {
        Accept: "applicaiton/json"
      }
    }
  );

  console.log(result.data)

}

getAllMaps();
