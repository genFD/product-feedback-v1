import { useEffect, useState } from 'react';
import {
  RoadmapHeader,
  Planned,
  MobileHeader,
  Inprogress,
  Live,
} from '../components';

function Roadmap() {
  const [planned, setPlanned] = useState(true);
  const [inProgress, setInprogress] = useState(
    window.innerWidth <= 767 ? false : true
  );
  const [live, setlive] = useState(window.innerWidth <= 767 ? false : true);

  const repopulateRequests = () => {
    if (window.innerWidth <= 767) {
      setPlanned(true);
      setInprogress(false);
      setlive(false);
    } else {
      setPlanned(true);
      setInprogress(true);
      setlive(true);
    }
  };

  const showComponent = (comp) => {
    if (comp === 'planned') {
      setPlanned(true);
      setInprogress(false);
      setlive(false);
    }
    if (comp === 'in-progress') {
      setInprogress(true);
      setPlanned(false);
      setlive(false);
    }
    if (comp === 'live') {
      setlive(true);
      setInprogress(false);
      setPlanned(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', repopulateRequests);
    return () => {
      window.removeEventListener('resize', repopulateRequests);
    };
  }, []);

  return (
    <main className="main_roadmap tablet:pt-14">
      <div className="flex justify-center tablet:px-4">
        <RoadmapHeader />
      </div>
      <MobileHeader showComponent={showComponent} />
      <div className="content pb-6 tablet:px-6 flex justify-center tablet:gap-x-eight desktop:gap-x-30">
        {planned && <Planned />}
        {inProgress && <Inprogress />}
        {live && <Live />}
      </div>
    </main>
  );
}

export default Roadmap;
