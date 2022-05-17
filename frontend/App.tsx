import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState } from "react";
import { Button, Dimensions, Text, View } from "react-native";
import Web3 from "web3";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const web3 = new Web3(
  Web3.givenProvider ||
    "https://ropsten.infura.io/v3/5c61f2cfeb084d82ba607cdaaa4148b1"
);

export default function App(): JSX.Element {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [keystore, setKeyStore] = useState(null);

  // console.warn(Web3.version);

  // React.useEffect(()=>{
  //   const account = web3.eth.accounts.create();
  //   console.log("account", account)
  //   web3.eth.accounts.signTransaction({
  //     gas: 2000000,
  //     to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
  //     value: '1000000000',
  // }, account.privateKey)
  // .then(console.log);
  // },[])

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    const account = web3.eth.accounts.create();
    console.log("account", account);
    setKeyStore(account);
  }, []);

  const signTransaction = (txParams) => {
    web3.eth.accounts
      .signTransaction(txParams, keystore.privateKey)
      .then((res) => {
        console.log("signed transaction", res);
      });
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.warn(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
    if (typeof data === "string") {
      setQrData(JSON.parse(data));
      signTransaction(JSON.parse(data));
    } else {
      setQrData(data);
      signTransaction(data);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View>
        <BarCodeScanner
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          // style={StyleSheet.absoluteFillObject}
          style={{ height: windowHeight / 2 }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
        <Text>{qrData && JSON.stringify(qrData)}</Text>
      </View>
    </View>
  );
}
