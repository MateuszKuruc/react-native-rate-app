import { View, Text, Image, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  upperWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  languageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1877F2",
    padding: 5,
  },
  languageInfo: {
    color: "white",
    fontWeight: "bold",
  },
  detailsContainer: {},
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperWrapper}>
        <Image
          source={{
            uri: ownerAvatarUrl,
          }}
          style={styles.avatar}
        ></Image>
        <View style={styles.detailsContainer}>
          <Text>{fullName}</Text>
          <Text>{description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.languageInfo}>{language}</Text>
          </View>
        </View>
      </View>

      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
