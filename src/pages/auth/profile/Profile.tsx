import { useCheckTokenQuery } from "@/redux/api/customer-api";

const Profile = () => {
  const {} = useCheckTokenQuery(null);

  return <div className="min-h-96 container">Profile</div>;
};

export default Profile;
