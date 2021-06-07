import React, { useState } from "react";
import "./Category.css";
import { Tabs, Tab, Paper } from "@material-ui/core";
import ActionAdv from "../components/ActionAdv";
import Fantasy from "../components/FantasyComp";
import Self_HelpComp from "../components/Self_HelpComp";

const Panel = (props) => {
  const { value, index, children } = props;

  return (
    <div hidden={value !== index}>
      <h1>{children}</h1>
    </div>
  );
};

function Category() {
  const catStyle = {
    fontSize: 20,
    color: "var(--clr-primary)",
    fontWeight: "600",
  };

  const [index, setIndex] = useState(0);
  const onTabClick = (event, index) => {
    setIndex(index);
  };

  return (
    <div className="category">
      <h1>Categories</h1>
      <div className="category__tab">
        <Paper elevation={3} square>
          <Tabs
            variant="scrollable"
            scrollButtons="on"
            value={index}
            onChange={onTabClick}
            indicatorColor="primary"
          >
            <Tab style={catStyle} label="Action and Adventure" />
            <Tab style={catStyle} label="Fantasy"/>
            <Tab style={catStyle} label="Self-Help" />
            <Tab style={catStyle} label="Classics" />
            <Tab style={catStyle} label="Detective and Mystery" />
            <Tab style={catStyle} label="Horror" />
            <Tab style={catStyle} label="Science Fiction (Sci-Fi)" />
            <Tab style={catStyle} label="Eductional" />
            <Tab style={catStyle} label="Short Stories" />
            <Tab style={catStyle} label="Suspense and Thrillers" />
          </Tabs>
        </Paper>
        <Panel value={index} index={0}>
          <ActionAdv/>
        </Panel>
        <Panel value={index} index={1}>
          <Fantasy/>
        </Panel>
        <Panel value={index} index={2}>
          <Self_HelpComp/>
        </Panel>
        <Panel value={index} index={3}>
          Third Item
        </Panel>
        <Panel value={index} index={4}>
          Third Item
        </Panel>
        <Panel value={index} index={5}>
          Third Item
        </Panel>
        <Panel value={index} index={6}>
          Third Item
        </Panel>
        <Panel value={index} index={7}>
          Third Item
        </Panel>
        <Panel value={index} index={8}>
          Third Item
        </Panel>
        <Panel value={index} index={9}>
          Third Item
        </Panel>
      </div>
    </div>
  );
}

export default Category;