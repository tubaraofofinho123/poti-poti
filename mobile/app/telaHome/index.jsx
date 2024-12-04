import React from "react";
import { Text, View, StyleSheet, Image, FlatList, Pressable, ScrollView } from "react-native";
import { Link } from "@react-navigation/native"; // Certifique-se de usar react-navigation

const playlists = [
  { id: 0.1, title: "1990", imageUrl: "https://i.pinimg.com/736x/0f/2b/40/0f2b409f45a34045b155fc28c2f5f7fb.jpg" },
  { id: 0.2, title: "أندروميدا", imageUrl: "https://i.pinimg.com/736x/ef/b4/57/efb457102a134c10760a6c5077eeb6d5.jpg" },
  { id: 0.3, title: "(๑°o°๑) 🍏", imageUrl: "https://i.pinimg.com/736x/fa/0e/c4/fa0ec4b451f228118016c641985cb7af.jpg" },
  { id: 0.4, title: "raspberry", imageUrl: "https://i.pinimg.com/736x/ff/a5/29/ffa529895226d4ea5838e762f048a605.jpg" },
  { id: 0.5, title: "petals'", imageUrl: "https://i.pinimg.com/736x/eb/6b/d1/eb6bd18b9c9d24ae6102e15b70173175.jpg" },
];

const Artistas = [
  { id: 1.1, title: "Yves", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb6bde100b1e64490e551679c0" },
  { id: 1.2, title: "æspa", imageUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849242ca9331b2f9e8563b3f6d" },
  { id: 1.3, title: "Thaiboy Digital", imageUrl: "https://i.pinimg.com/736x/07/36/0c/07360cc3ce0bf2138869455c2f676537.jpg" },
  { id: 1.4, title: "LOOΠΔ", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb80584436e5726afb70cee7f8" },
  { id: 1.5, title: "Jaehyun", imageUrl: "https://pbs.twimg.com/media/GcYvWBJaQAAD-B2.jpg" },
  { id: 1.6, title: "Chuu", imageUrl: "https://i.scdn.co/image/ab67616d00001e02cc681b43015ca45cd52e4625" },
  { id: 1.7, title: "Björk", imageUrl: "https://i.scdn.co/image/ab67616d0000b2730bd598408bc507d070b7ba4c" },
  { id: 1.8, title: "NCT 127", imageUrl: "https://i.scdn.co/image/ab6761610000e5ebdc904dcc7399f1fd90107392" },
  { id: 1.9, title: "ARTMS", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0576f9b8cd1e8c68afe0e3e6" },
  { id: 1.11, title: "ILLIT", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5884b5e3bdc71d42b62bfcfd" },
];

const Álbuns = [
  { id: 2.1, title: "E", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e49806ff277ac693976caa97" },
  { id: 2.2, title: "J", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b53a1f7473bda51dedbab579" },
  { id: 2.3, title: "iScreaM Vol.33 : Supernova", imageUrl: "https://i.scdn.co/image/ab67616d0000b27311b2619b6939eff2c1dc144f" },
  { id: 2.4, title: "Syro", imageUrl: "https://i.scdn.co/image/ab67616d0000b2738b68d772e75d4f280cea0ef0" },
  { id: 2.5, title: "Dall", imageUrl: "https://i.scdn.co/image/ab67616d0000b2733eaf9b3c1c804fec2bb06ac0" },
  { id: 2.6, title: "Oh!", imageUrl: "https://lastfm.freetls.fastly.net/i/u/500x500/422a83bf77b045208c0593b41cb88b6b.jpg" },
  { id: 2.7, title: "iScreaM Vol.33 : Supernova", imageUrl: "https://i.scdn.co/image/ab67616d0000b27311b2619b6939eff2c1dc144f" },
  { id: 2.8, title: "Whiplash", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e467a8e8d7b0aa92d354aa75" },
  { id: 2.9, title: "Miss Anthropocene", imageUrl: "https://i.scdn.co/image/ab67616d0000b2731a302aafa2ea587960e27951" },
  { id: 2.11, title: "Sobrevivendo no Inferno", imageUrl: "https://i.scdn.co/image/ab67616d0000b273dc04f429698834d0736ddb0a" },
];

const Músicas = [
  { id: 3.1, title: "love4eva", imageUrl: "https://i.scdn.co/image/ab67616d0000b27319f29ba212fa38eb88cf3643" },
  { id: 3.2, title: "Russian Roulette", imageUrl: "https://i.scdn.co/image/ab67616d0000b2733f30a062dafcdbc1a8fad842" },
  { id: 3.3, title: "Forever", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerymDVMN5E_gpg6InM0G-ZZJWAlRuvnN7vQ&s" },
  { id: 3.4, title: "LOOP", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b278c6fdc2dd765edc654ff1" },
  { id: 3.5, title: "ABCD", imageUrl: "https://i.scdn.co/image/ab67616d0000b2735c202994e981619ccf69784e" },
  { id: 3.6, title: "FavOriTe", imageUrl: "https://akamai.sscdn.co/uploadfile/letras/fotos/1/4/0/b/140bfcca76325e621e62fa6156d96796.jpg" },
  { id: 3.7, title: "Midas Touch", imageUrl: "https://acdn.mitiendanube.com/stores/003/868/591/products/ab67616d0000b27307568782625b85282541394b-9dcc87355864eec6e017244474018874-640-0.jpg" },
  { id: 3.8, title: "Hi High", imageUrl: "https://akamai.sscdn.co/uploadfile/letras/albuns/0/a/5/a/1168911634142043.jpg" },
  { id: 3.9, title: "Howl", imageUrl: "https://i.scdn.co/image/ab67616d0000b27373ac78b51d85f57bb40f8251" },
  { id: 3.11, title: "Girls' Night", imageUrl: "https://akamai.sscdn.co/uploadfile/letras/albuns/1/e/3/7/2191041713289627.jpg" },
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
        <Text style={styles.title}>𝖘𝖕𝖔𝖙𝖋𝖆𝖐𝖊</Text>
        <Link to="/telaPerfil" style={styles.profileLink}>
          <Text style={styles.profileText}>Meu Perfil</Text>
          {/*<Image source={require('../../assets/images/userIcon.png')} style={styles.profileImage} />*/}
        </Link>
      </View>

      <Text style={styles.sectionTitle}>Músicas</Text>
      {renderPlaylist(Músicas)}

      <Text style={styles.sectionTitle}>Artistas</Text>
      {renderPlaylist(Artistas, true)}

      <Text style={styles.sectionTitle}>Álbuns</Text>
      {renderPlaylist(Álbuns)}

      <Text style={styles.sectionTitle}>Playlists</Text>
      {renderPlaylist(playlists)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5bfff",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#d798ff",
  },
  profileLink: {
    backgroundColor: "#d798ff",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
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
    borderRadius: 5,
  },
  artistImage: {
    borderRadius: 60,
  },
  itemText: {
    color: "#fff",
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