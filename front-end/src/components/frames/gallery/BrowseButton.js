import React from 'react';
import PropTypes from 'prop-types';

const BrowseButton = ({ totalFiles = 0, totalBytes = 0, render }) => {
  let message = 'No files chosen';
  if (totalFiles === 1) {
    message = '1 file chosen';
  } else if (totalFiles > 1) {
    message = `${totalFiles} files chosen`;
  }

  message += (totalBytes < 1000000) ?
    ` (${Math.floor(totalBytes / 1000)}KB)` :
    ` (${Math.floor(totalBytes / 1000000)}MB)`;

  return (
    <div className="browseContainer">
      {render()} {message}
    </div>
  );
};

BrowseButton.propTypes = {
  totalFiles: PropTypes.number,
  totalBytes: PropTypes.number,
  render: PropTypes.func.isRequired,
};

BrowseButton.defaultProps = {
  totalBytes: 0,
  totalFiles: 0,
};

export default BrowseButton;
