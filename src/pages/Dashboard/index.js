import React, { useEffect, useMemo, useState } from 'react';
import { addDays, format, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Time } from './styles';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const Dashboard = () => {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, 'd \'de\' MMMM', { locale: pt }), [date]);

  useEffect(() => {
    const loadSchedule = () => {
      // todo load schedule
    };

    loadSchedule();
  }, [date]);

  const handlePrevDay = () => setDate(subDays(date, 1));
  const handleNextDay = () => setDate(addDays(date, 1));

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff"/>
        </button>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff"/>
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
};

export default Dashboard;
