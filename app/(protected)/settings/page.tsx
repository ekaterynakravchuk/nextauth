import { auth } from "@/auth";

const SettingsPage = async () => {
  const seccion = await auth()
  return ( 
    <div>
      {JSON.stringify(seccion)}
    </div>
    );
}
 
export default SettingsPage;