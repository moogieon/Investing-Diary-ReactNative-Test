import React, {useState} from 'react';
import {Props} from '../../../../App';
import WritePageUI from './WritePage.presenter';

export default function WritePage({navigation}: Props) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  console.log(date);
  return (
    <WritePageUI
      navigation={navigation}
      date={date}
      open={open}
      setDate={setDate}
      setOpen={setOpen}
    />
  );
}
