export const fetchPosts = async()=> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    cache: "no-store"
  });
  const result = await res.json();
  return result.data
}

export const fetchPostById = async(id: string)=>{
    
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  const result = await res.json();
   
  return result.data
}


export const createPost = async(data: { title: string; content: string,author:string })=> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
