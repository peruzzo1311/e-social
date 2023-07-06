import React  from "react";
import { Spinner as NativeBaseSpinner,Text, View } from "native-base";

export default function Spinner() {

    return (
      <NativeBaseSpinner
        color={"#0171BB"}
        size={"lg"}
        marginBottom={24}
        marginTop={4}
        alignSelf={"center"}
      />
    );


}
