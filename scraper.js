const axios = require('axios');
const cheerio = require('cheerio');
const geolib = require('geolib');

// function fetching the html content of the page
async function fetchPageInfo(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data, 'response data here');
    return response.data;
  } catch (error) {
    console.error('Error fetching url page data from: ${url}');
    throw error;
  }
}

async function scrapeMusicVenues(lat, long) {
  // my actual URL that provides the list of music venues here
  const url = `https://developer.here.com/documentation/ios-sdk-navigate/4.14.3.0/api_reference/Classes/VenueService.html#%2Fs:7heresdk12VenueServiceC10startAsync5tokenySS_tF`;

  try {
    const html = await fetchPageInfo(url);
    const $ = cheerio.load(html);
    
    const venues = [];
    return venues;


  } catch (error) {
    console.error('Error scraping for music venues', error);
  }



}

