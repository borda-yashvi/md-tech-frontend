import { useDispatch } from "react-redux";
import { fetchUserListAsync } from "../services/ReduxStore/userSlice";
import { addUser } from "../services/api";

const UserForm=()=>{
    const dispatch = useDispatch();
    
    const onSave=async(event)=>{
        event.preventDefault(); 
    const name = event.target.name.value;
    const email = event.target.email.value;
  await addUser({name,email}).then((res)=>{
    alert(res?.data?.message)
    dispatch(fetchUserListAsync({  }))

  }).catch((error)=>{
    alert(error?.response?.data?.message)
    console.log(error);
  })
    }
 return(<>
  <div className="flex items-center justify-center h-screen">

 <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSave}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Username
      </label>
      <input required  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email Id
      </label>
      <input required  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email Id"/>
    </div>
    <div className="flex items-center justify-center">
                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add User
                        </button>
                    </div>
  </form>
</div>
</div>

 </>)
}

export default UserForm