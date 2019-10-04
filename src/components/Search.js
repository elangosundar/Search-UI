import React, { Component } from 'react';
import Filter from './Filter'
import '../App.css'

class Search extends Component {

	state = {
		filter: false
	}

	render() {
		const { filter } = this.state
		const { search } = this.props
		return (
			<div className={`${search && "searchContainer"} container`}>
				<div className="row" >
					<div className="col-sm-10" >
						<div className={`${search && "input-group-mobile"} input-group form-group has-feedback`} >
							<span className="glyphicon glyphicon-search form-control-feedback" style={{ left: 0, zIndex: 9, color: 'rgba(0,0,0,0.5)' }}></span>
							<input type="text" className="form-control" placeholder="Search Name, Product Type, Project Tag, etc." style={{ paddingLeft: '35px' }} />
							{!search && <span className="input-group-btn">
								<button type="button" class="btn btn-default" style={{ background: "rgba(0,0,0,0.05)", borderRadius: '0px' }}
									onClick={() => this.setState({ filter: !filter })}>Filter&nbsp;
								<span className="caret" style={{ borderWidth: '6px' }} />
								</button>
							</span>}
						</div>
						{filter && <Filter />}
					</div>
				</div>
			</div >
		);
	}
}

export default Search;