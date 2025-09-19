import { requireGuest } from "@/lib/session";
import SigninClientPage from "./SigninClientPage";

const SigninPage = async () => {
  await requireGuest();
  return <SigninClientPage />;
};

export default SigninPage;
