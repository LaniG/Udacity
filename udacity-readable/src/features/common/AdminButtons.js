import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const AdminButtons = ({ onEdit, onDelete }) => {
  return (
    <span>
      <Button basic size="mini" content="Edit" onClick={onEdit} icon="file" labelPosition="right" />
      <Button
        basic
        size="mini"
        content="Delete"
        onClick={onDelete}
        icon="trash"
        labelPosition="right"
      />
    </span>
  );
};

AdminButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AdminButtons;
