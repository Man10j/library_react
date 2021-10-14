import React from 'react';
import ReactDOM from 'react-dom';

const Searchresult = (props) =>{
	const booklist = props.result.map((book) =>{
		let get_index = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers.findIndex(item => item.type == "ISBN_13") : '-1';

		let isbnval = get_index >=0 ? book.volumeInfo.industryIdentifiers[get_index].identifier : '';
		let imgsrc = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
		
		return(
			<div key={book.id}>
			<div>{book.volumeInfo.title}</div>
			{isbnval ? 'ISBN Value:'+isbnval : 'ID:'+book.id}
			<img src={imgsrc}/>
			</div>
		)
	})
	return(
		<div>{booklist}</div>
	)
}

export default Searchresult;