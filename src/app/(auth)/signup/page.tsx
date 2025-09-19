import { requireGuest } from "@/lib/session";
import SignupClientPage from "./SignupClientPage";

const SignupPage = async () => {
  await requireGuest();
  return <SignupClientPage />;
};

export default SignupPage;
