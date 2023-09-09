import { View, Image, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

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
          <Text fontWeight="bold">{fullName}</Text>
          <Text style={{ color: "grey" }}>{description}</Text>
          <View style={styles.languageWrapper}>
            <Text style={styles.languageInfo}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <View style={styles.numbersContainer}>
          <Text fontWeight="bold">{starsNumber}k</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text fontWeight="bold">{forksNumber}k</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text fontWeight="bold">{reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text fontWeight="bold">{ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
