// URL PARAMETERS
const twitchUsername = new URLSearchParams(window.location.search).get("username") || ""

// FUNCTIONS
const updateMetrics = async () => {
    const metrics = [
        { id: "subCountLabel", url: "https://decapi.me/twitch/subcount" },
        { id: "followerCountLabel", url: "https://decapi.me/twitch/followcount" },
        { id: "viewCountLabel", url: "https://decapi.me/twitch/viewercount" }
    ]

    for (const { id, url } of metrics) {
        const response = await fetch(`${url}/${twitchUsername}`)
        const text = await response.text()
        document.getElementById(id).innerHTML = isNaN(Number(text)) || text.includes("decapi.me") ? "-" : text
    }
    setTimeout(updateMetrics, 15000)
}

// INIT
document.addEventListener("DOMContentLoaded", updateMetrics)