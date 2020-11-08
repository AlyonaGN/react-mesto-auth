import React from 'react';

function AuthirizationPage(props) {

  return (

    <form className ="authorization" name={`${props.name}`} onSubmit={props.onSubmit} noValidate>

        <h2 className="authorization__header">{`${props.title}`}</h2>
        
        {props.children}

   </form>
  );
}

export default AuthirizationPage;