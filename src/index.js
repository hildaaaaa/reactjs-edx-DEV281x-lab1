import React from 'react';
import ReactDOM from 'react-dom';

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

function OptionsDiv(props) {
	return (
		<section>
	      <h2>{props.ttl}</h2>
	      <div>
	        <p>{props.desc1}<input type="checkbox" id="coding" name="interest" value="coding" checked/></p>
	      </div>
	      <div>
	        <p>{props.desc2}
	        <select>
	            <option value="All">All</option>
	            <option value="Cars">Cars</option>
	            <option value="Trucks">Trucks</option>
	            <option value="Convertibles">Convertibles</option>
	        </select>
	        </p>
	      </div>
	    </section>
    )
}

function TitleDiv(props) {
	return (
		<div>
			<h2>{props.ttl}</h2>
			<p>{props.desc}</p>
		</div>
		)
}

function TransApp(props) {
	return (
		<div>
			<TitleDiv ttl="Welcome to React Transportation" desc="The best place to buy vehicles online"/>
			<OptionsDiv ttl="Choose Options" desc1="New Only" desc2="Select Type"/>
  			<TransportationsList />,
		</div>
		)
}
ReactDOM.render(
	<TransApp/>,
  	document.getElementById("root"),
);

