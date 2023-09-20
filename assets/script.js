const apiKey = "RGAPI-e57c88a4-47b1-4cd1-a19c-c822a6db6554";
const summonerName = ""; // Pull from username input

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const usernameInput = document.getElementById('username');
  const summonerName = usernameInput.value;



  //Fetch the encryptedSummonerId
  const summonerFetchURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`;

  fetch(summonerFetchURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const encryptedSummonerId = data.id; // Extract encryptedSummonerId

      //Fetch rank and tier using the encryptedSummonerId
      const rankedFetchURL = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${apiKey}`;

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
      } else {
        // If player has no rank
        console.log("Summoner has no ranked data.");
        rankTierEl.textContent = "Summoner has no ranked data.";
      }
    })
    .catch(function (error) {
      // If returning error
      console.log("Error:", error);
    });
})