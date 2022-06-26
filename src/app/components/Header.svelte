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

<!--Header-->
<div class="bg-darkcyan p-4 rounded-top">
  <div class="text-end">
    <button type="button" class="btn">
      <a href="assets/cv-pdf/cv-NguyenQuangHuy-quanghuy6698.pdf" download target="_blank">
        <img alt="svelte-img" class="contact-icon" src="/assets/vendors/font-awesome-icons/download.svg" />
      </a>
    </button>
  </div>
  <div>
    <div class="text-center">
      <img alt="svelte-img" src="assets/img/personal/avatar-2.jpg" class="center-block rounded-circle w-75 avatar" />
    </div>
    <p class="h4 text-center text-cornsilk">Nguyễn Quang Huy</p>
    <p class="h6 text-center text-cornsilk">Software Developer</p>
    <ul class="nav justify-content-center">
      {#each contactInfo as contact}
        <li class="nav-item me-2">
          <a href={contact.link} target="_blank">
            <img alt="svelte-img" class="contact-icon" src={contact.iconUrl} />
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
</style>
