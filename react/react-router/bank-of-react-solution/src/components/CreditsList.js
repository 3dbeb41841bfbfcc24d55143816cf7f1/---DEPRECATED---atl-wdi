import React from 'react';

import Credit from './Credit';

const CreditsList = (props) => {

  const creditComponents = props.credits.map((credit, index) => {
    return <Credit
        description={credit.description}
        amount={credit.amount}
        date={credit.date}
        key={index}/>;
  });

  return (
      <div>
        {creditComponents}
      </div>
  );
};

export default CreditsList;