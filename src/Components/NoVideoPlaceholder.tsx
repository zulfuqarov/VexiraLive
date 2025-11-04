import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
} from "react-native";

type Props = {
  message?: string;
  onRetry?: () => void;
  showButton?: boolean;
};

const { width } = Dimensions.get("window");
const CARD_WIDTH = Math.min(520, width - 40);

export const NoVideoPlaceholder: React.FC<Props> = ({
  message = "Heç bir video yoxdur",
  onRetry,
  showButton = true,
}) => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.card,
          isDark ? styles.cardDark : styles.cardLight,
          { width: CARD_WIDTH },
        ]}
      >
        <Text style={styles.icon}>📹</Text>

        <Text style={[styles.title, isDark ? styles.textDark : styles.textLight]}>
          No Video
        </Text>

        <Text
          style={[
            styles.message,
            isDark ? styles.textDarkSecondary : styles.textLightSecondary,
          ]}
        >
          {message}
        </Text>

        {showButton && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onRetry && onRetry()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Yenidən cəhd et</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  card: {
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 22,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6, 
  },
  cardLight: {
    backgroundColor: "#ffffff",
  },
  cardDark: {
    backgroundColor: "#1f2937", 
  },
  icon: {
    fontSize: 52,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  message: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 14,
    paddingHorizontal: 8,
  },
  textLight: {
    color: "#111827",
  },
  textDark: {
    color: "#f3f4f6",
  },
  textLightSecondary: {
    color: "#6b7280",
  },
  textDarkSecondary: {
    color: "#9ca3af",
  },
  button: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: "#FB923C",
    minWidth: 140,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
