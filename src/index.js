import React from 'react';
import ReactDOM from 'react-dom';

function TitleDiv(props) {
	return (
		<h2>{props.welcome}</h2>
		)
}

function OptionsDiv(props) {
	return (
		<div>
			<h2></h2>
		</div>
		)
}

function RowData(props) {
  return (
    <tr>
      <td>{props.rowData[0]}</td>
      <td>{props.rowData[1]}</td>
      <td>${props.rowData[2]}</td>
      <td>
        <button>Buy Now</button>
      </td>
    </tr>
  )
}

function RowHeader(props) {
  return (
    <tr>
      <th>Year</th>
      <th>Model</th>
      <th>Price</th>
      <th>Buy</th>
    </tr>
  );
}

function YearRowTable(props) {
  return (
    <ul>
      <table>
          <RowHeader />
          <RowData rowData={props.yrData}/>
      </table>
    </ul>
  );
}

function TransportTable(props) {
  return (
    <div>
      	<h2>{props.title}</h2>
      	{props.tableData.map((obj, i) => <YearRowTable yrData={obj}/>)}
    </div>
  );
}

function TransportationsList(props) {
  const carTable = [
    [ "2013","A","32000" ],
    [ "2011","B","4400" ],
    [ "2016","B","15500" ]
  ];
  const truckTable = [
    [ "2014","D","18000"],
    [ "2013","E","5200"]
  ];
  const conTable = [
    [ "2009","F","2000"],
    [ "2010","G","6000"],
    [ "2012","H","12500"],
    [ "2017","M","50000"]
  ];

  return (
  	<div>
  		<TransportTable title="Cars" tableData={carTable}/>
    	<TransportTable title="Trucks" tableData={truckTable}/>
    	<TransportTable title="Convertibles" tableData={conTable}/>
  	</div>
  	);
}

ReactDOM.render(
  <TransportationsList />,
  document.getElementById("tbl"),
);

