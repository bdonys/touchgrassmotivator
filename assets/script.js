const apiKey = "RGAPI-9840f968-c9ab-45f7-a659-4eeb0a2babcc"; // Riot API key requires a refresh every 24 hours

const API_KEY = "O27lXioiSMvH8yX0tpSkUWcHdgV1FzN5"; // Giphy API key
const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;



const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const usernameInput = document.getElementById('username');
  const summonerName = usernameInput.value; // Pull from username input
  const serverEl = document.getElementById("chooseRegion");
  const server = serverEl.value;



  //Fetch the encryptedSummonerId
  const summonerFetchURL = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`;

  fetch(summonerFetchURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const encryptedSummonerId = data.id; // Extract encryptedSummonerId

      //Fetch rank and tier using the encryptedSummonerId
      const rankedFetchURL = `https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${apiKey}`;
      console.log(`${server}`)

      return fetch(rankedFetchURL);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (rankedData) {
      const rankTierEl = document.getElementById('rankTier')

      if (rankedData.length > 0) {
        // If player has rank
        const rank = rankedData[0].rank;
        const tier = rankedData[0].tier;
        console.log(`Summoner's Rank: ${tier} ${rank}`);
        rankTierEl.textContent = `Summoner's Rank: ${tier} ${rank}`;


        fetch(`${url}&q=motivational`)
          .then(function (response) {
            return response.json();
          })
          .then(function (giphyData) {
            const giphys = giphyData.data;
            if (giphys.length > 0) {
              const randomIndex = Math.floor(Math.random() * giphys.length);
              const randomGif = giphys[randomIndex];
              const gifUrl = randomGif.images.original.url;

              const gifContainer = document.querySelector('.gifContainer');
              const imgEl = document.createElement('img');

              imgEl.setAttribute('src', gifUrl);
              gifContainer.innerHTML = '';
              gifContainer.appendChild(imgEl);
            }
          })
      } else {
        // If player has no rank
        console.log("Summoner has no ranked data.");
        rankTierEl.textContent = "Summoner has no ranked data.";

        fetch(`${url}&q=wut`)
          .then(function (response) {
            return response.json();
          })
          .then(function (giphyData) {
            const giphys = giphyData.data;
            if (giphys.length > 0) {
              const randomIndex = Math.floor(Math.random() * giphys.length);
              const randomGif = giphys[randomIndex];
              const gifUrl = randomGif.images.original.url;

              const gifContainer = document.querySelector('.gifContainer');
              const imgEl = document.createElement('img');

              imgEl.setAttribute('src', gifUrl);
              gifContainer.innerHTML = '';
              gifContainer.appendChild(imgEl);
            }
          })
      }
    })
    .catch(function (error) {
      // If returning error
      console.error(error);
    });
})