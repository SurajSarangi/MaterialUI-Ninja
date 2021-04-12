import { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";

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
		<Container>
			<Grid container>
				{notes.map(element => (
					<Grid item key={element.id} xs={12} sm={6} md={4} lg={3}>
						<Paper>
							<p>{ element.title }</p>
							<p>{ element.note }</p>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
