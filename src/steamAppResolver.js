import axios from "axios";

const getSteamApp = async (id) => {
  const response = await axios.get(
    "https://store.steampowered.com/api/appdetails",
    {
      params: {
        appids: id,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = response.data[id].data;

  return {
    id: data.steam_appid,
    name: data.name,
    isFree: data.is_free,
  };
};

exports.getSteamApp = getSteamApp;
