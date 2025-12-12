import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    password.trim() &&
    confirmPassword.trim() &&
    password === confirmPassword;

  const handleSignup = () => {
    console.log({ firstName, lastName, email, password });
    // TODO: Supabase Signup Logic
    router.push("/home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Animated.View entering={FadeInDown.duration(600)} style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Fill all fields to continue</Text>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(200)} style={styles.form}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />

        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
          style={styles.input}
        />

        <TouchableOpacity
          onPress={handleSignup}
          disabled={!isFormValid}
          style={[
            styles.button,
            { backgroundColor: isFormValid ? "#222" : "#999" },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { opacity: isFormValid ? 1 : 0.7 },
            ]}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    justifyContent: "center",
    padding: 25,
  },
  header: {
    marginBottom: 25,
    alignItems: "center",
  },
  title: { fontSize: 32, fontWeight: "800", color: "#111" },
  subtitle: { fontSize: 16, color: "#666", marginTop: 5 },
  form: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 16,
    elevation: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "600" },
  linkText: {
    marginTop: 15,
    textAlign: "center",
    color: "#555",
    textDecorationLine: "underline",
    fontSize: 14,
  },
});
