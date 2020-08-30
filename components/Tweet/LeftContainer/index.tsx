import React from "react";
import { View, Text } from "react-native";
import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";

export type LeftContaonerProps = {
  user: UserType;
};

const LeftContainer = ({ user }: LeftContaonerProps) => {
  return (
    <View>
      <ProfilePicture image={user.image} size={75} />
    </View>
  );
};

export default LeftContainer;
