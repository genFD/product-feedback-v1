import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import { Loading, Suggestion, EmptyList } from '../components';

const SuggestionsList = () => {
  const { suggestions, loading, fetchRequests } = useGlobalContext();
  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (suggestions.length < 1) {
    return <EmptyList />;
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
