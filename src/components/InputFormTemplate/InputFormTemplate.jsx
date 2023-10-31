import React from "react";
import "./InputFormTemplate.scss";

function InputFormTemplate({
  header,
  radioOptionalTitle,
  radioOptionalValue,
  radioOptional,
  radioData,
  inputText,
  dateInput,
  radioName,
  value,
  placeholder,
  inputTitle,
  onChange,
  checkbox,
  radio,
}) {
  return (
    <div className="form-content-header">
      {header && (
        <div className="form-content">
          <div className="top-bar"></div>
          <div className="form-content-header-body-bar">
            {/* <div className="left-bar"></div> */}
            <div className="form-content-header-body">
              <div className="form-content-header-body-title">
                <h1>Female Sponsorship</h1>
              </div>
              {/* <hr /> */}
              <div className="separator"></div>
              <div className="form-content-header-body-details">
                <span>Apply before: 12-06-2023</span>
                {/* <span>selection Date: 15-01-2024 </span>
                  <span>interview Date: 15-01-2024</span> */}
                <span>
                  Contact us: sponsorship@chuochaurembonaususisakina.ac.tz
                </span>
              </div>
              <div className="separator"></div>
            </div>
          </div>
        </div>
      )}
      {inputText && (
        <div className="form-content">
          {/* <div className="top-bar"></div> */}
          <div className="form-content-header-body-bar">
            {/* <div className="left-bar"></div> */}
            <div className="form-content-header-body">
              <div className="form-content-header-body-title">
                <span className="input-title">{inputTitle}</span>
              </div>
              {/* <hr /> */}
              <div className="separator"></div>
              <div className="form-content-header-body-details">
                <input
                  type="text"
                  onChange={onChange}
                  value={value}
                  placeholder={placeholder}
                  className="input-text"
                />
              </div>
              {/* <div className="separator"></div> */}
            </div>
          </div>
        </div>
      )}
      {dateInput && (
        <div className="form-content">
          {/* <div className="top-bar"></div> */}
          <div className="form-content-header-body-bar">
            {/* <div className="left-bar"></div> */}
            <div className="form-content-header-body">
              <div className="form-content-header-body-title">
                <span className="input-title">{inputTitle}</span>
              </div>
              {/* <hr /> */}
              <div className="separator"></div>
              <div className="form-content-header-body-details">
                <input
                  type="date"
                  onChange={onChange}
                  value={value}
                  placeholder={placeholder}
                  className="input-text"
                />
              </div>
              {/* <div className="separator"></div> */}
            </div>
          </div>
        </div>
      )}
      {radio && (
        <div className="form-content">
          {/* <div className="top-bar"></div> */}
          <div className="form-content-header-body-bar">
            {/* <div className="left-bar"></div> */}
            <div className="form-content-header-body">
              <div className="form-content-header-body-title">
                <span className="input-title">{inputTitle}</span>
              </div>
              {/* <hr /> */}
              <div className="separator"></div>
              <div className="form-content-header-body-details">
                {radioData.map((radio) => (
                  <div className="form-content-radio-button">
                    <input
                      type="radio"
                      name={radio.radioName}
                      onChange={onChange}
                      value={radio.value}
                    />
                    <span>{radio.label}</span>
                  </div>
                ))}
                {radioOptional === "yes" && (
                  <div className="form-content">
                    {/* <div className="top-bar"></div> */}
                    <div className="form-content-header-body-bar">
                      {/* <div className="left-bar"></div> */}
                      <div className="form-content-header-body">
                        <div className="form-content-header-body-title">
                          <span className="input-title optional-title">
                            {radioOptionalTitle}
                          </span>
                        </div>
                        {/* <hr /> */}
                        <div className="separator"></div>
                        <div className="form-content-header-body-details">
                          <input
                            type="text"
                            onChange={onChange}
                            value={radioOptionalValue}
                            
                            className="input-text"
                          />
                        </div>
                        {/* <div className="separator"></div> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* <div className="separator"></div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputFormTemplate;
