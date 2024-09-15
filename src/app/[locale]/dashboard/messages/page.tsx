"use client";

import { useEffect, useState } from 'react';
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

  const { user, isLoaded } = useUser(); // Use `isLoaded` from the hook
  const [isConnected, setIsConnected] = useState(false);

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
        enableWSFallback: true,
      });

      try {
        // Check if user exists
        const existingUser = await client.queryUsers({ id: String(user.id) });

        if (existingUser.users.length === 0) {
          // Create the user if it doesn't exist
          await client.upsertUser({
            id: String(user.id),
            name: user.email,
            image: getRandomImage(),
          });
        }

        // Connect the user
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

        setIsConnected(true);

        return () => {
          client.disconnectUser();
          window.removeEventListener('message', (event) => handleColorChange(event.data));
        };
      } catch (error) {
        console.error('Error connecting user:', error);
      }
    };

    if (isLoaded) {
      connectUser();
    }
  }, [apiKey, accessToken, user, isLoaded]);

  if (!isLoaded) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className='app__wrapper str-chat w-full h-full'>
      {user && user.id && isConnected ? (
        <Chat client={StreamChat.getInstance(String(apiKey))} theme={`team ${theme}`}>
          <WorkspaceController>
            <Sidebar />
            <ChannelContainer />
          </WorkspaceController>
        </Chat>
      ) : (
        <p>Connecting to chat...</p>
      )}
    </div>
  );
};

export default App;
