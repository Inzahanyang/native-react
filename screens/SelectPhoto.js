import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import styled from "styled-components/native";
import {
  FlatList,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;
const Top = styled.View`
  flex: 1;
  background-color: blanchedalmond;
`;
const Bottom = styled.View`
  flex: 1;
  background-color: burlywood;
`;
const ImageContainer = styled.TouchableOpacity`
  border: 1px solid #fff;
`;
const IconContainer = styled.View`
  position: absolute;
  bottom: 2px;
  right: 2px;
`;

const HeaderRightText = styled.Text`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 600;
  margin-right: 7px;
`;

export default function SelectPhoto({ navigation }) {
  const [ok, setOk] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [chosenPhoto, setChosenPhoto] = useState("");
  const getPhotos = async () => {
    const { assets: photos } = await MediaLibrary.getAssetsAsync();
    setPhotos(photos);
  };

  // 안드로이드 permission object {
  //   "canAskAgain": true,
  //   "expires": "never",
  //   "granted": "false",
  //   "status": "undetermined",
  //   }

  const getPermissions = async () => {
    const { canAskAgain, granted } = await MediaLibrary.getPermissionsAsync();
    if (granted === false && canAskAgain) {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      if (granted !== false) {
        setOk(true);
        getPhotos();
      }
    } else if (granted !== false) {
      setOk(true);
      getPhotos();
    }
  };

  const HeaderRight = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate("UploadForm", { file: chosenPhoto })}
    >
      <HeaderRightText>Next</HeaderRightText>
    </TouchableOpacity>
  );

  useEffect(() => {
    getPermissions();
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRight,
    });
  }, [chosenPhoto]);

  const choosePhoto = (uri) => {
    setChosenPhoto(uri);
  };

  const { width } = useWindowDimensions();
  const numColumns = 4;
  const renderItem = ({ item: photo }) => (
    <ImageContainer onPress={() => choosePhoto(photo.uri)}>
      <Image
        source={{ uri: photo.uri }}
        style={{ width: width / numColumns, height: 100 }}
      />
      <IconContainer>
        <Ionicons
          name="checkmark-circle"
          size={18}
          color={photo.uri === chosenPhoto ? colors.blue : "white"}
        />
      </IconContainer>
    </ImageContainer>
  );
  return (
    <Container>
      <StatusBar hidden={false} />
      <Top>
        {chosenPhoto ? (
          <Image
            source={{ uri: chosenPhoto }}
            style={{ width, height: "100%" }}
          />
        ) : null}
      </Top>
      <Bottom>
        <FlatList
          data={photos}
          keyExtractor={(photo) => photo.id}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </Bottom>
    </Container>
  );
}
