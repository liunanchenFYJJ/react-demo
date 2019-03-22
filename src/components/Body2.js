import React, { Component } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});

export default class Body2 extends Component {
    render() {
        return (
            <div>
                <List className={styles.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="巅峰榜 流行指数"
                            secondary={
                                <React.Fragment>
                                <Typography component="span" className={styles.inline} color="textPrimary">
                                    {1} 有一种悲伤 - A-Lin
                                </Typography>
                                <Typography component="span" className={styles.inline} color="textPrimary">
                                    {2} 绿色 - 陈雪凝
                                </Typography>
                                <Typography component="span" className={styles.inline} color="textPrimary">
                                    {3} 只是太爱你 - 张敬轩
                                </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </div>
        )
    }
}