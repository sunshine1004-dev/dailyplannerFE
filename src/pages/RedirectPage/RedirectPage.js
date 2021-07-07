import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-apollo";
import { checkOrCreateSheetMutation } from "../../mutations";

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

  return <div>Redirect...</div>;
};

RedirectPage.routeName = "/";

export default RedirectPage;
