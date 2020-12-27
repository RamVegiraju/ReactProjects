import React, { Component } from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.css'



//biggest thing to know about props is children
export const CardList = props => {
    //console.log(props);
    return <div className = 'card-list'>
        {
          props.monsters.map(monster => (
          <Card key = {monster.id} monster = {monster}/>))
        }
    </div>;
}
