import React, { ReactNode } from 'react';
import { Modalize } from 'react-native-modalize';
import { StyleSheet } from 'react-native';

interface Props {
  children: ReactNode;
  modalizeRef: React.RefObject<Modalize>;
  onModalClosed?: () => void
}

const BottomSheet: React.FC<Props> = ({ children, modalizeRef,onModalClosed }) => {
  return (
    <Modalize
      ref={modalizeRef}
      modalStyle={[styles.container, {backgroundColor: '#FFF' }]}
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
      handlePosition={'inside'}
      adjustToContentHeight={true}
      handleStyle={{ backgroundColor: '#A9ABAD' }}
      avoidKeyboardLikeIOS
      onClosed={onModalClosed}
    >
      {children}
    </Modalize>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
});
