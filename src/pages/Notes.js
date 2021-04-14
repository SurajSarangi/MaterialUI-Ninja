import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

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

	const handleDelete = async(id) => {
		await fetch(`http://localhost:3002/notes/${id}`, {
			method: 'DELETE'
		});

		const res = notes.filter(element => element.id !== id);
		setNotes(res);
	};

	const breakpoints = {
		default : 3,
		1100 : 2,
		700 : 1,
	}

	return (
		<Container>
			<Masonry
				breakpointCols={breakpoints}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{notes.map(element => (
					<div key={element.id} >
						<NoteCard element={element} handleDelete={handleDelete} />
					</div>
				))}
			</Masonry>
		</Container>
	)
}
