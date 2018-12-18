import React from 'react';
import Chip from '@material-ui/core/Chip';
    import {provideIcon} from './icon.service';

const styles = {
  main: {
      margin: 5,
      zoom: 0.85
  }
};

export class InfoChip extends React.Component {
    render(){
        return (
            <Chip
                icon={provideIcon(this.props.icon)}
                color={this.props.color}
                clickable={this.props.clickable}
                label={this.props.children}
                style={styles.main}
            />
        );
    }
}