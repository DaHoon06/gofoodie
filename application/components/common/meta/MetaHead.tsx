import Head from "next/head";

const MetaHead = () => {
  return (
    <Head>
      <title></title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=0"
      />
      <meta httpEquiv="Subject" content="맛집" />
      <meta httpEquiv="Title" content="고푸디" />
      <meta httpEquiv="Author" content="고푸디" />
      <meta httpEquiv="Other Agent" content="고푸디" />
      <meta httpEquiv="Copyright" content="고푸디" />
      <meta httpEquiv="Distribution" content="고푸디" />
      <meta
        name="keywords"
        content="맛집, 레시피, 동네맛집, 맛, 맛집 리스트, 맛집 정보, 음식, 음식점, 데이트"
      />
      <meta name="description" content={"맛집 정보"} />
      <meta httpEquiv="Imagetoolbar" content="no" />
      <meta
        httpEquiv="Page-Enter"
        content="revealtrans(Duration=1,Transition=12)"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-web-app-capable" content="yes" />

      <meta name="color-scheme" content="dark light" />
      <meta
        name={"theme-color"}
        content={"#fff"}
        media={"(prefers-color-scheme: light)"}
      />
      <meta
        name={"theme-color"}
        content={"#fff"}
        media={"(prefers-color-scheme: dark)"}
      />
    </Head>
  );
};

export default MetaHead;
