import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

const NoteCard = ({ element, handleDelete }) => {
    return ( 
        <div>
            <Card elevation={1}>
                <CardHeader 
                    action = {
                        <IconButton onClick={() => handleDelete(element.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title = { element.title }
                    subheader = { element.category }
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" >
                        { element.note }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
 
export default NoteCard;