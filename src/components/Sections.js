import React from "react";
import {Link} from "react-router-dom"

class Section extends React.Component {
  render() {
    const { value, onMouseMove, id, src, alt  } = this.props;
    return (
      <div className="column">
        <Link
          to="/quiz"
          value={value}
          onMouseMove={onMouseMove}
          
          id={id}
          className="rc"
        >
          <img src={src} alt={alt} />
          <div className="middle">
            <div className="text">{this.props.children}</div>
          </div>
        </Link>
      </div>
    );
  }
}
export default Section;
