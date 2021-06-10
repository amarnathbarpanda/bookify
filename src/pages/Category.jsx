import React, { useState,useContext } from "react";
import "./Category.css";
import { Tabs, Tab, Paper } from "@material-ui/core";
import Card from '../components/Card';
// import books from '../data/books';
import {GlobalContext} from '../GlobalContext/StateProvider';


const Panel = (props) => {
  const { value, index, children } = props;
  
  return (
    <div hidden={value !== index}>
      <h1>{children}</h1>
    </div>
  );
};

function Category() {

  const {item} = useContext(GlobalContext);

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
        <div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'action and adventure'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
        <Panel value={index} index={1}>
        <div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'fantasy'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
        <Panel value={index} index={2}>
        <div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'self_help'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
        <Panel value={index} index={3}>
        <div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'classic'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
        <Panel value={index} index={4}>
        <div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'detective and mystery'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
        <Panel value={index} index={5}>
        <div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'horror'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
        <Panel value={index} index={6}>
        <div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'sci_fi'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
        <Panel value={index} index={7}>
        <div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'eductional'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
        <Panel value={index} index={8}>
        <div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'short_stories'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
        <Panel value={index} index={9}>
          T<div className="book__container">
            {
                item.filter((item)=>{
                  return item.category === 'suspense and thrillers'
                }).map((item)=>{
                    return(
                        <Card key={item.id} {...item}/>
                    )
                })
            }
        </div>
        </Panel>
      </div>
    </div>
  );
}

export default Category;