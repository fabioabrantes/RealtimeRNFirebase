import React from 'react';
import firestore from '@react-native-firebase/firestore';

import {IItem} from '../../types/todo';

import {
  HStack,
  Text,
  Box,
  CheckCircleIcon,
  WarningIcon,
  CloseIcon,
} from 'native-base';

const TodoItemList = ({item}: {item: IItem}) => {
  const handleRemove = async (id: string) => {
    console.log(id);
    await firestore().collection('todos').doc(id).delete();
  };

  const handleTaskPerformed = async (id: string) => {
    await firestore().collection('todos').doc(id).update({isDone: true});
  };

  return (
    <Box borderBottomWidth="1" pl="4" pr="5" py="2">
      <HStack space={3} justifyContent="space-between" alignItems="center">
        <Box>
          {item.isDone ? (
            <CheckCircleIcon size={12} color="#03BB85" />
          ) : (
            <WarningIcon
              size={12}
              color="#FF6961"
              onPress={() => handleTaskPerformed(item.id)}
            />
          )}
        </Box>
        <Text
          _dark={{
            color: 'primary.800',
          }}
          color="red.800"
          bold>
          {item.title}
        </Text>
        <Box>
          <CloseIcon
            size={4}
            color="#ff0000"
            onPress={() => {
              handleRemove(item.id);
            }}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default TodoItemList;
