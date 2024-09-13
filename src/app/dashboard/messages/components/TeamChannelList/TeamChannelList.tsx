import React, { PropsWithChildren, useCallback } from 'react';

import { AddChannelButton } from './AddChannelButton';

import { useWorkspaceController, Workspace } from '../../context/WorkspaceController';

import type { ChannelListMessengerProps } from 'stream-chat-react';
import clsx from 'clsx';

export type TeamChannelListProps = ChannelListMessengerProps & {
  type: string;
};

// Mock data for user profile cards
const mockUserProfiles = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    status: 'Online',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    status: 'Away',
  },
  {
    id: 3,
    name: 'Mark Spencer',
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    status: 'Offline',
  },
];

const ChannelList = (props: PropsWithChildren<TeamChannelListProps>) => {
  const { children, error = false, loading, type } = props;

  const { displayWorkspace } = useWorkspaceController();

  const handleAddChannelClick = useCallback(() => {
    displayWorkspace(`Admin-Admin-Channel-Create__${type}` as Workspace);
  }, [type, displayWorkspace]);

  if (error) {
    return type === 'team' ? (
      <div className="team-channel-list">
        {/* 
          List of user profile cards like in messengers with random static data 
        */}
        <div className="user-profile-list space-y-2 p-2">
          {mockUserProfiles.map((user) => (
            <div key={user.id} className="user-profile-card p-2 text-white flex space-x-2 bg-slate-600 rounded-md">
              <img src={user.avatar} alt={user.name} className=" rounded full w-12 h-12" />
              <div className="user-profile-card__info">
                <p className="user-profile-card__name">{user.name}</p>
                <p className="user-profile-card__status">{user.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === 'team' ? 'Channels' : 'Messages'} loading...
        </p>
      </div>
    );
  }

  return (
    <div className={clsx('team-channel-list', `team-channel-list--${type === 'team' ? 'group' : 'dm'}`)}>
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direct Messages'}
        </p>
        <AddChannelButton onClick={handleAddChannelClick} />
      </div>
      {children}
    </div>
  );
};

export const TeamChannelList = React.memo(ChannelList);
