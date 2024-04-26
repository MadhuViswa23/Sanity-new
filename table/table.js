// import React from "react";
// import "./table.css";
// import { useState } from "react";


// //Bootstrap imported
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import Cards from "../cards/cards";







// const FaqItem = ({question, answer, icon}) =>{
  
//   const [show, setShow] = useState(false);
//   const toggleShow = () => {
//     setShow(!show);
//   };
//   return(
//     <div className={`faq-item ${show ? "active" : ""}`}>
//     <div className="faq-item-header" onClick={toggleShow}>{question}{icon}</div>
//     <div className="faq-item-body">
//       <div    className="faq-item-body-content">
//     {answer}
//       </div>
//     </div>
//     </div>
//   );
// }

// const FaqAccordian = ({data}) =>{
//   return(
// <>
// <div className="faq-accordian" >
//   <h2>Users</h2>
  
//   {data.map((item) => (
//         <FaqItem key={item.id}   question={item.question} answer={item.answer} icon={item.icon} />
//       ))}
// </div>



// </>
//   );
// }

// const data =[
//     {
//       id: 1,
//       question:  "Seats available-----------------------50------------------------20-----------------------Custom",
//       answer: "Choosing the right Sanity plan depends on your project's scale, needs, and budget. Assessing factors like the size of your team, expected content volume, and desired features will guide your decision",
      
       
      
//     },
//     {
//       id: 2,
//       question: "Free viewers---------------------------✔------------------------✔---------------------------✔     ",
//       answer: "Free plan: 20 included seats for free (no additional seats allowed above this), with access to the Administrator and Viewer roles Growth plan: Up to 50 available seats for $15 per seat / month with access to Admin, Editor, Viewer, and Developer roles Enterprise plan: Custom number of seats and roles"
//     },
//     {
//       id: 3,
//       question: "#roles available-----------------------2------------------------20-----------------------Custom",
//       answer: "No, we don’t charge for content types, and you can create as many as you want as long as you stay within the number of included unique attributes per dataset"
  
//     },
//     {
//       id: 4,
//       question: "Administrator--------------------------2------------------------20-----------------------Custom",
//       answer: "No, we don’t charge for content types, and you can create as many as you want as long as you stay within the number of included unique attributes per dataset"
  
//     },
//     {
//       id: 5,
//       question: "Datasets-------------------------------0---------------------$299 for 25k (Add-on)--------Custom",
//       answer: "Yes, we offer several paid add-ons that let you extend your Growth plan with enterprise-grade features."
  
//     },
//     {
//       id: 6,
//       question: "API requests (per month)---------------0---------------------$299 for 25k (Add-on)----------Custom",
//       answer: "Add-ons are available for Growth plan projects and will be billed in the subsequent billing cycle as a line item on your invoice.If you purchased an add-on by mistake, you can contact our account support team who will look into the case for you. Remember to attach your project ID."
  
//     },
//     {
//       id: 7,
//       question: "Enterprise SSO---------------------------✔------------------------✔---------------------------✔     ",
//       answer: "Yes, every new project created automatically gets access to additional paid features for a limited period of time, all for free."
  
//     },
//     {
//       id: 8,
//       question: "access control---------------------------✔------------------------✔---------------------------✔          ",
//       answer: "Yes, we offer a non-profit plan for eligible organizations."
  
//     },
//     {
//       id: 9,
//       question: "Custom access control-----------------------✔------------------------✔----------------------✔     ",
//       answer: "No. We list our prices per month, but you’re never locked into a minimum term."
  
//     },
//     {
//       id: 10,
//       question: "Free viewers---------------------------✔------------------------✔---------------------------✔     ",
//       answer: "Log into Manage, select your project from the Select project or organization dropdown, and navigate to the Plan tab. Here, you can see your current plan and change it to your plan of choice."
  
//     },
   
//   ];
//   const datas =[
//     {
//       id: 15,
//       questions: "2nd data",
//       answers: "Choosing the right Sanity plan depends on your project's scale, needs, and budget. Assessing factors like the size of your team, expected content volume, and desired features will guide your decision",
//       icons: " ✔"
//     },
//     {
//       id: 16,
//       questions: "how do you charge for seats/users ?",
//       answers: "Free plan: 20 included seats for free (no additional seats allowed above this), with access to the Administrator and Viewer roles Growth plan: Up to 50 available seats for $15 per seat / month with access to Admin, Editor, Viewer, and Developer roles Enterprise plan: Custom number of seats and roles"
//     },
    
//   ];
  


 



// const Tables = () => {

//     return(
      
// <>
// <Cards/>

// <div className="hold">
    

   
      
//       <FaqAccordian data= {data}/>,
     
     
 
       
//     </div>
// </>

//     );
// }
// export default Tables;





// // import React from 'react';
// // import './table.css'
// // export default function Tablee() {
// //   return (
// //     <>
// //     <h2>hello</h2>
    
// //     </>
// //   );
// // }


import React from 'react';
import Cards from '../cards/cards';

function Tables() {
  return (
    <>
    <Cards/>
    <div className="table-container" style={{ width: '100%', margin:'30px', padding: '10px', boxSizing: 'border-box' }}>
     <div className="faq-accordian" >   <h2>Users</h2></div>
      <table className="table">
        <tbody>
          <tr>
          
            <td>Seats available</td>
            <td>50</td>
            <td> 50</td>
            <td>Custom</td>
          </tr>
          <tr>
            <td>Free viewers   </td>
            <td>✔ </td>
            <td>✔ </td>
            <td>✔ </td>
          </tr>
          <tr>
            <td>#roles available</td>
            <td>50</td>
            <td> 50</td>
            <td>Custom</td>
          </tr>
          <tr>
            <td>Administrator   </td>
            <td>✔ </td>
            <td>✔ </td>
            <td>✔ </td>
          </tr>
          <tr>
            <td>Datasets </td>
            <td>✔ </td>
            <td>✔ </td>
            <td>✔ </td>
          </tr>
          <tr>
            <td>API requests (per month) </td>
            <td>$299 for 25k (Add-on)</td>
            <td>✔ </td>
            <td>✔ </td>
          </tr>
          <tr>
           
          </tr>
        </tbody>
      
      </table>
      <div className="faq-accordian" >   <h2>Unique attributes per month</h2></div>
      <table className="table">
        <tbody>
          <tr>
           <td>Real time administrative</td>
            <td>✔</td>
            <td> 20</td>
            <td>Custom</td>
          </tr>
          <tr>
            <td>Multiplayer presence  </td>
            <td>✔ </td>
            <td>✔ </td>
            <td>✔ </td>
          </tr>
          <tr>
            <td>AI Assist</td>
            <td>-</td>
            <td> -</td>
            <td>Custom</td>
          </tr>
          <tr>
            <td>Review charges taxes   </td>
            <td>3 days </td>
            <td>90 days</td>
            <td>365 days</td>
          </tr>
          <tr>
            <td>Datasets </td>
            <td>✔ </td>
            <td>✔ </td>
            <td>✔ </td>
          </tr>
          <tr>
            <td>API requests (per month) </td>
            <td>$299 for 25k (Add-on)</td>
            <td>✔ </td>
            <td>✔ </td>
          
          </tr>
         
        </tbody>
      </table>
      <hr/>
    </div>
    </>
  );
}

export default Tables;

