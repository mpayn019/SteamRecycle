function getGameList(profileId) {
    $(document).ready(function () {

        $.get("http://localhost:3000/Steam/Gameslist/" + profileId, function (result) {
            var jsonOutput = JSON.parse(JSON.stringify(result)).response;
            var pageOutput = "";
            for (i in jsonOutput.games) {
                var game = jsonOutput.games[i];
                var imageUrl = "http://media.steampowered.com/steamcommunity/public/images/apps/" + game.appid + "/" + game.img_logo_url + ".jpg";

                if (game.img_icon_url) //identifies duplicates and betas in library by their missing image icon and filters them out
                {
                    pageOutput +=
                        "<div class='grid-item grid_container'>" +
                        "<div class='grid_media'>" +
                        "<img src='" + imageUrl + "' onerror=\"this.src='/Images/SteamLogo.png'\" class='grid_image'/>" +
                        "<h1>" + game.name + "</h1>" +
                        "</div>" +
                        "</div>";
                }
            }
            document.getElementById("grid").innerHTML = pageOutput;
        });
    });
}