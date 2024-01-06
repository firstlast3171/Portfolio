
function CustomContact({contacts={}}) {
     const contactsKey = Object.keys(contacts);

     return ( 
          <div className="p-2 rounded text-center">
               {contactsKey.length > 0 ? contactsKey.map((value,key)=>
               
                    value === "Phone" ? 
               <a key={key} href={"tel:"+contacts[value].info} className="fs-3 m-auto  p-2 my-2" style={{color : contacts[value].color}}>
               {contacts[value].icon}
               </a> 
                     :
               <a key={key} href={contacts[value].info} className="fs-3 m-auto  p-2 my-2" style={{color : contacts[value].color}}>
               {contacts[value].icon}
               </a>   
               
        
               ) : ''}
          </div>
      );
}

export default CustomContact;