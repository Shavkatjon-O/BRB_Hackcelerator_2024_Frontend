"use client";

import { useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';

import { getRandomImage } from './assets';
import { useChecklist } from './ChecklistTasks';
import { ChannelContainer } from './components/ChannelContainer/ChannelContainer';
import { Sidebar } from './components/Sidebar/Sidebar';

import { WorkspaceController } from './context/WorkspaceController';

import type { StreamChatType } from './types';

import useUser from '@/hooks/useUser';
import Cookies from 'js-cookie';
import { tokenProvider } from '../meetings/_actions/token-provider';

import './styles/index.scss';

const App = () => {
  const theme = 'light';

  const { user } = useUser();

  const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
  const accessToken = Cookies.get('accessToken');

  useEffect(() => {
    const connectUser = async () => {
      if (!user || !user.id || !user.email) {
        console.error('User data is missing or incomplete.');
        return;
      }

      if (!apiKey) {
        console.error('API Key is missing or undefined.');
        return;
      }

      const userToken = await tokenProvider(accessToken);

      const client = StreamChat.getInstance<StreamChatType>(String(apiKey), { 
        enableInsights: true, 
        enableWSFallback: true 
      });

      await client.connectUser(
        { id: String(user.id), name: user.email, image: getRandomImage() }, 
        userToken
      );

      const handleColorChange = (color: string) => {
        const root = document.documentElement;
        if (color.length && color.length === 7) {
          root.style.setProperty('--primary-color', `${color}E6`);
          root.style.setProperty('--primary-color-alpha', `${color}1A`);
        }
      };

      window.addEventListener('message', (event) => handleColorChange(event.data));

      return () => {
        client.disconnectUser();
        window.removeEventListener('message', (event) => handleColorChange(event.data));
      };
    };

    connectUser();
  }, [apiKey, accessToken, user]);

  return (
    <div className='app__wrapper str-chat w-full h-full'>
      {user && user.id ? (
        <Chat client={StreamChat.getInstance(String(apiKey))} theme={`team ${theme}`}>
          <WorkspaceController>
            <Sidebar />
            <ChannelContainer />
          </WorkspaceController>
        </Chat>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default App;
