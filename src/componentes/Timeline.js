import React, { Component } from 'react';

import Foto from './Foto';
import PathApi from '../config/PathApi.js'


export class Timeline extends Component {

  constructor() {
    super();
    this.state = { fotos: [] };
  }
  componentDidMount() {
    fetch(PathApi.path + 'fotos/alots')
      .then(response => response.json())
      .then(fotos => {
        this.setState({ fotos: fotos });
        console.log('fotos ', fotos);
      })
  }

  render() {
    return (
      <div className="fotos container">
        {
          this.state.fotos.map(f => <Foto foto={f} key={f.id} />)
        }
      </div>
    );
  }
}