import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 100
    }
};

export class FeedItem extends React.Component {
    render() {
        return (
            <div>
            <Card style={styles.card}>
                <CardMedia
                    style={styles.cover}
                    image={this.props.postData.thumbnail}
                />
                <CardContent style={styles.content}>
                    <a href={this.props.postData.url} target='_blank'>
                        {/*<img src={this.props.postData.thumbnail}/>*/}
                        <Typography>
                            {this.props.postData.title}
                        </Typography>
                    </a>
                </CardContent>
            </Card>
            </div>
        );
    }
}