import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Suggestions,
  NewFeedback,
  Roadmap,
  EditFeedback,
  FeedbackDetails,
} from './pages';

function App() {
  return (
    <div className="font-Jost">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Suggestions />} />
          <Route path="/feedbackdetail/:id" element={<FeedbackDetails />} />
          <Route path="/editfeedback" element={<EditFeedback />} />
          <Route path="/newfeedback" element={<NewFeedback />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
