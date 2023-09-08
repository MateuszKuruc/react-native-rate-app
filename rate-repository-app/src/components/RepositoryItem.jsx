import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
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
    <View>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
      <Image
        source={{
          uri: ownerAvatarUrl,
        }}
        style={styles.avatar}
      ></Image>
    </View>
  );
};

export default RepositoryItem;
