import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import UserRow from "../components/UserRow";
import { USER_FRAGMENT } from "../fragments";

const LIKES_QUERY = gql`
  query seePhotoLikes($id: Int!) {
    seePhotoLikes(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

export default function Likes({ route: { params } }) {
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery(LIKES_QUERY, {
    variables: { id: params?.photoId },
    skip: !params?.photoId,
    onCompleted: (data) => console.log(data),
  });

  const renderUser = ({ item: user }) => <UserRow {...user} />;

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ScreenLayout>
      <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
          ></View>
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={renderUser}
        data={data?.seePhotoLikes}
        keyExtractor={(item) => "" + item.id}
        style={{ width: "100%" }}
      />
    </ScreenLayout>
  );
}
