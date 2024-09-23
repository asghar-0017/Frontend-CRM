import React from 'react';
import '../../css/StatusIndicator.css'; 

const StatusIndicator = () => {
  return (
    <div className="status-indicator">
      <div className="status-item">
        <span className="status-icon progress"></span>
        <span>progress</span>
      </div>
      <div className="status-item">
        <span className="status-icon complete"></span>
        <span>complete</span>
      </div>
    </div>
  );
};

export default StatusIndicator;
