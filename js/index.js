const googleSearchUrl = "https://www.google.com/search?q=";

/**
 * redirect to Google search
 * @param searchTxt refer to search keywords
 */
function searchGoogle(searchTxt) {
  let redirectUrl = googleSearchUrl + searchTxt;
  redirect(redirectUrl);
}

/**
 * redirect to url
 * @param url refer to url to redirect
 */
function redirect(url) {
  window.open(url, "_blank");
}
