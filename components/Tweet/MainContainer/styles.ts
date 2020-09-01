import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  tweetHeaderContainer: {
    flexDirection: "row",
  },
  header_text: {
    marginRight: 5,
    fontWeight: "bold",
  },
  header_user: {
    marginRight: 5,
    color: "grey",
  },
  header_created_at: {
    marginRight: 5,
    color: "grey",
  },
  content: {
    marginTop: 5,
    lineHeight: 19,
    textAlign: "justify",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
});

export default styles;
