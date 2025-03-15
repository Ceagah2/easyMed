import { useTheme } from "@/data/context/theme.context";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";


export const Toggle = () => {
  const { theme, toggleTheme, colors } = useTheme();
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  const handlePress = () => {
    rotate.value = withSequence(
      withTiming(-5, { duration: 50 }),
      withTiming(5, { duration: 50 }),
      withTiming(-5, { duration: 50 }),
      withTiming(5, { duration: 50 }),
      withTiming(0, { duration: 50 })
    );

    opacity.value = withSequence(
      withTiming(0, { duration: 200 }),
      withDelay(200, withTiming(1, { duration: 200 }))
    );

    translateY.value = withSequence(
      withTiming(20, { duration: 200 }),
      withTiming(0, { duration: 200 })
    );

    setTimeout(() => {
      toggleTheme();
    }, 200);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotate.value}deg` },
      { translateY: translateY.value },
    ],
    opacity: opacity.value,
  }));

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[S.container, { backgroundColor: colors.switch }]}>
        <Animated.View style={animatedStyle}>
          {theme === "light" ? (
            <Ionicons name="sunny" size={32} color="black" />
          ) : (
            <Ionicons name="moon" size={32} color="white" />
          )}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const S = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
