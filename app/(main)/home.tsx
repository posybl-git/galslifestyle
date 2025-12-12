import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";

export default function Home() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      contentContainerStyle={{ padding: 20 }}
    >
      {/* Header */}
      <Animated.Text
        entering={FadeInDown.duration(800)}
        style={{
          fontSize: 32,
          fontWeight: "900",
          marginBottom: 10,
        }}
      >
        👋 Welcome!
      </Animated.Text>

      <Animated.Text
        entering={FadeInDown.delay(200)}
        style={{ fontSize: 16, color: "#777", marginBottom: 25 }}
      >
        Heres your dashboard with quick actions.
      </Animated.Text>

      {/* Big Feature Card */}
      <Animated.View
        entering={FadeInUp.duration(800)}
        style={{
          backgroundColor: "black",
          padding: 25,
          borderRadius: 18,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          🚀 Get Started
        </Text>
        <Text style={{ color: "#ddd", fontSize: 15, marginBottom: 20 }}>
          Explore features, manage your account and more.
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 12,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Explore Now</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Action Cards */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {[
          { title: "My Profile", emoji: "👤" },
          { title: "Settings", emoji: "⚙️" },
          { title: "Notifications", emoji: "🔔" },
          { title: "Support", emoji: "💬" },
        ].map((item, index) => (
          <Animated.View
            key={index}
            entering={FadeInUp.delay(index * 150)}
            style={{
              width: "48%",
              backgroundColor: "#f5f5f5",
              padding: 18,
              borderRadius: 16,
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 30 }}>{item.emoji}</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 5 }}>
              {item.title}
            </Text>
          </Animated.View>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        onPress={() => router.push("/(auth)/login")}
        style={{
          marginTop: 25,
          backgroundColor: "#ff4d4d",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
