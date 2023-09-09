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
    gap: 3,
    alignItems: "center",
  },
  numbersDisplay: {
    fontWeight: "bold",
  },
  resultsName: {
    color: "grey",
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
  const starsNumber = (stargazersCount / 1000).toFixed(1);
  const forksNumber = (forksCount / 1000).toFixed(1);
  return (
    <View style={styles.container}>
      <View style={styles.upperWrapper}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }}></Image>
        <View style={styles.upperRightWrapper}>
          <Text style={{ fontWeight: "bold" }}>{fullName}</Text>
          <Text style={{ color: "grey" }}>{description}</Text>
          <View style={styles.languageWrapper}>
            <Text style={styles.languageInfo}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbersDisplay}>{starsNumber}k</Text>
          <Text style={styles.resultsName}>Stars</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbersDisplay}>{forksNumber}k</Text>
          <Text style={styles.resultsName}>Forks</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbersDisplay}>{reviewCount}</Text>
          <Text style={styles.resultsName}>Reviews</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbersDisplay}>{ratingAverage}</Text>
          <Text style={styles.resultsName}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
