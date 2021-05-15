import React, { useState } from "react";

interface SearchBlockProps {
  onChangeSearchString: (value: string) => void;
  onChangeDate: (value: string) => void;
  date: string;
  onSelectLanguage: (value: string) => void;
  language: string;
}

export const SearchBlock: React.FunctionComponent<SearchBlockProps> = ({
  onChangeSearchString,
  onChangeDate,
  date,
  onSelectLanguage,
  language,
}) => {
  // State initialization
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="row">
        <div className="col-lg-6 mt-4 mb-3">
          <input
            className="form-control"
            id="search"
            type="text"
            placeholder="Search for topics"
            value={inputValue}
            onChange={(e) => {
              const { value } = e.target;
              setInputValue(value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") onChangeSearchString(inputValue);
            }}
            onBlur={() => {
              onChangeSearchString(inputValue);
              setInputValue("");
            }}
          />
        </div>
        <div className="col-lg-3 mb-3">
          <label htmlFor="date">Search By Date</label>
          <input
            id="date"
            type="date"
            value={date}
            className="form-control"
            placeholder={"Search By Date"}
            min={"2021-04-13"}
            onChange={(e) => {
              const { value } = e.target;
              onChangeDate(value);
            }}
          />
        </div>
        <div className="col-lg-3 mt-4 mb-3">
          <div className="btn-group">
            <select
              className="btn btn-light dropdown-toggle"
              id="defaultDropdown"
              onChange={(e) => {
                const { value } = e.target;
                onSelectLanguage(value);
              }}
              value={language}
            >
              <option selected disabled>
                Select Language
              </option>
              <option value="en">English</option>
              <option value="pt">Portugese</option>
              <option value="es">Spanish</option>
              <option value="zh">Chinese</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
