import React from 'react';
import { useGlobalContext } from '../context/context';
import { Loading, Suggestion } from '../components';

const SuggestionsList = () => {
  const { suggestions, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <ul className="">
      <li>
        {suggestions.map((suggestion) => {
          return <Suggestion key={suggestion._id} suggestion={suggestion} />;
        })}
      </li>
    </ul>
  );
};

export default SuggestionsList;
