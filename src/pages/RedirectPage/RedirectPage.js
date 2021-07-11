import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-apollo";
import { checkOrCreateSheetMutation } from "../../mutations";
import PrivatePage from "../../components/Layout/PrivatePage";

const RedirectPage = () => {
  const history = useHistory();
  const [checkOrCreateSheet] = useMutation(checkOrCreateSheetMutation);

  useEffect(() => {
    const today = new Date();
    checkOrCreateSheet({ variables: { day: today.toDateString() } })
      .then((res) => {
        if (res.data.checkOrCreateSheet.id) {
          history.push("/sheets/" + res.data.checkOrCreateSheet.id);
        }
      })
      .catch(console.log);
  }, [checkOrCreateSheet, history]);

  return (
    <PrivatePage>
      <div>Redirect...</div>
    </PrivatePage>
  );
};

RedirectPage.routeName = "/";

export default RedirectPage;
