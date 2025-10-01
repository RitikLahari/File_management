//for login user
import * as types from "../actionTypes/authActionTypes";
import fire from "../../config/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const loginUser=(payload)=>{
    return{
        type : types.SIGN_IN,
        payload
    }
}
const logoutUser=()=>{
    return{
        type:types.SIGN_OUT

    }
}

//action creator

export  const signInUser=(email,password,setSucess)=>(dispatch)=>{
  
  
    fire.auth().signInWithEmailAndPassword(email,password)
    
    
    .then(user=>{
        dispatch(loginUser({uid:user.user.uid,
            email:user.user.email,
            displayName:user.user.displayName}));
        setSucess(true);
    }).catch((error)=>{
        toast.error("invalid credential")
       console.log(error);
    })
}

//this is for registeration where user register by it detail
// export const signUpUser=(name,email,password,setSucess)=>(dispatch)=>{
//     fire.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
//         fire.auth().currentUser.updateProfile({
//             displayName:name,
//         })
//         .then(async ()=>{
//             const currentUser=await fire.auth().currentUser;
//            dispatch(loginUser({
//             uid:currentUser.uid,
//             name:currentUser.displayName,
//             email:currentUser.email,}));
//            setSucess(true);

//         }).catch((error)=>{
//             console.log(error);
//         })
//     }).catch((error)=>{
//         if(error.code=== "auth/email-already-in-use")
//         {
//             toast.error("Email already exist");
//         }
//     })
// };

export const signUpUser = (name, email, password, setSuccess) => async (dispatch) => {
  //  const navigate=useNavigate();
  try {
    const userCredential = await fire.auth().createUserWithEmailAndPassword(email, password);

    // Update display name
    await userCredential.user.updateProfile({
      displayName: name,
    });

    // Now get updated user info
    const currentUser = fire.auth().currentUser;

    dispatch(
      loginUser({
        uid: currentUser.uid,
        name: currentUser.displayName,
        email: currentUser.email,
      })
    );

    setSuccess(true);
    toast.success("Account created successfully!");
    // navigate("/login");

  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      toast.error("Email already exists");
    } else {
      toast.error(error.message || "Signup failed");
      console.error(error);
    }
    setSuccess(false);
  }
};
export const signOutUser=()=>(dispatch)=>{
    fire.auth().signOut().then(()=>{
        dispatch(logoutUser());
    }).catch((error)=>{
        console.log(error);
    })
 
};


//this function is create for checking the user loggin or not
export const checkIsLoggedIn =()=>{
    return(dispatch)=>{
     fire.auth().onAuthStateChanged((user)=>{
        if(user){
            dispatch(loginUser({
                uid:user.uid,
                email:user.email,
                displayName:user.displayName,
            }))
        }
     })
    }
}