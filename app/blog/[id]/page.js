



import axios from 'axios';
async function BlogPage({params:{id}}) {



  




 
      
        const res = await axios.get(`http://localhost:5000/get/${id}`);
      
    const data = res.data
   




console.log('the content work' , data )



  return (
    

<h1>{data?._id}</h1>
    
  );
}

export default BlogPage;
