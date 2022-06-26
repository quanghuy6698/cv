<script>
  import * as data from "../../data/prg-lang-fw.json";
  const prgLangFw = data.prgLangFw;
</script>

<!--Skills-->
<div class="bg-cornsilk p-4">
  <p class="h4 text-center">Programming Languages & Frameworks</p>

  <div class="d-flex flex-row flex-wrap justify-content-center">
    {#each prgLangFw as skill}
      {#if skill.isMainSkill}
        <div class="p-2">
          <div class="p-2 border border-secondary rounded main-skill">
            <img alt="svelte-img" class="skill-icon" src={skill.iconUrl} />
          </div>
        </div>
      {:else}
        <div class="p-2">
          <div class="p-2 border border-secondary rounded ">
            <img alt="svelte-img" class="skill-icon" src={skill.iconUrl} />
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
</style>
