import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Home extends React.Component{
		state={
			entry:"",
			result:[]
		}
		handlesubmit = async (e) =>{
			e.preventDefault();
			const response=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry`); 
			this.setState({
				...this.state,
				result:response.data.items
			})
			console.log(this.state)
		}

		handlesearchinput = (e) => {
			this.setState({
				...this.state,
				entry: e.target.value
			})
		}
	render(){
	
		return(
			<div>
				<form onSubmit={this.handlesubmit}>
					<input name="searchinput" placeholder="search input here ..." onChange={this.handlesearchinput}/>
					<button type="submit">Search</button>
					<div>
						<input id="srchbykey" type="radio" name="search_key"/>
						<label htmlFor="srchbykey">search by keywords</label>
						<input id="srchbyisbn" type="radio" name="search_key"/>
						<label htmlFor="srchbyisbn">search by keywords</label>
					</div>
				</form>
			</div>
		)
	}
}

export default Home;