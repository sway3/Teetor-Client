import React, { useState, useEffect } from 'react';

import Fuse, { FuseResult } from 'fuse.js';

import { Dropdown, DropdownItem, Input } from './style';

import { professionArray, canHelpWithArray } from '../../../config/searchData';

interface SkillSearchProps {
  option: string;
  onResultChange: (e: React.MouseEvent<HTMLElement>) => void;
}

const SkillSearch: React.FC<SkillSearchProps> = ({
  option,
  onResultChange,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuseResult<string>[]>([]);

  const searchOption =
    option === 'profession' ? professionArray : canHelpWithArray;

  const fuse = new Fuse(searchOption, {
    includeScore: true,
  });

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const dropdownHandler = () => {
    setQuery('');
  };

  useEffect(() => {
    const result = fuse.search(query);
    setResults(result);
  }, [query]);

  return (
    <>
      <Input onChange={searchInputHandler} />
      {query && results.length > 0 && (
        <Dropdown>
          {results.map((result, index) => (
            <DropdownItem
              key={index}
              onClick={(e) => {
                onResultChange(e);
                dropdownHandler();
              }}
            >
              {result.item}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </>
  );
};

export default SkillSearch;
