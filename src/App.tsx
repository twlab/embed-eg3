import GenomeViewerTest from "./testComp";
import RootLayoutTest from "./RootLayoutTest";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import RootLayoutTest2 from "./RootLayoutTest2";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
        Browser embedding example
      </h1>
      <Tabs>
        <TabList>
          <Tab>Entire Browser</Tab>
          <Tab>Entire Browser2</Tab>
          <Tab>Track Components</Tab>
        </TabList>
        <TabPanel>
          <RootLayoutTest />
        </TabPanel>
        <TabPanel>
          <RootLayoutTest2 />
        </TabPanel>
        <TabPanel>
          <GenomeViewerTest />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
