import axios from 'axios';

const ZOOM_API_BASE = 'https://api.zoom.us/v2';

export const getAccessToken = async () => {
  const tokenRes = await axios.post('https://zoom.us/oauth/token', null, {
    params: {
      grant_type: 'account_credentials',
      account_id: process.env['ZOOM_ACCOUNT_ID'],
    },
    auth: {
      username: process.env['ZOOM_CLIENT_ID']!,
      password: process.env['ZOOM_CLIENT_SECRET']!,
    },
  });

  return tokenRes.data.access_token;
};

export const createZoomMeeting = async (
  topic: string,
  startTime: string,
  duration: number
) => {
  const token = await getAccessToken();

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
