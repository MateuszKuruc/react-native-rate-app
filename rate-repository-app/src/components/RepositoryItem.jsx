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
    flexDirection: "row",
    borderWidth: 2,
  },
  upperRightWrapper: {
    flexGrow: 0,
    alignItems: "flex-start",
    padding: 8,
    gap: 3,
  },
  languageInfo: {
    color: "white",
    padding: 3,
  },
  languageWrapper: {
    backgroundColor: "#1877F2",
    borderRadius: 3,
  },
  bottomWrapper: {},
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
    <View style={styles.upperWrapper}>
      <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }}></Image>
      <View style={styles.upperRightWrapper}>
        <Text style={{ fontWeight: "bold" }}>{fullName}</Text>
        <Text>{description}</Text>
        <View style={styles.languageWrapper}>
          <Text style={styles.languageInfo}>{language}</Text>
        </View>
      </View>
      <View styles={styles.bottomWrapper}></View>
    </View>
  );
};

export default RepositoryItem;
