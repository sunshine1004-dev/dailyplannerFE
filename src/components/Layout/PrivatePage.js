import Header from "../../components/Header/Header";

const PrivatePage = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

PrivatePage.routeName = "/expenses";

export default PrivatePage;
