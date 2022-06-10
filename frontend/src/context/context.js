import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

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

  const planned = requests.filter((request) => request.status === 'planned');

  const inProgress = requests.filter(
    (request) => request.status === 'in-progress'
  );

  const live = requests.filter((request) => request.status === 'live');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const SidebarFixer = () => {
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(false);
    }
  };
  const showModal = () => setModal(true);
  const showConfirmationModal = () => setConfirmationModal(true);
  const closeConfirmationModal = () => setConfirmationModal(false);
  const closeModal = () => setModal(false);

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
        requests,
        isSidebarOpen,
        toggleSidebar,
        fetchRequests,
        loading,
        setLoading,
        suggestions,
        planned,
        inProgress,
        live,
        confirmationModal,
        setConfirmationModal,
        showModal,
        showConfirmationModal,
        closeModal,
        closeConfirmationModal,
        modal,
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
