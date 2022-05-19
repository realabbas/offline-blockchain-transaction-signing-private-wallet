/* eslint-disable */
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Web3 from "web3";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const web3 = new Web3(
  Web3.givenProvider ||
    "https://ropsten.infura.io/v3/5c61f2cfeb084d82ba607cdaaa4148b1"
);

const txParams = {
  nonce: "0x00",
  gasPrice: "0x09184e72a000",
  gasLimit: "0x28000",
  to: "0x0000000000000000000000000000000000000000",
  value: "0x00",
  data: "0x7f7465737432000000000000000000000000000000000000000000000000000000600057",
};

export default function App(): JSX.Element {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [keystore, setKeyStore] = useState(null);

  let objJsonStr = JSON.stringify(txParams);
  let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
  console.log("objJsonB64", objJsonB64, typeof objJsonB64);

  var buf = Buffer.from(JSON.stringify(txParams));

  console.log("buf");
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
          <React.Fragment>
            <QRCode
              value={JSON.stringify(txParams)}
              size={200}
              logoBackgroundColor="transparent"
            />
            {/* <Button
              style={{ marginTop: 50 }}
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
            /> */}
          </React.Fragment>
        )}
        {/* <Text>{qrData && JSON.stringify(qrData)}</Text> */}
      </View>
    </View>
  );
}
