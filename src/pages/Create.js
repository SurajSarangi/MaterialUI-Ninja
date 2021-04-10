import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';

export default function Create() {
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
			
			<Button 
				onClick={() => console.log('Clicked')}
				variant="contained"
				color="secondary"
				type="submit"
				endIcon={<SendIcon />}
			>
				Create
			</Button>
		</Container>
	)
}
