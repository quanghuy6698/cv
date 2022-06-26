<script>
  import * as data from "../../data/personal-info.json";
  const personalInfo = data.personalInfo;
</script>

<!--Personal info-->
<div class="bg-ghostwhite p-4">
  <p class="h4 text-center">About me</p>

  <table class="table table-striped table-borderless project-table">
    <tbody>
      {#each personalInfo as personal}
        <tr>
          <th>{personal.label}</th>
          <td>{personal.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
</style>
