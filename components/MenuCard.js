import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const MenuCard = ({ onClick, menu }) => (
  <Card onClick={onClick}>
    <CardMedia overlay={<CardTitle title={ menu.name } subtitle={ menu.id } />}>
      <img src={ menu.img }/>
    </CardMedia>
  </Card>
)

export default MenuCard
