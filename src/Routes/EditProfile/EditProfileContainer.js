import React from 'react';
import EditProfilePresenter from './EditProfilePresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import { EDITPROFILE } from './EditProfileQueries';
import { toast } from 'react-toastify';

export default () => {
  const username = useInput('');
  const firstName = useInput('');
  const lastName = useInput('');
  const [editMutation] = useMutation(EDITPROFILE, {
    variables: {
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const { data: editUser } = await editMutation();
      if (!editUser) {
        toast.error('x');
      } else {
        toast.success('o');
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <EditProfilePresenter
      username={username}
      firstName={firstName}
      lastName={lastName}
      onSubmit={onSubmit}
    />
  );
};
