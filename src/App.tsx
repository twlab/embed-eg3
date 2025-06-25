import { GenomeHub } from "wuepgg";
import GenomeViewerTest from "./testComp";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "wuepgg/style.css";
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{fontSize: "36px", fontWeight: "bold"}}>Browser embedding example</h1>
      <Tabs>
        <TabList>
          <Tab>Track Components</Tab>
          <Tab>Entire Browser</Tab>
        </TabList>
        <TabPanel>
          <GenomeViewerTest />
        </TabPanel>
        <TabPanel>
          <GenomeHub />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
