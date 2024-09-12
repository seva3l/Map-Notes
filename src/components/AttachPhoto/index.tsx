import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import GallerySVG from '@assets/icons/Gallery';
import { moderateScale, verticalScale } from 'react-native-size-matters';

import {Colors} from '@constants/Colors';
import PlusSVG from '@assets/icons/Plus';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';

interface Props{
  selectedImage?: string;
  setSelectedImage: (image: string | undefined) => void
}

const AttachPhoto = ({selectedImage,setSelectedImage}: Props) => {
    // const [selectedImage, setSelectedImage] = useState<string | undefined>('');

  const openImagePicker = async () => {
    try {
      const options = {
        mediaType: 'photo' as MediaType,
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };

      const result = await launchImageLibrary(options);
      const imageUri = result.assets?.[0].uri;
      setSelectedImage(imageUri);

    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: '#000' }]}>
        Add Photo
      </Text>
      <View style={[styles.photoContainer,selectedImage && {padding: 4}]}>
        {!selectedImage ? (<>
            <GallerySVG />
            <Text
            style={[styles.photoText, { color: '#000' }]}
            >Add a photo to make this memory even more special</Text>
            <TouchableOpacity style={styles.selectImageBtn} onPress={openImagePicker}>
                <PlusSVG color={Colors.primary}/>
            </TouchableOpacity>
            </> ) :
            <View style={{width: '100%', height: '100%'}}>
                <Image resizeMode="cover" source={{uri: selectedImage}} style={styles.image}/>

            </View>
        }
       {selectedImage &&
       <TouchableOpacity style={[styles.unSelectBtn,{backgroundColor: '#000'}]} onPress={()=>setSelectedImage('')}>
            <Text style={{color: Colors.dark.text,fontWeight: '500'}}>X</Text>
        </TouchableOpacity>}
    </View>
    </View>
  );
};

export default AttachPhoto;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(21),
  },
  unSelectBtn:{
    position: 'absolute',
    top:0,
    right: 0,
    width: moderateScale(18),
    height: moderateScale(18),
    borderRadius: moderateScale(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectImageBtn:{
    marginTop: moderateScale(8),
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#A9ABAD',
  },
  image:{
    borderRadius: 8,
    width: '100%',
    height: '100%',
  },
  photoContainer: {
    padding: moderateScale(16),
    borderWidth: 1,
    borderColor: '#A9ABAD',
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(216),
  },
  label: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    fontFamily: 'Inter',
    marginBottom: moderateScale(13),
  },
  photoText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    fontFamily: 'Inter',
    textAlign: 'center',
    marginTop: moderateScale(8),
    maxWidth: '80%',
  },
});
