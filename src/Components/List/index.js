import React, { Component } from 'react';
//import { useGet } from "react-pouchdb";

// import { Container } from './styles';

// const doc = useGet(
//     {id: "restaurant"}
// );

export default class List extends React.Component {

  componentDidMount() {
    console.log(this.props.clientes);
  }

  renderClientes() {
      //const clients = Object.values(this.props.clients);

      const self = this.props;
      console.log(this.props.clientes);
      console.log(Object.keys(this.props.clientes));
      var vals = Object.keys(this.props.clientes).map(function(key) {
        return <div ><h2>{self.clientes[key].name}</h2></div>;
      });

      return vals;

      //return clients.map((n) => <div key={`note_${n._id}`} ><h2>{n.nome}</h2></div>);
  }

  render() {
    
    return (
      <div className="col s6">
        <div className="card">
            <div className="card-content">
              {this.renderClientes()}
            </div>
        </div>
     </div>
    );
  }
}
