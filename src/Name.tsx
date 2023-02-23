import { useState } from "react";

interface Param {
  counter: number;
  userName: string;
  setUserName: (name: string) => void;
}

const Name = ({ counter, userName, setUserName }: Param): JSX.Element => {
  const [data, setData] = useState(userName);

  const handleNameSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setUserName(data);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setData(inputValue);
  };

  return (
    <div className="NameContent">
      <div className="mt-5">Please enter your name</div>
      <input
        className="mt-5"
        type="text"
        placeholder="Name"
        value={data}
        onChange={handleNameChange}
      />
      <div className="mt-5">
        <button onClick={handleNameSubmit}>Submit</button>
      </div>
      <br />
      <div>
        Greeting button click counter:{" "}
        <input
          className="mt-5"
          type="number"
          placeholder="Counter value"
          value={counter}
        />
      </div>
    </div>
  );
};

export default Name;
