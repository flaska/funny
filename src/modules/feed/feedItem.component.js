import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    card: {
        width: '100%'
    },
    img: {
        width: 150,
        height: 100,
        float: 'left',
        'margin-right': 10
    },
    content: {
    },
};

export class FeedItem extends React.Component {
    render() {
        return (
            <Card style={styles.card}>
                <CardMedia
                    style={styles.img}
                    image={this.props.postData.thumbnail}
                />
                <CardContent style={styles.content}>
                    <a href={this.props.postData.url} target='_blank'>
                        <Typography>
                            {this.props.postData.title}
                        </Typography>
                    </a>
                </CardContent>
            </Card>
        );
    }
}