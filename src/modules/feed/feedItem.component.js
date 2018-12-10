import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {FeedItemMetadata} from './feedItemMetadata.component';
import moment from "moment/moment";

const styles = {
    card: {
        width: '100%',
        position: 'relative'
    },
    img: {
        width: 150,
        height: 100,
        float: 'left',
        marginRight: 10,
    },
    datePosted: {
        opacity: 0.8
    },
    title: {
        textDecoration: 'none'
    },
    content: {
        marginLeft: 150
    }
};

export class FeedItem extends React.Component {
    render() {
        return (
            <Card style={styles.card}>
                <a href={this.props.postData.url} target='_blank'>
                    <CardMedia
                        style={styles.img}
                        image={this.props.postData.thumbnail}
                    />
                </a>
                <CardContent style={styles.content}>
                    <a href={this.props.postData.url} target='_blank' style={styles.title}>
                        <Typography>
                            {this.props.postData.title}
                        </Typography>
                    </a>
                    <Typography style={styles.datePosted}>{moment.utc(this.props.postData.dateUtc).fromNow()}</Typography>
                </CardContent>
                <FeedItemMetadata postData={this.props.postData}/>
            </Card>
        );
    }
}