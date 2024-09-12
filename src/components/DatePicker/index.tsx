import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import CalendarSVG from '@assets/icons/Calendar';
import ArrowDownSVG from '@assets/icons/ArrowDown';

interface Props {
  label?: string;
  onPress: () => void;
  open: boolean;
  date: Date;
  setOpen: (open: boolean) => void;
  setDate: (date: Date) => void;
  onConfirm: (date: Date) => void;
  isEditing?: boolean;
  confirmText?: string;
  primary?: boolean;
}
const BrandDatePicker = (props: Props) => {
  return (
    <View>
      <Text style={[styles.label]}>{props.label}</Text>
      <TouchableOpacity onPress={props.onPress} style={[styles.datePickerContainer]}>
        <Text style={[styles.placeholderText]}>{moment(props.date).format('MM/DD/YYYY')}</Text>
        {props.primary ? <CalendarSVG /> : <ArrowDownSVG />}
      </TouchableOpacity>
      <DatePicker
        maximumDate={new Date()}
        confirmText={props.confirmText ? props.confirmText : 'Next'}
        modal
        title={null}
        open={props.open}
        date={props.date}
        mode="date"
        onConfirm={(date) => {
          props.setOpen(false);
          props.setDate(date);
          props.onConfirm(date);
        }}
        onCancel={() => {
          props.setOpen(false);
        }}
      />
    </View>
  );
};

export default BrandDatePicker;

const styles = StyleSheet.create({
  datePickerContainer: {
    borderRadius: moderateScale(15),
    borderWidth: 1,
    padding: moderateScale(16),
    borderColor: '#132744',
    marginTop: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#132744',
    fontSize: moderateScale(16),
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  label: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    fontFamily: 'Inter',
    color: '#000',
  },
});
