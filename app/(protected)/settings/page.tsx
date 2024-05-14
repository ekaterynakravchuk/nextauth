import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const seccion = await auth()
  return ( 
    <div>
      {JSON.stringify(seccion)}
      <form action={async()=>{
        'use server'
        await signOut()
      }}>
        <Button>Sign Out</Button>
      </form>
    </div>
    );
}
 
export default SettingsPage;