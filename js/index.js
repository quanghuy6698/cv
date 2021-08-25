
const googleSearchUrl = "https://www.google.com/search?q=";

/**
 * redirect to Google search
 * @param searchTxt refer to search keywords
 */
function searchGoogle(searchTxt) {
    var redirectUrl = googleSearchUrl + searchTxt;
    window.open(redirectUrl, "_blank");
}