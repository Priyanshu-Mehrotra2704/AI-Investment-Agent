const axios = require("axios");
require("dotenv").config();

async function getCompanyNews(company){
    try{
        const response = await axios.get("https://gnews.io/api/v4/search",
            { params : {
            q: company,
            lang: "en",
            max: 5,
            token: process.env.GNEWS_API_KEY
                }  
            }
        );
        return response.data.articles.map(article => ({
            title: article.title,
            description: article.description,
            source: article.source.name,
            url: article.url,
            publishedAt: article.publishedAt
        })); 
        
    }catch (error){
        console.error("Error fetching news:", error);
        return [];
    }
}
module.exports = getCompanyNews;