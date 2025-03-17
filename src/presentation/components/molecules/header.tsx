import { useTheme } from "@/data/context/theme.context";
import { UserData } from "@/data/mock/user-data";
import { useResponsive } from "@/presentation/hooks/useResponsive";
import { fonts } from "@/presentation/theme";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from '../../../../assets/images/icon.png';
import { Toggle } from "../atoms";


export const Header = () => {
  const {colors} = useTheme();
  const {name} = UserData
 function getDate() {
  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const capitalizedDate = today.charAt(0).toUpperCase() + today.slice(1);
  return capitalizedDate;
 }
 

  return (
    <View style={[S.container, { backgroundColor: colors.primary }]}>
      <View style={S.greetingView}>
        <Image source={Logo} style={S.appLogo} />
        <Text style={[S.greeting, { color: colors.primaryText }]}>
          Bem vindo, {name} !
        </Text>
        <Toggle />
      </View>
      <View style={S.dateView}>
        <Text style={[S.dateTime, { color: colors.primaryText }]}>
          {getDate()}
        </Text>
      </View>
    </View>
  );
}


const S = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingHorizontal: 8,
  },
  greetingView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 4,
  },
  backView: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  appLogo: {
    width: useResponsive(70),
    height: useResponsive(70),
    borderRadius: useResponsive(35),
    margin: -12,
  },
  greeting: {
    fontSize: useResponsive(16),
    fontFamily: fonts.primaryTitle.toString(),
  },
  dateView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  dateTime: {
    fontSize: useResponsive(12),
    fontFamily: fonts.secondaryTitle.toString(),
  },
});