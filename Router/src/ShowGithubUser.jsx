import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";

function ShowGithubUser() {
  const { userGit } = useParams;
  return (
    <div>
      <GithubUser user={userGit} />
    </div>
  );
}
export default ShowGithubUser;
