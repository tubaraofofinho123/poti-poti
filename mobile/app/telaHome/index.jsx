import React from "react";
import { Text, View, StyleSheet, Image, FlatList, Pressable, ScrollView } from "react-native";
import { Link } from "@react-navigation/native"; // Certifique-se de usar react-navigation

const playlists = [
  { id: 0.1, title: "𝗀𝗎𝖽𝖺𝗇𝗀 𝗀𝖺𝗋𝖺𝗆", imageUrl: "https://i.pinimg.com/736x/0f/2b/40/0f2b409f45a34045b155fc28c2f5f7fb.jpg" },
  { id: 0.2, title: "أندروميدا", imageUrl: "https://i.pinimg.com/736x/ef/b4/57/efb457102a134c10760a6c5077eeb6d5.jpg" },
  { id: 0.3, title: "𝖿𝗋𝗈𝗌𝗍𝗂", imageUrl: "https://i.pinimg.com/736x/1b/bb/da/1bbbda3f440f53e4e6dd3e9f6e3a5c5a.jpg" },
  { id: 0.4, title: "𝗆𝗈𝗋𝗍𝖾𝗆 𝗉𝗎𝗅𝗌𝗎𝗌", imageUrl: "https://i.pinimg.com/736x/d7/7e/e2/d77ee293d9e88013e5d4ffcab9255c94.jpg" },
  { id: 0.5, title: "𝗏𝗂𝗈𝗅𝖾𝗇𝖼𝗂𝖺", imageUrl: "https://i.pinimg.com/736x/c3/50/0d/c3500d9674575c96d58ab81977db107d.jpg" },
];

const Artistas = [
  { id: 1.1, title: "𝖸𝗏𝖾𝗌", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb6bde100b1e64490e551679c0" },
  { id: 1.2, title: "æ𝗌𝗉𝖺", imageUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849242ca9331b2f9e8563b3f6d" },
  { id: 1.3, title: "𝖳𝗁𝖺𝗂𝖻𝗈𝗒 𝖣𝗂𝗀𝗂𝗍𝖺𝗅", imageUrl: "https://i.pinimg.com/736x/07/36/0c/07360cc3ce0bf2138869455c2f676537.jpg" },
  { id: 1.4, title: "𝖫𝖮𝖮ΠΔ", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb80584436e5726afb70cee7f8" },
  { id: 1.5, title: "𝖩𝖺𝖾𝗁𝗒𝗎𝗇", imageUrl: "https://i.scdn.co/image/ab6775700000ee856b2c9bb3e999fcbe9eba50f6" },
  { id: 1.6, title: "𝖢𝗁𝗎𝗎", imageUrl: "https://i.scdn.co/image/ab67616d00001e02cc681b43015ca45cd52e4625" },
  { id: 1.7, title: "𝖡𝗃𝗈̈𝗋𝗄", imageUrl: "https://i.scdn.co/image/ab67616d0000b2730bd598408bc507d070b7ba4c" },
  { id: 1.8, title: "𝖭𝖢𝖳 𝟣𝟤𝟩", imageUrl: "https://i.scdn.co/image/ab6761610000e5ebdc904dcc7399f1fd90107392" },
  { id: 1.9, title: "𝖠𝖱𝖳𝖬𝖲", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0576f9b8cd1e8c68afe0e3e6" },
  { id: 1.11, title: "𝖦𝗋𝗂𝗆𝖾𝗌", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb34771f759ca81a422f5f2b57" },
];

const Álbuns = [
  { id: 2.1, title: "𝕖", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e49806ff277ac693976caa97" },
  { id: 2.2, title: "𝖩", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b53a1f7473bda51dedbab579" },
  { id: 2.3, title: "𝗂𝖲𝖼𝗋𝖾𝖺𝖬 𝖵𝗈𝗅.𝟥𝟥 : 𝖲𝗎𝗉𝖾𝗋𝗇𝗈𝗏𝖺", imageUrl: "https://i.scdn.co/image/ab67616d0000b27311b2619b6939eff2c1dc144f" },
  { id: 2.4, title: "𝖲𝗒𝗋𝗈", imageUrl: "https://i.scdn.co/image/ab67616d0000b2738b68d772e75d4f280cea0ef0" },
  { id: 2.5, title: "𝖢𝗋𝗒𝗌𝗍𝖺𝗅 𝖢𝖺𝗌𝗍𝗅𝖾𝗌", imageUrl: "https://i.scdn.co/image/ab67616d0000b273db4e506605774d3d90ebb7bb" },
  { id: 2.6, title: "𝖫𝗈𝗈𝗄𝖺𝖿𝗍𝖾𝗋𝗂𝗇𝗀", imageUrl: "https://i.scdn.co/image/ab67616d00001e027b8a8021b84b56b685e9ea50" },
  { id: 2.7, title: "𝖲𝖾𝗅𝖾𝖼𝗍𝖾𝖽 𝖠𝗆𝖻𝗂𝖾𝗇𝗍 𝖶𝗈𝗋𝗄𝗌 𝟪𝟧-𝟫𝟤", imageUrl: "https://i.scdn.co/image/ab67616d0000b27338906032688bb13b135ce19a" },
  { id: 2.8, title: "𝖶𝗁𝗂𝗉𝗅𝖺𝗌𝗁", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e467a8e8d7b0aa92d354aa75" },
  { id: 2.9, title: "𝖬𝗂𝗌𝗌 𝖠𝗇𝗍𝗁𝗋𝗈𝗉𝗈𝖼𝖾𝗇𝖾", imageUrl: "https://i.scdn.co/image/ab67616d0000b2731a302aafa2ea587960e27951" },
  { id: 2.11, title: "𝖲𝗈𝖻𝗋𝖾𝗏𝗂𝗏𝖾𝗇𝖽𝗈 𝗇𝗈 𝖨𝗇𝖿𝖾𝗋𝗇𝗈", imageUrl: "https://i.scdn.co/image/ab67616d0000b273dc04f429698834d0736ddb0a" },
];

const Músicas = [
  { id: 3.1, title: "𝗌𝗍𝗈𝗇𝖾", imageUrl: "https://i.scdn.co/image/ab67616d0000b2735b8e52ffcfb62d2353228fab" },
  { id: 3.2, title: "ぴぽぴぽ", imageUrl: "https://i.scdn.co/image/ab67616d00001e027cc46ab2b35f933dea6139cc" },
  { id: 3.3, title: "ブルボン", imageUrl: "https://i.scdn.co/image/ab676161000051748984da2433909b71b1559c87" },
  { id: 3.4, title: "𝗆𝖺𝖼𝗁𝗂𝗇𝖾 𝗀𝗎𝗇 𝗅𝗈𝗏𝖾 𝗌𝗈𝗇𝗀", imageUrl: "https://i.scdn.co/image/ab67616d00001e02f60b3b31800db3d084297d7c" },
  { id: 3.5, title: "呼吸", imageUrl: "https://i.scdn.co/image/ab67616d0000b2732420365b61d3bfa992f89435" },
  { id: 3.6, title: "𝖾-𝗆𝖺𝗂𝗅 𝗆𝗈𝗋𝖾! ♡", imageUrl: "https://i.scdn.co/image/ab67616d00001e0224e251e335d9ed09c32630d5" },
  { id: 3.7, title: "𝗌𝗉𝗋𝗂𝗇𝗀 𝗅𝗈𝗏𝖾𝗋𝗌", imageUrl: "https://i.scdn.co/image/ab67616d0000b273bd8ffa1736ec6be192e9217f" },
  { id: 3.8, title: "𝖼𝗁𝖮𝖮𝖲𝖾 𝗆𝖤 𝗈𝗋 𝖣𝗂𝖾", imageUrl: "https://i.scdn.co/image/ab67616d0000b273de1a77ef9e9b0f4c72f1c769" },
  { id: 3.9, title: "𝗅𝖾𝗍 𝗆𝖾 𝖻𝖾 𝗐𝗂𝗍𝗁 𝗒𝗈𝗎", imageUrl: "https://i.scdn.co/image/ab67616d0000b2736ccb362e8e30b8a214b65be7" },
  { id: 3.11, title: "𝖧𝖠𝖱𝖣𝖫𝖸 𝖤𝖵𝖤𝖱 𝖲𝖬𝖨𝖫𝖤(𝗐𝗂𝗍𝗁𝗈𝗎𝗍 𝗎)", imageUrl: "https://i.scdn.co/image/ab67616d0000b273f78bb04e337eb2cb5e249cb4" },
];

const TelaHome = () => {
  const renderPlaylist = (data, isArtist = false) => (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{ alignItems: "flex-start" }}
      renderItem={({ item }) => (
        <Pressable style={styles.itemCard}>
          <Image
            style={[styles.itemImage, isArtist && styles.artistImage]}
            source={{ uri: item.imageUrl }}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>{item.title}</Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>𝘀𝗽𝗼𝘁𝗳𝗮𝗸𝗲 ૮꒰ ˶• ༝ •˶꒱ა ♡ </Text>
        <Link to="/telaPerfil" style={styles.profileLink}>
          <Text style={styles.profileText}>𝗉𝗋𝗈𝖿𝗂𝗅𝖾</Text>
        </Link>
      </View>

      <Text style={styles.sectionTitle}>𝗺𝘂́𝘀𝗶𝗰𝗮𝘀</Text>
      {renderPlaylist(Músicas)}

      <Text style={styles.sectionTitle}>𝗮𝗿𝘁𝗶𝘀𝘁𝗮𝘀</Text>
      {renderPlaylist(Artistas, true)}

      <Text style={styles.sectionTitle}>𝗮́𝗹𝗯𝘂𝗻𝘀</Text>
      {renderPlaylist(Álbuns)}

      <Text style={styles.sectionTitle}>𝗽𝗹𝗮𝘆𝗹𝗶𝘀𝘁𝘀</Text>
      {renderPlaylist(playlists)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D0FCC7",
    flex: 1,
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 0,
    backgroundColor: '#90B582',
    width: '100%',
    height: 100,
    padding: 20

  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#447D46",
  },
  profileLink: {
    backgroundColor: "#447D46",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    width: 150,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  profileText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "regular",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#90B582",
    marginBottom: 10,
    marginLeft: 20
  },
  itemCard: {
    marginRight: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 120,
  },
  itemImage: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 3,
    border: '4px solid #90B582'
  },
  artistImage: {
    borderRadius: 60,
  },
  itemText: {
    color: "#447D46",
    marginTop: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
  profileImage: {
    width: 20,
    height: 20
  }
});

export default TelaHome;