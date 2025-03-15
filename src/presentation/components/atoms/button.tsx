import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  icon?: string;
  iconLibrary?: any; 
  iconSize?: number;
  iconColor?: string;
}

export const Button = ({
  text,
  icon,
  iconLibrary = MaterialIcons,
  iconSize = 24,
  iconColor = "#fff",
  ...rest
}: ButtonProps) => {
  const IconComponent = iconLibrary;

  return (
    <TouchableOpacity style={S.container} {...rest}>
      {icon && (
        <View style={S.icon}>
          <IconComponent name={icon} size={iconSize} color={iconColor} />
        </View>
      )}
      <Text style={S.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const S = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#3B82F6",
    borderRadius: 8,
    width: '100%',
    height: 48
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 8,
  },
});
