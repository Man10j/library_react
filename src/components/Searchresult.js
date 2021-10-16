import React from 'react';
import './Searchresult.css'
const Searchresult = (props) =>{
	console.log(props)
	const booklist = props.result.map((book) =>{
		let get_index = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers.findIndex(item => item.type === "ISBN_13") : '-1';

		let isbnval = get_index >=0 ? book.volumeInfo.industryIdentifiers[get_index].identifier : '';
		let imgsrc = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
		
		return(
			<div key={book.id} className="book_cont">
				<img src={imgsrc} alt={book.volumeInfo.title}/>
			<div>{book.volumeInfo.title}</div>
			{isbnval ? 'ISBN Value:'+isbnval : 'ID:'+book.id}
		
			</div>
		)
	})
	return(
		<div className="book_card">{booklist}</div>
	)
}

export default Searchresult;