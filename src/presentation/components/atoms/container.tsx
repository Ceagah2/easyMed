import { useTheme } from "@/data/context/theme.context";
import React from "react";
import { StyleSheet, View } from "react-native";


export const Container = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme();

  return (
    <View style={[S.container, { backgroundColor: colors.background }]}>
      {children}
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
