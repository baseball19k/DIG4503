class James {
    constructor(name, color){
      this.props = {};
      this.props.make = make;
      this.props.color = color;
    }
  
    render() {
      return `
      What make is your ? ${this.props.make}
      What model is your car? ${this.props.model}
      What year is your car? ${this.props.year}
      What color is your car? ${this.props.color}
      `;
    }
  }
  
  module.exports = James;