import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {

  const tryFaceId = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Log in with FaceID",
      disableDeviceFallback: true,
      cancelLabel: 'Cancel',
    });

    alert(result.success ? 'Success' : result.error)

    console.log(result)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title={'Try FaceID'} onPress={tryFaceId} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
