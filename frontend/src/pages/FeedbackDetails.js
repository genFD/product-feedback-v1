import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Loading,
  SuggestionDetail,
  EditFeedbackButton,
  GobackButton,
  Comments,
  CommentsInput,
} from '../components';
import axios from 'axios';

function FeedbackDetails() {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getSuggestion = async () => {
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
    getSuggestion();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!suggestion) {
    return <h2>No suggestion found, please refresh the page</h2>;
  }
  const { comments } = suggestion;
  return (
    <>
      <header className="my-6 px-6 w-full flex justify-center tablet:px-10">
        <div className="w-327 tablet:w-689 desktop:w-825 flex items-center justify-between">
          <GobackButton />
          <EditFeedbackButton id={id} />
        </div>
      </header>
      <main className="flex flex-col items-center">
        <SuggestionDetail {...suggestion} />
        <Comments comments={comments} />
        <CommentsInput />
      </main>
    </>
  );
}

export default FeedbackDetails;
