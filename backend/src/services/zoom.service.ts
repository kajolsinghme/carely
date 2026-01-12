import axios from 'axios';

const ZOOM_API_BASE = 'https://api.zoom.us/v2';

 const getAccessToken = async() => {
    return process.env['ZOOM_SECRET_TOKEN']
 }
export const createZoomMeeting = async (
  topic: string,
  startTime: string,
  duration: number
) => {
  const token = await getAccessToken()

  const response = await axios.post(
    `${ZOOM_API_BASE}/users/me/meetings`,
    {
      topic,
      type: 2,
      start_time: startTime,
      duration,
      settings: {
        join_before_host: false,
        approval_type: 0,
        host_video: true,
        participant_video: true,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return {
    meetingId: response.data.id,
    meetingUrl: response.data.join_url,
  };
};
