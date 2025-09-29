import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  SectionList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import Video from "react-native-video";

const WatchNawScreen: React.FC = () => {
  const { height } = Dimensions.get("window");
  const [sections, setSections] = useState<any[]>([]);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // M3U parser
  const parseM3U = (data: string) => {
    const lines = data.split("\n").filter((line) => line.trim() !== "");
    const parsed: any[] = [];

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("#EXTINF")) {
        const info = lines[i];
        const url = lines[i + 1];

        const nameMatch = info.match(/tvg-name="([^"]+)"/);
        const logoMatch = info.match(/tvg-logo="([^"]+)"/);
        const groupMatch = info.match(/group-title="([^"]+)"/);

        parsed.push({
          name: nameMatch ? nameMatch[1] : "Unknown",
          logo: logoMatch ? logoMatch[1] : null,
          group: groupMatch ? groupMatch[1] : "Other",
          url,
        });
      }
    }

    // qruplaşdırma
    const grouped = parsed.reduce((acc, ch) => {
      if (!acc[ch.group]) acc[ch.group] = [];
      acc[ch.group].push(ch);
      return acc;
    }, {} as Record<string, any[]>);

    // SectionList formatı
    return Object.keys(grouped).map((group) => ({
      title: group,
      data: grouped[group],
    }));
  };

  // API-dən kanalların çəkilməsi
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const res = await fetch(
          "http://teammedia.pw:25461/get.php?username=Azer0138&password=XyHP50rEnH6&type=m3u_plus&output=ts"
        );
        const data = await res.text();

        const sections = parseM3U(data);
        setSections(sections);

        if (sections.length > 0 && sections[0].data.length > 0) {
          setSelectedUrl(sections[0].data[0].url); // ilk kanalı default oynat
        }
      } catch (err) {
        console.log("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#111827" }}>
      {/* Video Player */}
      <View style={{ height: height / 3 }}>
        {selectedUrl ? (
          <Video
            source={{ uri: selectedUrl }}
            style={{ width: "100%", height: "100%", backgroundColor: "black" }}
            controls
            resizeMode="contain"
            onError={(e) => console.log("Video error:", e)}
            onBuffer={(buffer) => console.log("Buffering:", buffer.isBuffering)}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "#fff" }}>Kanal seçilməyib</Text>
          </View>
        )}
      </View>

      {/* Kanal Listi */}
      <View style={{ flex: 1, padding: 10 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Kanallar
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color="#f97316" />
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedUrl(item.url)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 6,
                  padding: 10,
                  backgroundColor:
                    selectedUrl === item.url ? "#374151" : "#1f2937",
                  borderRadius: 8,
                }}
              >
                {item.logo ? (
                  <Image
                    source={{ uri: item.logo }}
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 10,
                      borderRadius: 5,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 10,
                      backgroundColor: "#4b5563",
                      borderRadius: 5,
                    }}
                  />
                )}
                <Text style={{ color: "#fff", fontSize: 16 }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                style={{
                  color: "#f97316",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                {title}
              </Text>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default WatchNawScreen;
