import React from 'react';
import './App.css';
import {Table} from 'react-bootstrap';
import InputText from './Components/Input';
import Date from './Components/Date';
import Image from './Components/Image';
import Config from './Data/GoalsData';
import ToolTip from './Components/ToolTipSeletor';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      coloumns : [],
      rows : [],
      colData : Config,
      status : ["Working on It","Pending","Stuck","Waiting for Review","Done"],
      priority : ["Low","Urgent","Medium","High"],
      statusFlag : true,
      tagFlag : true
    }
  }

  componentDidMount = () => {
    let columns = this.state.colData.filter((col)=>col.display)
    this.setState({
      coloumns : columns
    })
  }

  handleChange = (idx,type) => e => {
    console.log(e.target,idx,type,"yo")
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [type]: value
    };
    this.setState({
      rows
    },()=>{console.log(this.state.rows)});
  };
  handleAddRow = () => {
    let row = []
   this.state.coloumns.forEach((obj)=>{
    let item = {}
    if(obj.col==="owner"){
    item[obj.col] = true
    }
    else{
      item[obj.col] = ""
    }
    item.display = obj.display
    item.value = obj.col
    row.push(item)
   })
    this.setState({
      rows: [...this.state.rows,row]
    },()=>{console.log(this.state.rows)});
  };
  handleAddCol = (colValue) => {
    colValue === "status" ? this.setState({statusFlag : !this.state.statusFlag}) : this.setState({tagFlag : !this.state.tagFlag})
    let columns = this.state.colData,obj = {},flag, rowArray = []
    columns.forEach((column,index)=>{
      if(column.col===colValue){
        column.display = !column.display
        flag = column.display
        obj = column
      }
    });
    let cols = this.state.coloumns
    let rows = this.state.rows
    if(flag){
      cols.push(obj)
      if(rows){
        rows.forEach((row)=> {
          let item = {}
          if(obj.col==="owner"){
          item[obj.col] = true
          }
          else{
            item[obj.col] = ""
          }
          item.display = obj.display
          item.value = obj.col
          row.push(item)
        })
      }
      this.setState({
        rows 
      })
    }
    else{
      cols = cols.filter((item)=> obj.col !== item.col)
      rows.forEach((row)=> {
       row = row.filter((item)=> item.value !== obj.col)
       rowArray.push(row)
      })
      this.setState({
        rows : rowArray
      })
    }
    this.setState({
      colData : columns,
      coloumns : cols,
    })
  };
  createCells = (data,rowIndex) => {
   return data.map((cell,idx) => {
      if(cell.display){
        switch (cell.value){
        case "goal":
          return( <InputText placeHolder={"+Add Task"} classIs={cell.value} defaultValue={""}/> )
          
        case "number":
          return( <InputText type="number" placeHolder={"+Add number"} classIs={cell.value} defaultValue={""}/> )
          
        case "tags":
          return( <InputText placeHolder={"#"} classIs={cell.value} defaultValue={""}/> )
          
        case "status":
         return (<ToolTip classIs={cell.value} list={this.state.status}/>)
        
        case "priority":
         return (<ToolTip classIs={cell.value} list={this.state.priority}/>)
        
        case "dueDate":
         return (<Date classIs={cell.value}/>)
        
        case "owner":
         return (<Image classIs={cell.value}/>)
        
        default :
          return(
            <td className={cell.value+"Cell"}>
              {cell.value + rowIndex + " " +idx}
            </td> )
            break
        }
        
      }
    })
  }
  createRows = data => {
    return data.map((row,idx) => {
     return (<tr className="bodyRow">
     {this.createCells(row,idx)}
      </tr>)
    })
  }
  createHeader = (data) => {
    return data.map((obj,index)=>{
      if(obj.display){
      return ( <InputText classIs={obj.col+" headerRowInput"} defaultValue={obj.col.charAt(0).toUpperCase() + obj.col.slice(1)}/>)
      }
    });
   
  }
  render() {
    
    let heading = this.createHeader(this.state.coloumns)
    let rows = this.createRows(this.state.rows)
    return (
      <div>
        <div className="App">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <Table responsive size="sm" bordered 
                className="table table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr className="headerRow" >
                   {heading}
                  </tr>
                </thead>
                <tbody >
                 {rows}
                </tbody>
              </Table>
              <button
                onClick={this.handleAddRow}
                className="btn btn-default pull-left"
              >
                Add Row
              </button>
              <button
                onClick={this.handleAddCol.bind(this,"status")}
                className="pull-right btn btn-default"
              >
                {this.state.statusFlag?"Add": "Delete"} Status
              </button>
              <button
                onClick={this.handleAddCol.bind(this,"tags")}
                className="pull-right btn btn-default"
              >
                {this.state.tagFlag?"Add": "Delete"} Tag
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
