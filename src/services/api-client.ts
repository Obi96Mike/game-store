import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "837cb64017e7488ea4d12ea6db57a37d",
    },

});



// Storing the API key for rawg.io in this source code and committing it to Git (approach) 
// is a temporary solution and not the recommended way to manage API keys.