import React from 'react';

import CreditsList from './CreditsList';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import NewCreditForm from './NewCreditForm';

const CreditsPage = (props) => {
  return (
      <div>
        <h1>Credits</h1>
        <Link to="/">Back to Home</Link>

        <AccountBalance accountBalance={props.accountBalance}/>

        <NewCreditForm addNewCredit={props.addNewCredit}/>
        <br/>

        <CreditsList credits={props.credits}/>
      </div>
  );
};

export default CreditsPage;