import React, { Component, Fragment } from 'react';
import '../App.css'

const filterContent = [{
	label: "Buyer Name"
},
{
	label: "Seller Name"
},
{
	label: "Product Name"
},
{
	label: "Quote Number"
},
{
	label: "Include Words"
},
{
	label: "Enquiry State",
	select: true
},
{
	label: "Enquiries Created Between",
	range: true
},
{
	label: "Project Tags",
	select: true
},
{
	label: "Display Messages",
	select: true,
	placeholder: 'All'
},
]

class Filter extends Component {
	render() {
		return (
			<div className="filterWrapper">
				<form>
					{filterContent.map(item => <div className="formItem" >
						<div className="col-sm-4 textItem">{item.label}</div>
						{item.range ?
							<Fragment>
								<div className="col-sm-4" ><input type="text" placeholder="Start Date" class="form-control inputField" />
									<span className="glyphicon glyphicon-calendar form-control-feedback" ></span></div>
								<div className="col-sm-4" ><input type="text" placeholder="End Date" class="form-control inputField" />
									<span className="glyphicon glyphicon-calendar form-control-feedback" ></span></div>
							</Fragment>
							: <div className="col-sm-8" ><input type="text" class="form-control inputField" placeholder={item.placeholder} />
								{item.select &&
									<Fragment>
										<span className="glyphicon glyphicon-triangle-bottom form-control-feedback" style={{ marginTop: '10px' }}></span>
										<span className="glyphicon glyphicon-triangle-top form-control-feedback" ></span>
									</Fragment>}
							</div>}
					</div>
					)}
					<button type="submit" class="btn btn-warning btn-sm buttonItem">SEARCH</button>
				</form>
			</div >
		);
	}
}

export default Filter;