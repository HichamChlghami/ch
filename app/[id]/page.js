



import axios from 'axios';
async function BlogPage({params}) {
const id = params.id


  




 
      
        const res = await axios.get(`http://localhost:5000/get/${id}`);
      
    const data = res.data
   




console.log('the content work' , data )



  return (
    
<>
<h1>{data?._id}</h1>
<div>
  {
    data.content.map((item , index)=>(
      <div key={index}>  
        {
          item.type === 'title1'&&(
            <h1>{item.value}</h1>
          )
        }
      </div>
    ))
  }
</div>
</>
    
  );
}

export default BlogPage;
