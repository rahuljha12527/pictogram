import React from 'react';

const Home=()=>{
   return (
      <div className="home">
         <div className="card home-card">
             
             <h5>ramesh</h5>
             <div className="card-image">
                 <img  src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
             </div>
             <div className="card-content">
             <i class="material-icons" style={{color:"red"}}>favorite</i>
                 <h6>title</h6> 
                 <p>this is amazing post</p>
                 <input type="text" placeholder="add a comment"/>

             </div>
         </div>
         <div className="card home-card">
         <i class="material-icons" style={{color:"red"}}>favorite</i>
             <h5>ramesh</h5>
             <div className="card-image">
                 <img  src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
             </div>
             <div className="card-content">
                 <h6>title</h6> 
                 <p>this is amazing post</p>
                 <input type="text" placeholder="add a comment"/>

             </div>
         </div>
         <div className="card home-card">
             <h5>ramesh</h5>
             <div className="card-image">
                 <img  src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
             </div>
             <div className="card-content">
             <i class="material-icons" style={{color:"red"}}>favorite</i>
                 <h6>title</h6> 
                 <p>this is amazing post</p>
                 <input type="text" placeholder="add a comment"/>

             </div>
         </div>
      </div>
       
   )
}

export default Home;