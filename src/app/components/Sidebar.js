import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Sidebar = ({ idealFor }) => {
  const [showIdealFor, setShowIdealFor] = useState(true);

  const [checkboxes, setCheckboxes] = useState({
    Men: false,
    Women: false,
    Electronics: false,
    Jewelery: false,
  });

  const toggleIdealFor = () => {
    setShowIdealFor((prev) => !prev);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleUnselectAll = () => {
    const reset = {};
    for (const key in checkboxes) {
      reset[key] = false;
    }
    setCheckboxes(reset);
  };

  // ✅ Trigger idealFor callback AFTER checkboxes update (not during render)
  useEffect(() => {
    const selected = Object.keys(checkboxes).filter((key) => checkboxes[key]);
    idealFor(selected);
  }, [checkboxes]);

  return (
    <aside className="sidebar">
      <div className="filter-section">
        <div className="filter-option">
          <label>
            <input type="checkbox" />
            <strong className="checkbox-label">CUSTOMIZBLE</strong>
          </label>
        </div>

        <div className="filter-group">
          <div className="filter-header" onClick={toggleIdealFor}>
            <span>IDEAL FOR</span>
            <Image
              src="/img/arrow-left.png"
              alt="toggle"
              width={16}
              height={16}
              className={`arrow-icon ${showIdealFor ? 'open' : ''}`}
            />
          </div>

          <h3>All</h3>

          {showIdealFor && (
            <div className="filter-content">
              <p className="unselect-text" onClick={handleUnselectAll}>Unselect all</p>
              {Object.keys(checkboxes).map((label) => (
                <label key={label}>
                  <input
                    type="checkbox"
                    name={label}
                    checked={checkboxes[label]}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkbox-label">{label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
