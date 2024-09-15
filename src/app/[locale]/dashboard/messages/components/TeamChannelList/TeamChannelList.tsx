import React, { PropsWithChildren, useCallback } from 'react';

import { AddChannelButton } from './AddChannelButton';

import { useWorkspaceController, Workspace } from '../../context/WorkspaceController';

import type { ChannelListMessengerProps } from 'stream-chat-react';
import clsx from 'clsx';

export type TeamChannelListProps = ChannelListMessengerProps & {
  type: string;
};

const ChannelList = (props: PropsWithChildren<TeamChannelListProps>) => {
  const { children, error = false, loading, type } = props;

  const { displayWorkspace } = useWorkspaceController();

  const handleAddChannelClick = useCallback(() => {
    displayWorkspace(`Admin-Admin-Channel-Create__${type}` as Workspace);
  }, [type, displayWorkspace]);

  if (error) {
    console.error('Error loading channels:', error);
    return type === 'team' ? (
      <div className="team-channel-list text-white text-sm p-4">
        Error loading channels, please try again shortly.
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
