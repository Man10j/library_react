import React from 'react';
import axios from 'axios';
import Searchresult from './Searchresult';

class Home extends React.Component{
		state={
			entry:"",
			searchkey: "srchbykey",
			result:[]
		}
		handlesubmit = async (e) =>{
			e.preventDefault();
			if(this.state.entry){
				let searchentry = this.state.searchkey === "srchbykey" ? this.state.entry : "+isbn:"+this.state.entry;
				const response=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchentry}`); 
				let srch_res = response.data.totalItems ? response.data.items : ""; 
				this.setState({
					...this.state,
					result : srch_res
				})
				
			}
			else{
				this.setState({
					...this.state,
					result : ""
				})
			}	
		}

		handlesearchinput = (e) => {
			this.setState({
				...this.state,
				entry: e.target.value
			})
		}
		handlesearchchoice = (e) =>{
			this.setState({
				...this.state,
				searchkey :  e.target.id
			})
		}
	render(){
	
		return(
			<div>
				<form onSubmit={this.handlesubmit}>
					<input name="searchinput" placeholder="search input here ..." onChange={this.handlesearchinput}/>
					<button type="submit">Search</button>
					<div>
						<input id="srchbykey" type="radio" checked={this.state.searchkey === "srchbykey"} name="search_key" onChange={this.handlesearchchoice}/>
						<label htmlFor="srchbykey">search by keywords</label>
						<input id="srchbyisbn" type="radio" checked={this.state.searchkey === "srchbyisbn"} onChange={this.handlesearchchoice} name="search_key"/>
						<label htmlFor="srchbyisbn">search by ISBN</label>
					</div>
				</form>
				{this.state.result ? <Searchresult result = {this.state.result}/> : <div>search not found</div>}
			</div>
		)
	}
}

export default Home;