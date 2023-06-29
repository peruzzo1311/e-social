import {
  Icon,
  Image,
  View,
  Input,
  TextArea,
  Text,
  Button,
  KeyboardAvoidingView,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
const fotoTeste = require("../../assets/images/Riki.jpg");
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useEffect, useRef } from "react";

export default function Post() {
  return (
    <KeyboardAvoidingView flex={1} bg={"white"}>
      <View flex={1}>
        <View h={"100%"} paddingLeft={7} paddingTop={5} paddingRight={7}>
          <View flexDir={"row"} alignItems={"center"}>
            <Icon
              as={Ionicons}
              name="person-circle"
              size={24}
              color={"#bbb"}
            ></Icon>
            <Text fontWeight={"bold"}>Henrique Nicolli</Text>
          </View>
          <TextArea
            autoFocus
            paddingTop={4}
            h={"85%"}
            placeholder="O que deseja compartilhar?"
            w="100%"
            maxW="100%"
            borderWidth={0}
            _focus={{ borderWidth: 0, bg: "white", h: "80%" }}
            autoCompleteType={undefined}
          />
          <View flexDir={"row"} justifyContent={"space-between"}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon
                as={Ionicons}
                name="images-outline"
                size={6}
                color={"black"}
              ></Icon>
              <Text fontWeight={"bold"}> Imagem</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon
                as={Ionicons}
                name="images-outline"
                size={6}
                color={"black"}
              ></Icon>
              <Text fontWeight={"bold"}> GIF</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon
                as={AntDesign}
                name="upload"
                size={6}
                color={"black"}
              ></Icon>
              <Text fontWeight={"bold"}> Arquivo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
