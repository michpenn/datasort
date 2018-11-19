import React, { Component } from "react";
import "./App.css";
import ReactFileReader from "react-file-reader";
import Papa from "papaparse";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridOptions: {
        rowSelection: "single",
        enableFilter: true,
        columnDefs: [
          {
            headerName: "Name",
            field: "name",
            width: 200,
            suppressFilter: true
          },
          {
            headerName: "House",
            field: "house",
            width: 200,
            suppressFilter: true
          },
          {
            headerName: "Is Alive",
            field: "isAlive",
            width: 200,
            filter: "agTextColumnFilter",
            filterParams: {
              apply: true,
              applyButton: true,
              clearButton: true
            }
          },
          {
            headerName: "Popularity %",
            field: "popularity",
            width: 200,
            suppressFilter: true,
            unSortIcon: true
          }
        ]
      },
      rowData: [],
      selected: {}
    };
  }

  handleFiles = files => {
    console.log(files[0]);
    Papa.parse(files[0], {
      complete: (results, file) => {
        console.log(results);
        this.setState({ rowData: results.data });
      },
      header: true,
      skipEmptyLines: true,
      transform: (value, col) => {
        if (value === "") {
          switch (col) {
            case "house":
              return "In this world only winter is certain";
            case "title":
              return "Black and white and grey, all the shades of truth";
            case "dateOfBirth":
              return "Some secrets are safer kept hidden";
            case "culture":
              return "I've made many mistakes in my life, but that wasn't one of them.";
            default:
              return "I will have no part in it.";
          }
        } else if (col === "isMale") {
          if (value === "0") {
            return "Female";
          }
          return "male";
        } else if (col === "isAlive") {
          if (value === "0") {
            return "False";
          }
          return "True";
        } else if (col === "popularity") {
          return parseFloat(value) * 100;
        }
        return value;
      }
    });
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columniApi;
  };

  onSelectionChanged = () => {
    const selected = this.gridApi.getSelectedRows();
    this.setState({ selected: selected[0] });
  };

  render() {
    const selected = this.state.selected.title ? (
      <ul style={{ textAlign: "left" }}>
        <li>Title: {this.state.selected.title}</li>
        <li>Gender: {this.state.selected.isMale}</li>
        <li>Culture: {this.state.selected.culture}</li>
        <li>DOB: {this.state.selected.dateOfBirth}</li>
      </ul>
    ) : null;
    return (
      <div className="App">
        <div style={{ width: "100%", height: "100vh" }}>
          <div>
            <ReactFileReader
              fileTypes={[".csv"]}
              handleFiles={this.handleFiles}
            >
              <button className="btn">Upload</button>
            </ReactFileReader>
          </div>
          <div style={{ marginTop: "15px", height: "100%", display: "flex" }}>
            <div
              id="myGrid"
              style={{
                boxSizing: "border-box",
                width: "70%",
                height: "100%"
              }}
              className="ag-theme-balham"
            >
              <AgGridReact
                onGridReady={this.onGridReady}
                gridOptions={this.state.gridOptions}
                rowData={this.state.rowData}
                rowSelection={this.state.rowSelection}
                onSelectionChanged={this.onSelectionChanged.bind(this)}
                enableSorting={true}
              />
            </div>
            <div
              style={{
                height: "100%"
              }}
            >
              <div className="ag-theme-balham">{selected}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
