<script>
  const contactInfo = [
    {
      label: "facebook.com/quanghuy6698",
      link: "http://www.facebook.com/quanghuy6698",
      iconUrl: "/assets/vendors/font-awesome-icons/facebook.svg",
    },
    {
      label: "quanghuy6698@gmail.com",
      link: "mailto:quanghuy6698@gmail.com?subject=I want to hire you",
      iconUrl: "/assets/vendors/font-awesome-icons/email.svg",
    },
    {
      label: "live:quanghuy6698",
      link: "skype:live:quanghuy6698?chat",
      iconUrl: "/assets/vendors/font-awesome-icons/skype.svg",
    },
    {
      label: "github.com/quanghuy6698",
      link: "https://github.com/quanghuy6698",
      iconUrl: "/assets/vendors/font-awesome-icons/github.svg",
    },
    {
      label: "linkedin.com/in/quanghuy6698",
      link: "https://www.linkedin.com/in/quanghuy6698",
      iconUrl: "/assets/vendors/font-awesome-icons/linkedin.svg",
    },
    {
      label: "medium.com/@quanghuy6698",
      link: "https://medium.com/@quanghuy6698",
      iconUrl: "/assets/vendors/font-awesome-icons/medium.svg",
    },
    {
      label: "quanghuy6698",
      link: "https://play.google.com/store/apps/dev?id=6808718445926046458",
      iconUrl: "/assets/vendors/font-awesome-icons/google-play.svg",
    },
  ];
</script>

<!--Contact info-->
<div class="bg-ghostwhite p-4">
  <table class="table table-striped table-borderless project-table">
    <tbody>
      {#each contactInfo as contact}
        <tr>
          <td>
            <p class="contact">
              <a href={contact.link} target="_blank" class="contact-link">
                <img alt="svelte-img" class="contact-icon" src={contact.iconUrl} />
              </a>
              <span>&nbsp;&nbsp;</span>
              <span>{contact.label}</span>
            </p>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
</style>
