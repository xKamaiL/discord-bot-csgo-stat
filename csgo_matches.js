const axios = require('axios')
const Steam = require('steam')
const CSGOAPI = require('csgo')
// 8108C43F11EE4A07E2A194C3C224C56F

// http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=8108C43F11EE4A07E2A194C3C224C56F&steamid=
const SteamUser = new Steam.SteamUser(new Steam.SteamClient())

const GetMatchesByMatchIdAndSteamId = ({ match_id, steam_id }) => {}
const GetStatBySteamId = steam_id => {
  return axios
    .get(
      'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=8108C43F11EE4A07E2A194C3C224C56F&steamid=' +
        steam_id
    )
    .then(response => response.data)
}
module.exports = {
  GetMatchesByMatchIdAndSteamId,
  GetStatBySteamId
}
