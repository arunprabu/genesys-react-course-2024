import { useAuth } from "../../contexts/AuthContext"

const AdminPage: React.FC = () => {
  const {role} = useAuth();

  if(role != 'SUPER_ADMIN'){
    return(
      <div className="alert alert-warning">
        You do not have rights to view this page. You must be a SUPER ADMIN.
      </div>
    )
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Hello Admin!</p>
      <p>This page will appear only if you are a SUPER_ADMIN</p>
    </div>
  )
}

export default AdminPage