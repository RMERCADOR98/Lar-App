import React, { Component } from "react";

class AddRefeicao extends Component {
  state = {
    pequenoAlmoco: null,
    almoco: null,
    lanche: null,
    jantar: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRefeicao(this.state);
    this.setState({
      pequenoAlmoco: "",
      almoco: "",
      lanche: "",
      jantar: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pequenoAlmoco">Pequeno Almoço:</label>
          <input type="text" id="pequenoAlmoco" onChange={this.handleChange} />

          <label htmlFor="almoco">Almoço:</label>
          <input type="text" id="almoco" onChange={this.handleChange} />

          <label htmlFor="lanche">Lanche:</label>
          <input type="text" id="lanche" onChange={this.handleChange} />

          <label htmlFor="jantar">Jantar:</label>
          <input type="text" id="jantar" onChange={this.handleChange} />

          <button>Adicionar Refeição</button>
        </form>
      </div>
    );
  }
}

export default AddRefeicao;
