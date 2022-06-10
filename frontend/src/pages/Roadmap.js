import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/context';
import {
  RoadmapHeader,
  Planned,
  MobileHeader,
  Inprogress,
  Live,
} from '../components';

function Roadmap() {
  const [planned, setPlanned] = useState(true);
  const [inProgress, setInprogress] = useState(true);
  const [live, setlive] = useState(true);
  const [value, setValue] = useState(0);
  const { requests } = useGlobalContext();
  const [list, setList] = useState(requests);

  const repopulateRequests = () => {
    if (window.innerWidth >= 768) {
      setPlanned(true);
      setInprogress(true);
      setlive(true);
    } else {
      setPlanned(true);
      setInprogress(false);
      setlive(false);
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
