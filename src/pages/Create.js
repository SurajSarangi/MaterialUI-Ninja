import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import { FormControl, FormControlLabel, FormLabel, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: 'block'
	  }
});

export default function Create() {
	const classes = useStyles();

	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');
	const [titleError, setTitleError] = useState(false);
	const [noteError, setNoteError] = useState(false);
	const [category, setCategory] = useState('valorant');

	const handleSubmit = (e) => {
		e.preventDefault()
		setTitleError(false);
		setNoteError(false);

		if(title === '') {
			setTitleError(true);
		}
		if(note === '') {
			setNoteError(true);
		}

		if(title && note){
			console.log(title, note, category);
		}
	};

	return (
		<Container>
			<Typography 
				variant="h6"
				color="textSecondary"
				component="h2"
				gutterBottom
			>
				Create a New Note
			</Typography>
			
			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					onChange={(e) => setTitle(e.target.value)}
					className={classes.field}
					label="Title"
					variant="outlined"
					fullWidth
					required
					error={titleError}
				/>
				<TextField
					onChange={(e) => setNote(e.target.value)}
					className={classes.field}
					label="Note"
					variant="outlined"
					multiline
					rows = {4}
					fullWidth
					required
					error={noteError}
				/>

				<FormControl className={classes.field}>
					<FormLabel>Category</FormLabel>
					<RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
						<FormControlLabel value="web development" control={<Radio />} label="Web Development" />
						<FormControlLabel value="machine learning" control={<Radio />} label="ML/AI" />
						<FormControlLabel value="valorant" control={<Radio />} label="Valorant" />
						<FormControlLabel value="fifa" control={<Radio />} label="Fifa 19" />
					</RadioGroup>
				</FormControl>

				<Button 
					variant="contained"
					color="secondary"
					type="submit"
					endIcon={<SendIcon />}
				>
					Create
				</Button>
			</form>

		</Container>
	)
}
