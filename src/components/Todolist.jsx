 import React from 'react';

 function Todolist(props) {
     return (
         <div className='w-full h-36 flex justify-center'>
             <ul className='w-5/6 h-full flex flex-col gap-1.5'>
                 {
                     props.task.map((task, index) => (
                         <div key={index} className='w-6/6 h-7 border-b flex items-center'>
                             <input type="checkbox" className='w-4 h-4 mr-2' />
                             <p className=''>{task.button}</p>
                         </div>
                     ))
                 }
             </ul>
         </div>
     );
 }

 export default Todolist;