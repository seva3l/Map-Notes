import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import BottomSheet from '@components/BottomSheet';
import { Modalize } from 'react-native-modalize';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BrandDatePicker from '@components/DatePicker';
import { BrandTextInput, BrandMessageInput } from '@components/TextInput';
import Button from '@components/Button';
import { Colors } from '@constants/Colors';
import AttachPhoto from '@components/AttachPhoto';
import Loading from '@components/Loading';

interface Props {
  modalizeRef: React.RefObject<Modalize>;
  handleSubmit?: () => void;
  setTitle?: (e: string) => void;
  isButtonDisabled?: boolean;
  setNotes?: (e: string) => void;
  setDate: (date: Date) => void;
  date: Date;
  onModalClosed?: () => void;
  loading?: boolean;
  selectedImage?: string;
  setSelectedImage: (image: string | undefined) => void
}
const CreateNote = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);



  return (
    <BottomSheet modalizeRef={props.modalizeRef} onModalClosed={props.onModalClosed}>
      {props.loading ?
        <View style={{height:verticalScale(500)}}>
          <Loading/>
        </View> :

        <View style={styles.container}>
          <Text style={styles.title}>Create new note</Text>
          <View style={styles.formContainer}>
            <BrandDatePicker
              isEditing
              label="Created At"
              onPress={() => setOpen(true)}
              setOpen={setOpen}
              setDate={props.setDate}
              date={props.date}
              open={open}
              onConfirm={(date) => props.setDate(date)}
              confirmText="Confirm"
              primary
            />
            <BrandTextInput setText={props.setTitle} label="Title" />
            <BrandMessageInput setText={props.setNotes} label="Notes" />
            <AttachPhoto selectedImage={props.selectedImage} setSelectedImage={props.setSelectedImage}/>
          </View>
          <Button isLoading={props.loading} disabled={props.isButtonDisabled || props.loading} label="Create" onPress={props.handleSubmit} />
        </View>
      }
    </BottomSheet>
  );
};

export default CreateNote;
const styles = StyleSheet.create({
  container: {
    paddingTop: moderateScale(63),
    paddingBottom: moderateScale(30),
    paddingHorizontal: moderateScale(22),
    gap: 32,
  },
  formContainer: {
    gap: 15,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '500',
    color: Colors.primary,
  },
});
