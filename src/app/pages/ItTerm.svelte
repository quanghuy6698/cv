<script>
  import * as data from "../../data/it-term.json";
  const itTerms = data.itTerms;

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
</script>

<!--Terms-->
<div class="bg-cornsilk p-4">
  <p class="h4 text-center">IT terms familiar to me</p>
  <p class="it-terms text-center">
    {#each itTerms as term}
      <span class="{term.textSize} p-2 cursor-pointer" on:click={() => searchGoogle(term.onClick)}>{term.label}</span>
    {/each}
  </p>
</div>
