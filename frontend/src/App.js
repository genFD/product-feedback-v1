import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import {
  Suggestions,
  NewFeedback,
  Roadmap,
  EditFeedback,
  FeedbackDetails,
} from './pages';

import { AppProvider } from './context/context';

function App() {
  return (
    <AppProvider>
      <div className="font-Jost">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Suggestions />} />
            <Route path="/feedbackdetail/:id" element={<FeedbackDetails />} />
            <Route path="/editfeedback/:id" element={<EditFeedback />} />
            <Route path="/newfeedback" element={<NewFeedback />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
