<script>
  import { Router, Route, Link } from "svelte-navigator";
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";

  import Header from "./app/components/Header.svelte";
  import Footer from "./app/components/Footer.svelte";
  import ContactInfo from "./app/pages/ContactInfo.svelte";
  import PersonalInfo from "./app/pages/PersonalInfo.svelte";
  import Education from "./app/pages/Education.svelte";
  import IdeTool from "./app/pages/IdeTool.svelte";
  import ItTerm from "./app/pages/ItTerm.svelte";
  import PrgLangFw from "./app/pages/PrgLangFw.svelte";
  import WorkExp from "./app/pages/WorkExp.svelte";
</script>

<div class="main-container mt-4 mb-4">
  <Header />

  <Tabs>
    <TabList>
      <Tab>About Me</Tab>
      <Tab>Programming Languages & Frameworks</Tab>
      <Tab>IDEs & Tools</Tab>
      <Tab>Education</Tab>
      <Tab>IT Terms</Tab>
      <Tab>Work Experiences</Tab>
    </TabList>

    <TabPanel>
      <PersonalInfo />
      <ContactInfo />
    </TabPanel>

    <TabPanel>
      <PrgLangFw />
    </TabPanel>

    <TabPanel>
      <IdeTool />
    </TabPanel>

    <TabPanel>
      <Education />
    </TabPanel>

    <TabPanel>
      <ItTerm />
    </TabPanel>

    <TabPanel>
      <WorkExp />
    </TabPanel>
  </Tabs>

  <Footer />
</div>

<style>
  .nav {
    background-color: white;
    justify-content: center;
    padding: 8px;
  }
  .nav__el-wrapper {
    background-color: transparent;
    padding-right: 4px;
    padding-left: 4px;
  }
  .nav__el {
    background-color: transparent;
    padding: 8px;
  }
  .nav__decorator-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 2px solid black;
  }
</style>
