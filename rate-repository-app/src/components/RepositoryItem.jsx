import { View, Text, Image, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 3,
  },
  upperWrapper: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  upperRightWrapper: {
    flexGrow: 0,
    alignItems: "flex-start",
    padding: 8,
    gap: 5,
  },
  languageInfo: {
    color: "white",
    padding: 3,
  },
  languageWrapper: {
    backgroundColor: "#1877F2",
    borderRadius: 3,
  },
  bottomWrapper: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-around",
  },
  numbersContainer: {
    flexDirection: "column",
  },
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
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }}></Image>
        <View style={styles.upperRightWrapper}>
          <Text style={{ fontWeight: "bold" }}>{fullName}</Text>
          <Text>{description}</Text>
          <View style={styles.languageWrapper}>
            <Text style={styles.languageInfo}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <View style={styles.numbersContainer}>
          <Text>{stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text>{forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text>{reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text>{ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
