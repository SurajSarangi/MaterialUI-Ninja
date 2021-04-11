import { useEffect, useState } from "react";

export default function Notes() {

	const [notes, setNotes] = useState([]);

	const getfetch = async(url) => {
		const res = await fetch(url);
		const val = await res.json();
		return val;
	};

	useEffect(() => {
		getfetch('http://localhost:3002/notes')
			.then(result => setNotes(result))
			.catch(err => console.log(err));
	}, []);

	return (
		<div>
			{notes.map(element => (
				<p key={element.id}>{ element.title }</p>
			))}
			
		</div>
	)
}
