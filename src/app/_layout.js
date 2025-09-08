import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function RootLayout() {
  const [isDark, setIsDark] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          margin: 10,
          padding: 8,
          backgroundColor: isDark ? "#444" : "#eee",
          borderRadius: 20,
        }}
        onPress={() => setIsDark((prev) => !prev)}
      >
        <Text style={{ color: isDark ? "#fff" : "#222" }}>
          {isDark ? "🌙 Dark" : "☀️ Light"}
        </Text>
      </TouchableOpacity>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: isDark ? "#222" : "#fff",
            borderTopColor: isDark ? "#444" : "#ccc",
          },
          tabBarActiveTintColor: isDark ? "#fff" : "#222",
          tabBarInactiveTintColor: isDark ? "#aaa" : "#888",
          headerStyle: {
            backgroundColor: isDark ? "#222" : "#fff",
          },
          headerTitleStyle: {
            color: isDark ? "#fff" : "#222",
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="sobreNos"
          options={{
            title: "Sobre",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="house-user" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="contact"
          options={{
            title: "Contato",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="contacts" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
