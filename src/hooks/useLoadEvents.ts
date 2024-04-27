import { useQuery } from '@tanstack/react-query';
import { getEventReq } from '../apis/mentoringAPIs';
import { useEffect, useState } from 'react';

const useLoadEvents = (sessionId: any) => {
  const [loadedevents, setLoadedEvents] = useState<any>([]);
  const { data, isPending  } = useQuery({
    queryKey: ['loadEvents', sessionId],
    queryFn: () => getEventReq(sessionId),
    enabled: !!sessionId,
  });

  useEffect(() => {
    if (data) {
      const events = data.data;
      setLoadedEvents(events);
    }
  }, [data]);

  return { loadedevents, isPending };
};

export default useLoadEvents;
