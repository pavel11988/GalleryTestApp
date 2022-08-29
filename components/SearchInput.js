import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

// redux:
import {useDispatch} from 'react-redux';
import {galleryOperations} from '../redux/gallery';

// components (svg)
import Search from '../assets/svgs/search.svg';

const SearchInput = () => {
  const dispatch = useDispatch();

  const [request, setRequest] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  async function searchByRequest(requestWord) {
    if (requestWord.length === 0 || !requestWord) {
      return;
    }
    keyboardHide();
    await dispatch(galleryOperations.getImagesByRequest(requestWord));
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          placeholder={'Search images...'}
          placeholderTextColor={
            isShowKeyboard
              ? 'rgba(198, 211, 235, 0.8)'
              : 'rgba(198, 211, 235, 0.52)'
          }
          value={request}
          onChangeText={value => setRequest(value)}
          onFocus={() => setIsShowKeyboard(true)}
        />
        <TouchableOpacity
          disabled={request.length === 0 ? true : false}
          style={styles.button}
          opacity={isShowKeyboard ? 1 : 0.7}
          onPress={() => searchByRequest(request)}>
          <Search width={20} height={20} fill={'#dcdcdc'} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    marginBottom: 50,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#faf0e6',
    borderRadius: 15,
    color: '#faf0e6',
    marginHorizontal: 20,
    paddingLeft: 20,
    paddingRight: 50,
  },
  button: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    right: 25,
    top: 5,
    borderRadius: 50,
  },
});
export default SearchInput;
