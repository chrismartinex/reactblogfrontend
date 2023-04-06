let userData = {}
async function createAccount(createdUser){
   const res = await fetch("https://blogapicmartinez.azurewebsites.net/User/addUser", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(createdUser),
   });
   if(!res.ok){
    const message = `An error has occured ${res.status}`;
    throw new Error(message);
   }
   let data = await res.json();
   console.log(data);
}
async function login(loginUser){
  const res = await fetch(
    "https://blogapicmartinez.azurewebsites.net/User/Login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    }
  );
  if (!res.ok) {
    const message = `An error has occured ${res.status}`;
    throw new Error(message);
  }
  let data = await res.json();
  console.log(data);
  return data
}

//create endpoint for this
async function GetLoggedInUserData(username){
  let res = await fetch(`https://cmblogapi.azurewebsites.net/User/userbyusername/${username}`);
  let data = await res.json();
  userData = data;
  console.log(userData);
}

async function  GetPublishedLogItem()
{
  let res = await fetch("https://blogapicmartinez.azurewebsites.net/blog/GetPublishedItems");
  let data = await res.json();
  return data;



}

function checkToken(){
  let result = false;
  let lsData = localStorage.getItem("Token");
  if(lsData != null){
    result = true;

  }
  return result;
}

function loggedInData() {
  return userData;

}

async function addBlogItem (blogItem){
  const res = await fetch(
    "https://blogapicmartinez.azurewebsites.net/blog/addBlogItem",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogItem),
    }
  );
  if (!res.ok) {
    const message = `An error has occured ${res.status}`;
    throw new Error(message);
  }
  let data = await res.json();
  console.log(data);
  return data;

}

async function getBlogItemsByUserId(userId){
   let res = await fetch(
     `https://cmblogapi.azurewebsites.net/blog/GetItemsByUserId/${userId}`
   );
   let data = await res.json();
   userData = data;
   console.log(userData);

}

async function updateBlogItem(blogItem){
  const res = await fetch(
    "https://blogapicmartinez.azurewebsites.net/blog/UpdateBlogItem",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogItem),
    }
  );
  if (!res.ok) {
    const message = `An error has occured ${res.status}`;
    throw new Error(message);
  }
  let data = await res.json();
  console.log(data);
  return data;
}

export { createAccount, login, GetLoggedInUserData, GetPublishedLogItem, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem }