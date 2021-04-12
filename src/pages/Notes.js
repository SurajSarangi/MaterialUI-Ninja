import { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import NoteCard from "../components/NoteCard";

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

	return (
		<Container>
			<Grid container spacing={3}>
				{notes.map(element => (
					<Grid item key={element.id} xs={12} sm={6} md={4} lg={3}>
						<NoteCard element={element} handleDelete={handleDelete} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
