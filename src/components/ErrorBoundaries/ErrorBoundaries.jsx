import React from "react";
import ReactDOM from 'react-dom/client'
import NotFoundError from "../NotFoundError/NotFoundError";


class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <NotFoundError />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaries;