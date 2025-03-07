/**
 * @description 
 * @author lihao
 * @date 2025/3/7 23:11
 */
window.addEventListener('load', function () {
    var filename = 'https://tympanus.net/codrops/adpacks/cda_sponsor.css?' + new Date().getTime();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    let cdaSpots = ['ad1'];
    let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

    let cdaLink, cdaSponsorName;

    switch (cdaSpot) {
        case "ad1":
            cdaLink = "https://reweb.so/?ref=codrops-demo";
            cdaSponsorName = "Reweb: Build your Next.js site with AI鈥攇enerate UI instantly, customize visually, and export clean code.";
            break;
        case "ad2":
            cdaLink = "https://www.wix.com/studio/pantone-color-of-the-year-2025?utm_campaign=pa_media_buying_studio_brnd_12/24_codrops^demos&experiment_id=^brand^^pantone";
            cdaSponsorName = "The Pantone Color of the Year 2025 web design assets that get you ahead of 2025鈥檚 web design trends";
            break;
        case "ad3":
            cdaLink = "https://srv.buysellads.com/ads/long/x/TFB2XTZFTTTTTTTFYB6N5TTTTTTVOHAZKATTTTTTC3UV47YTTTTTTB4DCMLFWR4ZV7PCVMZFQQIUTSZLP7IUVLBWPQFT";
            cdaSponsorName = "Join the Agent.ai Challenge: $10,000 in Prizes! Open to All. No-Code to Full-Code. Join for Free.";
            break;
        case "ad4":
            cdaLink = "https://bit.ly/codrops-diviai";
            cdaSponsorName = "Divi AI: On demand content creation, code writing & image generation.";
            break;
        default:
            cdaLink = "https://bit.ly/codrops-diviai";
            cdaSponsorName = "Divi AI: On demand content creation, code writing & image generation.";
    }

    var cda = document.createElement('div');
    cda.id = 'cdawrap';
    cda.className = 'cdawrap';
    cda.innerHTML = '<a href="' + cdaLink + '" class="cda-sponsor-link" target="_blank" rel="nofollow noopener">' + cdaSponsorName + '</a>';

    function insertCda() {
        const frameElement = document.getElementsByClassName('frame')[0];
        if (frameElement) {
            console.log("Frame element found");
            frameElement.appendChild(cda);
        } else {
            console.log("Frame element not found, retrying...");
            setTimeout(insertCda, 100);
        }
    }

    insertCda();
});