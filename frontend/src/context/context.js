import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { sortMost, sortLeast } from '../utils/sort';
import { useParams } from 'react-router-dom';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestion, setSuggestion] = useState(null);
  const [sortedSuggestions, setSortedSuggestions] = useState([]);
  const { id } = useParams();
  const fetchRequests = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/feedbacks');
      if (data) {
        setRequests(data);
        const filteredSuggestion = data.filter(
          (item) => item.status === 'suggestion'
        );
        setSuggestions(filteredSuggestion);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getSuggestion = async (id) => {
    try {
      const { data } = await axios.get(`/api/feedbacks/${id}`);
      if (data) {
        setLoading(false);
        setSuggestion(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const planned = requests.filter((request) => request.status === 'planned');

  const inProgress = requests.filter(
    (request) => request.status === 'in-progress'
  );

  const live = requests.filter((request) => request.status === 'live');

  const sortLeast = (item) => {
    const prop = item.split(' ')[1];
    return setSortedSuggestions(
      suggestions.sort((a, b) => {
        if (a[prop] < b[prop]) {
          return -1;
        }
        if (a[prop] > b[prop]) {
          return 1;
        }
        return 0;
      })
    );
  };

  const sortMost = (item) => {
    const prop = item.split(' ')[1];
    return setSortedSuggestions(
      suggestions.sort((a, b) => {
        if (a[prop] < b[prop]) {
          return -1;
        }
        if (a[prop] > b[prop]) {
          return 1;
        }
        return 0;
      })
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const SidebarFixer = () => {
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      SidebarFixer();
    });
    return () =>
      window.removeEventListener('resize', () => {
        SidebarFixer();
      });
  }, []);

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <AppContext.Provider
      value={{
        getSuggestion,
        isSidebarOpen,
        toggleSidebar,
        fetchRequests,
        loading,
        setLoading,
        suggestions,
        planned,
        inProgress,
        live,
        sortLeast,
        sortMost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
