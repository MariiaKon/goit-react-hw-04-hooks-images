import { Component } from 'react';
import { Button } from './styled/Button.styled';
import PropTypes from 'prop-types';

export class LoadMoreBtn extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <Button type="button" onClick={onClick}>
        Load more
      </Button>
    );
  }
}

LoadMoreBtn.propTypes = { onClick: PropTypes.func };
