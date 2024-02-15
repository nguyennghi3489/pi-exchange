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
        className="text-lg py-2"
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
      <button
        className="text-lg py-2 px-4 text-white font-bold bg-fuchsia-400"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
