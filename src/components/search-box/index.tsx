import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  onSearch: (value: string) => void;
  keyword: string;
}
export const SearchBox = ({ onSearch, keyword }: Props) => {
  const [value, setValue] = useState(keyword);
  useEffect(() => {
    setValue(keyword);
  }, [keyword]);
  const handleSearch = () => {
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
