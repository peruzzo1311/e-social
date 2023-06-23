import { Icon, Image, View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
const fotoTeste = require("../../assets/images/Riki.jpg");
import { Ionicons, Feather } from "@expo/vector-icons";
import TablePerfil from "../TablePerfil";

export default function PerfilBody() {
  return (
    <View alignItems={"center"} paddingTop={10} flex={1} w={'100%'} >
      <View position={"relative"} w={200}>
        <View
          style={{ position: "absolute", right: 0, bottom: 0, zIndex: 50 }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#0171BB",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              width: 60,
            }}
          >
            <Icon as={Feather} name="camera" size={9} color={"white"} />
          </TouchableOpacity>
        </View>
        <Image
          source={fotoTeste}
          borderRadius={"100"}
          alt="Foto User"
          resizeMode="contain"
          h={200}
          w={200}
        ></Image>
      </View>
      <View w={'100%'} justifyContent={'center'} alignItems={'center'} paddingTop={'5%'}>
        <TablePerfil></TablePerfil>
      </View>
    </View>
  );
}
