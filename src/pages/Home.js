import React from "react";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";
import { Layout } from "../components/Layout";

const HomePage = ({ id }) => {
  return (
    <Layout
      title={"Tu app de fotos de mascotas"}
      subtitle="Con Petgram puedes encontrar fotos de animales domesticos muy bonitos"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (preProps, props) => {
  return preProps.id === props.id;
});
